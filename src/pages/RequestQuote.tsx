import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Check, CheckCircle2, Landmark, MapPin, MessageCircle, Phone, Send, Clock, ShieldCheck, Building2, Users, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendLead } from "@/lib/sendLead";
import { services, PHONE, PHONE_LABEL, WHATSAPP } from "@/data/services";

const options = [
  ...services.map((s) => ({ slug: s.slug, title: s.title, icon: s.icon, blurb: `${s.offers[0].t}, ${s.offers[1].t}` })),
  { slug: "gem", title: "GeM / Government supply", icon: Landmark, blurb: "Products, services and manpower for government buyers" },
];
const clientTypes = ["Homeowner", "Business / Company", "Government / PSU", "Contractor"];
const timelines = ["Urgent (this month)", "1 to 3 months", "3 to 6 months", "Just planning"];
const budgets = ["Below 5 lakh", "5 to 25 lakh", "25 lakh to 1 crore", "Above 1 crore", "Not sure yet"];
const prefs = ["Phone call", "WhatsApp", "Email"];

const Chip = ({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button type="button" onClick={onClick} aria-pressed={on}
    className={`rounded-full border px-4 py-2 text-sm transition-colors ${on ? "border-accent bg-accent text-black font-semibold" : "border-white/25 text-white/85 hover:border-accent"}`}>
    {children}
  </button>
);

const Step = ({ n, title, sub }: { n: number; title: string; sub?: string }) => (
  <div className="flex items-start gap-4 mb-6">
    <span className="w-10 h-10 rounded-full bg-accent text-black font-bold flex items-center justify-center shrink-0">{n}</span>
    <div><h2 className="text-2xl font-bold">{title}</h2>{sub && <p className="text-white/65">{sub}</p>}</div>
  </div>
);

const field = "bg-black border-white/25 text-white h-12 placeholder:text-white/40";

const RequestQuote = () => {
  const [params] = useSearchParams();
  const [selected, setSelected] = useState<string[]>([]);
  const [clientType, setClientType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [pref, setPref] = useState("Phone call");
  const [f, setF] = useState({ name: "", phone: "", email: "", location: "", details: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<"" | "sent" | "whatsapp">("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Request a Quote | SRJ Construction";
    let m = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = "Tell SRJ Construction which services you need, construction, manpower, materials, GFRP bars, interiors or GeM supply, and get a clear quote.";
    const pre = params.get("service");
    if (pre && options.some((o) => o.slug === pre)) setSelected([pre]);
  }, [params]);

  const toggle = (slug: string) => setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));
  const titles = options.filter((o) => selected.includes(o.slug)).map((o) => o.title);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const wa = `${WHATSAPP}?text=${encodeURIComponent(
    `Hello SRJ Construction, I need a quote.\nServices: ${titles.join(", ")}\nName: ${f.name}\nPhone: ${f.phone}\nLocation: ${f.location || "-"}\nClient type: ${clientType || "-"}\nTimeline: ${timeline || "-"}\nBudget: ${budget || "-"}\nDetails: ${f.details || "-"}`
  )}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!selected.length) return setError("Please select at least one service.");
    if (f.phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid phone number.");
    setBusy(true);try {
    await sendLead("New quote request: " + titles.join(", "), {
        Services: titles.join(", "), Client_type: clientType || "-", Timeline: timeline || "-", Budget: budget || "-",
        Contact_preference: pref, Name: f.name, Phone: f.phone, Email: f.email || "-", Location: f.location || "-", Details: f.details || "-",
      });
      setDone("sent");
    } catch {
      setDone("whatsapp");
    }
    setBusy(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-accent">Home</Link><ChevronRight className="w-4 h-4" /><span className="text-white">Request a quote</span>
          </nav>

          {done ? (
            <div className="max-w-2xl mx-auto text-center border border-accent/40 rounded-2xl bg-white/5 p-10">
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-5" />
              <h1 className="text-3xl font-bold mb-3">{done === "sent" ? `Thank you, ${f.name}` : "One last step, send it on WhatsApp"}</h1>
              <p className="text-white/75 mb-6">
                {done === "sent"
                  ? "We received your request and will contact you by " + pref.toLowerCase() + " within one working day."
                  : "We could not send the form online. Tap the button below to send your request to us on WhatsApp. It is not sent until you do."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold" asChild>
                  <a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />{done === "sent" ? "Also send on WhatsApp" : "Send on WhatsApp"}</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-black" asChild><Link to="/">Back to home</Link></Button>
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-3xl mb-12">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Tell us what you need. We will send a clear quote.</h1>
                <p className="text-lg text-white/75">Choose your services, share a few project details and we will reply within one working day.</p>
              </div>

              <form onSubmit={submit} className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
                <div className="space-y-14">
                  <section>
                    <Step n={1} title="Which services do you need?" sub="Select all that apply." />
                    <div className="grid sm:grid-cols-2 gap-4">
                      {options.map((o) => {
                        const on = selected.includes(o.slug);
                        const Icon = o.icon;
                        return (
                          <button type="button" key={o.slug} onClick={() => toggle(o.slug)} aria-pressed={on}
                            className={`relative text-left rounded-xl border p-5 transition-colors ${on ? "border-accent bg-accent/10" : "border-white/15 hover:border-white/40"}`}>
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${on ? "bg-accent text-black" : "bg-white/10 text-accent"}`}><Icon className="w-6 h-6" /></div>
                              <div><div className="font-semibold text-lg">{o.title}</div><div className="text-sm text-white/60">{o.blurb}</div></div>
                            </div>
                            {on && <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center"><Check className="w-4 h-4" /></span>}
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section>
                    <Step n={2} title="About your project" />
                    <div className="space-y-6">
                      <div><p className="font-medium mb-3 flex items-center gap-2"><Building2 className="w-4 h-4 text-accent" />I am a</p>
                        <div className="flex flex-wrap gap-2">{clientTypes.map((c) => <Chip key={c} on={clientType === c} onClick={() => setClientType(c)}>{c}</Chip>)}</div></div>
                      <div><p className="font-medium mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-accent" />When do you want to start?</p>
                        <div className="flex flex-wrap gap-2">{timelines.map((c) => <Chip key={c} on={timeline === c} onClick={() => setTimeline(c)}>{c}</Chip>)}</div></div>
                      <div><p className="font-medium mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" />Approximate budget</p>
                        <div className="flex flex-wrap gap-2">{budgets.map((c) => <Chip key={c} on={budget === c} onClick={() => setBudget(c)}>{c}</Chip>)}</div></div>
                      <div><label htmlFor="location" className="font-medium mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" />Project location</label>
                        <Input id="location" value={f.location} onChange={set("location")} className={field} placeholder="City / district" /></div>
                      <div><label htmlFor="details" className="font-medium mb-3 block">Project details</label>
                        <Textarea id="details" value={f.details} onChange={set("details")} className={`${field} min-h-[130px]`} placeholder="Size, quantity, materials, workers needed, or anything else we should know" /></div>
                    </div>
                  </section>

                  <section>
                    <Step n={3} title="How can we reach you?" />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div><label htmlFor="name" className="block text-sm font-medium mb-2">Full name *</label>
                        <Input id="name" required value={f.name} onChange={set("name")} className={field} placeholder="Your name" autoComplete="name" /></div>
                      <div><label htmlFor="phone" className="block text-sm font-medium mb-2">Phone / WhatsApp *</label>
                        <Input id="phone" type="tel" required value={f.phone} onChange={set("phone")} className={field} placeholder="+91 XXXXX XXXXX" autoComplete="tel" /></div>
                      <div className="sm:col-span-2"><label htmlFor="email" className="block text-sm font-medium mb-2">Email (optional)</label>
                        <Input id="email" type="email" value={f.email} onChange={set("email")} className={field} placeholder="you@example.com" autoComplete="email" /></div>
                    </div>
                    <p className="font-medium mt-6 mb-3">Best way to contact you</p>
                    <div className="flex flex-wrap gap-2">{prefs.map((c) => <Chip key={c} on={pref === c} onClick={() => setPref(c)}>{c}</Chip>)}</div>
                  </section>

                  {error && <p role="alert" className="rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-red-300">{error}</p>}
                  <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto bg-accent text-black hover:bg-accent/90 font-semibold px-10">
                    {busy ? "Sending..." : "Request my quote"}<Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <aside className="rounded-2xl border border-accent/40 bg-white/5 p-6 lg:sticky lg:top-24">
                  <h2 className="text-xl font-semibold mb-4">Your request</h2>
                  {titles.length ? (
                    <ul className="space-y-2 mb-6">{titles.map((t) => <li key={t} className="flex gap-2 text-white/85"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" />{t}</li>)}</ul>
                  ) : <p className="text-white/60 mb-6">No service selected yet.</p>}
                  <div className="border-t border-white/15 pt-5 space-y-3">
                    <p className="text-sm text-white/70">Prefer to talk now?</p>
                    <Button type="button" variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white hover:text-black" asChild><a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-2" />{PHONE_LABEL}</a></Button>
                    <Button type="button" variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white hover:text-black" asChild><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp us</a></Button>
                    <p className="text-xs text-white/50">Mon to Sat, 9:30 AM to 6:30 PM</p>
                  </div>
                </aside>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestQuote;

