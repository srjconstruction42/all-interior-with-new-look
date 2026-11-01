import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Wrench } from "lucide-react";

const Innovation = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Corrosion-free",
      description: "Ideal for water-exposed and coastal structures"
    },
    {
      icon: CheckCircle,
      title: "Lower lifecycle cost",
      description: "Reduced maintenance and longer service life"
    },
    {
      icon: Zap,
      title: "Lightweight & strong",
      description: "Easier handling, faster installation"
    },
    {
      icon: Wrench,
      title: "Non-conductive",
      description: "Suitable near power/EM environments"
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GFRP Reinforcement
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Glass Fiber Reinforced Polymer - We plan to adopt GFRP bars as an advanced alternative 
            to steel reinforcement where suitable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">
            Process & Execution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Digital Tracking</h4>
              <p className="text-white/80">Progress tracking and client updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Standardized BOQs</h4>
              <p className="text-white/80">Scheduling and QA checklists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Safety Training</h4>
              <p className="text-white/80">On-site audits and protocols</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;