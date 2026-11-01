import logooImage from "@/assets/logoo.jpg";


const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "/#services" },
    { name: "GFRP", href: "/#innovation" },
    { name: "GeM", href: "/#gem" },
    { name: "GeM Catalog", href: "/gem-catalog" },
    { name: "Request a Quote", href: "/request-quote" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <footer className=" bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            
               <div className="w-96 h-32 bg-gradient-hero rounded-lg flex items-center justify-center">
              <img
          src={logooImage}
          alt="SRJ Construction logo"
          className="w-full h-full object-cover"
        />
            </div>
            </div>
            <p className="text-white/80 mb-4">
              Building smart, strong & sustainable projects with innovative methods and quality execution.
            </p>
            <p className="text-sm text-white/60">
              © SRJ Construction. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/80">
              <p><a href="tel:+917050601752" className="hover:text-accent">+91 7050601752</a></p>
              <p><a href="mailto:srjconstruction42@gmail.com" className="hover:text-accent break-all">srjconstruction42@gmail.com</a></p>
              <p className="text-sm">Mon–Sat • 9:30 AM – 6:30 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Strength you can trust • Quality you can see
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
