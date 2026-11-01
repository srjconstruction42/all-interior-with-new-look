import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Vision",
      subtitle: "Modern, reliable infrastructure",
      description: "Build durable structures using smarter materials and practices that reduce maintenance and extend lifespan."
    },
    {
      icon: Eye,
      title: "Mission", 
      subtitle: "Quality • Speed • Safety",
      description: "Deliver projects faster without compromising on safety or finish, enabled by trained manpower and process discipline."
    },
    {
      icon: Heart,
      title: "Values",
      subtitle: "Trust & Transparency", 
      description: "Clear communication, predictable timelines and measurable quality standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
            About SRJ Construction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-looking construction company focused on innovation, efficiency and sustainability. 
            Our plan is to bring advanced reinforcement, streamlined execution and transparent client communication to every project.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-construction-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-construction-gray mb-2">
                  {value.title}
                </h3>
                <h4 className="text-lg font-semibold text-accent mb-4">
                  {value.subtitle}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-section rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-construction-gray mb-2">100+</div>
              <div className="text-muted-foreground">Projects Planned</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-construction-gray mb-2">50+</div>
              <div className="text-muted-foreground">Expert Team</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-construction-gray mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-construction-gray mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;