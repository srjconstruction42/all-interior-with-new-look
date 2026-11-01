import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services, SITE, PHONE, PHONE_LABEL, WHATSAPP } from "@/data/services";
import NotFound from "./NotFound";
import InteriorsFitOuts from "./InteriorsFitOuts";

const steps = [
  ["Share your requirement", "Call, message or fill the form."],
  ["Site visit & estimate", "We review scope and send a clear quote."],
  ["Execution", "Trained team, safety checks and progress updates."],
  ["Handover", "Quality records and documented completion."],
];

const setMeta = (sel: string, make: () => HTMLElement, attr: string, val: string) => {
  let el = document.head.querySelector<HTMLElement>(sel);
  if (!el) { el = make(); document.head.appendChild(el); }
  el.setAttribute(attr, val);
};

const ServicePage = () => {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!s) return;
    const url = `${SITE}/services/${s.slug}`;
    document.title = s.metaTitle;
    setMeta('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), "content", s.metaDesc);
    setMeta('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", url);
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "ld-service";
    ld.text = JSON.stringify([
      { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.metaDesc, url,
        provider: { "@type": "GeneralContractor", name: "SRJ Construction", url: SITE, telephone: PHONE }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ]);
    document.head.appendChild(ld);
    return () => { ld.remove(); };
  }, [s]);

  if (!s) return <NotFound />;
  if (s.slug === "interiors-fit-outs") return <InteriorsFitOuts />;
  const Icon = s.icon;
  const others = services.filter((x) => x.slug !== s.slug);
  const cta = "bg-accent text-black hover:bg-accent/90 font-semibold";

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <section className="pt-28 pb-16 border-b border-white/10">
          <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-white/60 mb-6">
                <Link to="/" className="hover:text-accent">Home</Link><ChevronRight className="w-4 h-4" />
                <Link to="/#services" className="hover:text-accent">Services</Link><ChevronRight className="w-4 h-4" />
                <span className="text-white">{s.title}</span>
              </nav>
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6"><Icon className="w-7 h-7 text-black" /></div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">{s.title}</h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">{s.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className={cta} asChild><Link to={`/request-quote?service=${s.slug}`}>Get a free quote</Link></Button>
                <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-black" asChild>
                  <a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-2" />Call {PHONE_LABEL}</a>
                </Button>
              </div>
            </div>
            <aside className="rounded-2xl border border-accent/40 bg-white/5 p-6 lg:sticky lg:top-24">
              <h2 className="text-xl font-semibold mb-2">Talk to us about {s.title.toLowerCase()}</h2>
              <p className="text-sm text-white/70 mb-5">Mon to Sat, 9:30 AM to 6:30 PM. We reply to every enquiry.</p>
              <Button className={`${cta} w-full mb-3`} asChild><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />Chat on WhatsApp</a></Button>
              <Button variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white hover:text-black" asChild><a href={`tel:${PHONE}`}>Call now</a></Button>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">What we offer</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {s.offers.map((o) => (
                <div key={o.t} className="border-l-4 border-accent pl-5">
                  <h3 className="text-xl font-semibold mb-1">{o.t}</h3>
                  <p className="text-white/70">{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why choose SRJ Construction</h2>
              <ul className="space-y-4">
                {s.why.map((w) => (<li key={w} className="flex gap-3 text-lg text-white/85"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />{w}</li>))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How we work</h2>
              <ol className="space-y-5">
                {steps.map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="w-9 h-9 rounded-full bg-accent text-black font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <div><h3 className="font-semibold text-lg">{t}</h3><p className="text-white/70">{d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
            <Accordion type="single" collapsible>
              {s.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`f${i}`} className="border-white/20">
                  <AccordionTrigger className="text-left text-lg hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-white/75 text-base">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-accent text-black py-14">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to start your {s.title.toLowerCase()} project?</h2>
              <p className="text-black/75">Tell us what you need and get a clear quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-black text-white hover:bg-black/85" asChild><Link to={`/request-quote?service=${s.slug}`}>Request a quote</Link></Button>
              <Button size="lg" variant="outline" className="border-black bg-transparent text-black hover:bg-black hover:text-white" asChild><a href={`tel:${PHONE}`}>Call now</a></Button>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Our other services</h2>
            <div className="flex flex-wrap gap-3">
              {others.map((o) => (
                <Link key={o.slug} to={`/services/${o.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 hover:border-accent hover:text-accent transition-colors">
                  {o.title}<ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
