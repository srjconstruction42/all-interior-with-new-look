import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Wrench, Users, Palette, ClipboardCheck, Shield, ExternalLink } from "lucide-react";

const GeM = () => {
  const categories = [
    {
      icon: Package,
      title: "Materials",
      items: ["Cement", "AAC blocks", "Tiles", "Aggregates", "GFRP bars", "Paints and chemicals"]
    },
    {
      icon: Wrench,
      title: "Services", 
      items: ["Civil works", "Waterproofing", "Electrical & plumbing", "Renovation and repairs"]
    },
    {
      icon: Users,
      title: "Manpower",
      items: ["Skilled labour", "Semi-skilled labour", "Unskilled labour", "Facility management staff"]
    },
    {
      icon: Palette,
      title: "Interiors",
      items: ["Office furniture", "Chairs, tables, storage", "Modular partitions", "Ceilings"]
    },
    {
      icon: ClipboardCheck,
      title: "Consultancy",
      items: ["Design services", "Estimation", "PMC", "Site supervision"]
    },
    {
      icon: Shield,
      title: "Safety",
      items: ["PPE supply", "Safety training", "Site protocols", "Compliance"]
    }
  ];

  return (
    <section id="gem" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Package className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Government e-Marketplace</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
            GeM-Ready Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Products, services and manpower categories planned for Government e-Marketplace (GeM).
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-construction-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center mr-3">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-construction-gray">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready for Government Projects
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our comprehensive GeM catalog ensures seamless procurement for government departments 
            and public sector organizations across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black" asChild><a href="/gem-catalog">View GeM Catalog<ExternalLink className="w-4 h-4 ml-2" /></a></Button>
            <Button className="bg-accent text-black hover:bg-accent/90 font-semibold" asChild><a href="/request-quote?service=gem">Get GeM Consultation</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeM;