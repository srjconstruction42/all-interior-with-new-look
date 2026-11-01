import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Wrench, Users, Palette, ClipboardCheck, Shield, Landmark, Search, ShoppingCart, Truck, ExternalLink, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GEM_URL, PHONE, PHONE_LABEL } from "@/data/services";

const cats = [
  { icon: Package, title: "Materials", items: ["Cement", "AAC blocks", "Tiles", "Aggregates", "GFRP bars", "Paints and chemicals"] },
  { icon: Wrench, title: "Services", items: ["Civil works", "Waterproofing", "Electrical & plumbing", "Renovation and repairs"] },
  { icon: Users, title: "Manpower", items: ["Skilled labour", "Semi-skilled labour", "Unskilled labour", "Facility management staff"] },
  { icon: Palette, title: "Interiors", items: ["Office furniture", "Chairs, tables, storage", "Modular partitions", "Ceilings"] },
  { icon: ClipboardCheck, title: "Consultancy", items: ["Design services", "Estimation", "PMC", "Site supervision"] },
  { icon: Shield, title: "Safety", items: ["PPE supply", "Safety training", "Site protocols", "Compliance"] },
];
const steps = [
  [Search, "Find us on GeM", "Search for SRJ Construction or the item you need in the GeM catalog."],
  [ShoppingCart, "Order or raise a bid", "Place an order directly, or raise a bid for larger requirements."],
  [Truck, "We deliver", "We supply the material, service or manpower with proper documentation."],
] as const;

const GemCatalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GeM Catalog: Materials, Manpower, Services for Government Buyers | SRJ Construction";
    let m = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = "SRJ Construction GeM catalog: construction materials, GFRP bars, manpower, interiors, consultancy and safety supplies for government departments and PSUs.";
  }, []);
  const cta = "bg-accent text-black hover:bg-accent/90 font-semibold";
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <section className="pt-28 pb-14 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6"><Landmark className="w-7 h-7 text-black" /></div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">GeM catalog for government buyers</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">Materials, services, manpower and interiors for departments and public sector organizations, available through the Government e-Marketplace.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {GEM_URL && <Button size="lg" className={cta} asChild><a href={GEM_URL} target="_blank" rel="noopener noreferrer">View our GeM listing<ExternalLink className="w-4 h-4 ml-2" /></a></Button>}
              <Button size="lg" className={GEM_URL ? "bg-transparent border border-white/40 text-white hover:bg-white hover:text-black" : cta} asChild><Link to="/request-quote?service=gem">Get GeM consultation</Link></Button>
              <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-black" asChild><a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-2" />{PHONE_LABEL}</a></Button>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">What we supply</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cats.map((c) => (
                <div key={c.title} className="rounded-xl border border-white/15 p-6">
                  <div className="flex items-center gap-3 mb-4"><span className="w-11 h-11 rounded-lg bg-accent text-black flex items-center justify-center"><c.icon className="w-5 h-5" /></span><h3 className="text-xl font-semibold">{c.title}</h3></div>
                  <ul className="space-y-2 text-white/80">{c.items.map((i) => <li key={i} className="border-b border-white/10 pb-2 last:border-0">{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">How to buy from us on GeM</h2>
            <ol className="grid md:grid-cols-3 gap-8">
              {steps.map(([Icon, t, d], i) => (
                <li key={t} className="flex gap-4"><span className="w-10 h-10 rounded-full bg-accent text-black font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <div><h3 className="font-semibold text-lg flex items-center gap-2"><Icon className="w-5 h-5 text-accent" />{t}</h3><p className="text-white/70 mt-1">{d}</p></div></li>
              ))}
            </ol>
          </div>
        </section>
        <section className="bg-accent text-black py-14">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div><h2 className="text-3xl font-bold mb-2">Need something not listed?</h2><p className="text-black/75">Share your requirement or bid number and we will respond.</p></div>
            <Button size="lg" className="bg-black text-white hover:bg-black/85" asChild><Link to="/request-quote?service=gem">Request a GeM quote</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GemCatalog;

