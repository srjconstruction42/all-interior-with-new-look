import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services, PHONE, PHONE_LABEL, WHATSAPP } from "@/data/services";
import { LEAD_EMAIL, sendLead } from "@/lib/sendLead";

const field = "bg-black border-white/25 text-white h-12 placeholder:text-white/40";
const topics = [...services.map((s) => s.title), "GeM / Government supply", "Something else"];

const Contact = () => {
  const [f, setF] = useState({ name: "", phone: "", message: "" });
  const [topic, setTopic] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<"" | "sent" | "whatsapp">("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const wa = `${WHATSAPP}?text=${encodeURIComponent(`Hello SRJ Construction,\nName: ${f.name}\nPhone: ${f.phone}\nInterested in: ${topic || "-"}\nMessage: ${f.message || "-"}`)}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (f.phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid 10-digit phone number.");
    setBusy(true);
    try {
      await sendLead(`Get in touch: ${topic || "General enquiry"}`, { Name: f.name, Phone: f.phone, Interested_in: topic || "-", Message: f.message || "-" });
      setDone("sent");
    } catch { setDone("whatsapp"); }
    setBusy(false);
  };

  const methods = [
    { icon: Phone, label: "Call us", value: PHONE_LABEL, href: `tel:${PHONE}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP },
    { icon: Mail, label: "Email", value: LEAD_EMAIL, href: `mailto:${LEAD_EMAIL}` },
    { icon: Clock, label: "Working hours", value: "Mon to Sat, 9:30 AM to 6:30 PM", href: "" },
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-white/75 mb-8 max-w-lg">Tell us what you need. Most enquiries get a reply within one working day.</p>
          <ul className="space-y-4 mb-8">
            {methods.map((m) => (
              <li key={m.label} className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-lg bg-accent text-black flex items-center justify-center shrink-0"><m.icon className="w-6 h-6" /></span>
                <div>
                  <div className="text-sm text-white/60">{m.label}</div>
                  {m.href ? <a href={m.href} className="text-lg font-medium hover:text-accent break-all" {...(m.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{m.value}</a> : <div className="text-lg font-medium">{m.value}</div>}
                </div>
              </li>
            ))}
          </ul>
          <Link to="/request-quote" className="inline-block text-accent font-semibold hover:underline">Need a detailed quote? Use the full quote form →</Link>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          {done ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{done === "sent" ? `Thank you, ${f.name}` : "One last step"}</h3>
              <p className="text-white/75 mb-6">{done === "sent" ? "We have your message and will call you soon." : "We could not send the form online. Tap below to send it on WhatsApp. It is not sent until you do."}</p>
              <Button className="bg-accent text-black hover:bg-accent/90 font-semibold" asChild><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />{done === "sent" ? "Also message on WhatsApp" : "Send on WhatsApp"}</a></Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <h3 className="text-2xl font-bold">Send us a message</h3>
              <div><label htmlFor="c-name" className="block text-sm font-medium mb-2">Your name *</label>
                <Input id="c-name" required value={f.name} onChange={set("name")} className={field} placeholder="Full name" autoComplete="name" /></div>
              <div><label htmlFor="c-phone" className="block text-sm font-medium mb-2">Phone / WhatsApp *</label>
                <Input id="c-phone" type="tel" required value={f.phone} onChange={set("phone")} className={field} placeholder="+91 XXXXX XXXXX" autoComplete="tel" /></div>
              <div>
                <p className="text-sm font-medium mb-2">What do you need?</p>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button type="button" key={t} aria-pressed={topic === t} onClick={() => setTopic(topic === t ? "" : t)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${topic === t ? "border-accent bg-accent text-black font-semibold" : "border-white/25 text-white/85 hover:border-accent"}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div><label htmlFor="c-msg" className="block text-sm font-medium mb-2">Message (optional)</label>
                <Textarea id="c-msg" value={f.message} onChange={set("message")} className={`${field} min-h-[100px]`} placeholder="A few words about your requirement" /></div>
              {error && <p role="alert" className="rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-red-300 text-sm">{error}</p>}
              <Button type="submit" size="lg" disabled={busy} className="w-full bg-accent text-black hover:bg-accent/90 font-semibold">{busy ? "Sending..." : "Send message"}<Send className="w-4 h-4 ml-2" /></Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
