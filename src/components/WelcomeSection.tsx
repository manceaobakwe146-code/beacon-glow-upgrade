import { Wifi, Radio, Mail, Globe } from "lucide-react";

const services = [
  { icon: Wifi, label: "Telecommunications", color: "bg-bocra-blue", desc: "Regulating telecom operators to ensure quality service delivery." },
  { icon: Radio, label: "Broadcasting", color: "bg-bocra-green", desc: "Overseeing radio and television broadcasting standards." },
  { icon: Mail, label: "Postal Services", color: "bg-bocra-pink", desc: "Regulating postal and courier service providers." },
  { icon: Globe, label: "Internet", color: "bg-bocra-yellow", desc: "Promoting affordable and accessible internet services." },
];

const WelcomeSection = () => {
  return (
    <>
      {/* Welcome banner */}
      <section className="bg-secondary py-4 md:py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-secondary-foreground text-center">
            Welcome to Botswana Communications Regulatory Authority
          </h2>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Our Regulatory Mandate
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              BOCRA regulates the communications sector in Botswana, ensuring fair competition, consumer protection, and universal access.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.label}
                className="group bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.label}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About BOCRA</span>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground">
            Regulating for a Connected Future
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            The Botswana Communications Regulatory Authority (BOCRA) is an independent body established to regulate the communications sector. Our mandate covers telecommunications, internet, broadcasting, and postal services, ensuring that all Batswana have access to affordable, reliable, and high-quality communications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { num: "50+", label: "Licensed Operators" },
              { num: "2.5M+", label: "Connected Citizens" },
              { num: "99%", label: "Network Coverage" },
              { num: "15+", label: "Years of Service" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">{s.num}</div>
                <div className="text-primary-foreground/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
