import { Wifi, Radio, Mail, Globe, Shield, FileText, Users, Phone, BookOpen, BarChart3, AlertTriangle, CheckCircle, ArrowRight, Calendar, MapPin } from "lucide-react";

const services = [
  { icon: Wifi, label: "Telecommunications", color: "bg-bocra-blue", desc: "Regulating telecom operators to ensure quality service delivery and fair pricing for all consumers." },
  { icon: Radio, label: "Broadcasting", color: "bg-bocra-green", desc: "Overseeing radio and television broadcasting standards, licensing, and content regulation." },
  { icon: Mail, label: "Postal Services", color: "bg-bocra-pink", desc: "Regulating postal and courier service providers to maintain reliable delivery networks." },
  { icon: Globe, label: "Internet", color: "bg-bocra-yellow", desc: "Promoting affordable and accessible internet services across all regions of Botswana." },
];

const newsItems = [
  {
    date: "18 March 2026",
    title: "BOCRA Launches New Consumer Protection Framework",
    excerpt: "The Authority has introduced comprehensive guidelines to safeguard the rights of telecommunications consumers in Botswana.",
    category: "Regulation",
  },
  {
    date: "10 March 2026",
    title: "Public Consultation on 5G Spectrum Allocation",
    excerpt: "BOCRA invites stakeholders to participate in the upcoming public consultation regarding 5G spectrum allocation and licensing.",
    category: "Licensing",
  },
  {
    date: "28 February 2026",
    title: "Annual Telecommunications Sector Report Released",
    excerpt: "The 2025 annual report reveals significant growth in mobile broadband penetration and digital service adoption across Botswana.",
    category: "Publications",
  },
  {
    date: "15 February 2026",
    title: "Workshop on Cybersecurity Best Practices",
    excerpt: "BOCRA partnered with international bodies to host a workshop on cybersecurity standards for operators and service providers.",
    category: "Events",
  },
];

const quickLinks = [
  { icon: FileText, label: "Apply for a Licence", desc: "Submit your licence application online through our streamlined portal." },
  { icon: AlertTriangle, label: "Lodge a Complaint", desc: "Report service quality issues or disputes with your communications provider." },
  { icon: BarChart3, label: "Telecoms Statistics", desc: "Access the latest market data, reports, and sector performance indicators." },
  { icon: BookOpen, label: "Publications", desc: "Browse our research papers, regulatory decisions, and annual reports." },
  { icon: Shield, label: "Consumer Rights", desc: "Know your rights as a communications consumer in Botswana." },
  { icon: MapPin, label: ".bw Domain Registration", desc: "Register and manage your Botswana country-code domain name." },
];

const events = [
  { date: "05 Apr", title: "Stakeholder Engagement Forum", location: "GICC, Gaborone" },
  { date: "18 Apr", title: "Broadcasting Licensing Workshop", location: "Cresta Lodge, Gaborone" },
  { date: "02 May", title: "ICT Innovation Summit 2026", location: "Fairgrounds, Gaborone" },
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
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bocra-blue hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links / Services Portal */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Online Services</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-foreground">
              How Can We Help You?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickLinks.map((q) => (
              <a
                key={q.label}
                href="#"
                className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border hover:border-accent hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:bg-accent transition-colors">
                  <q.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{q.label}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{q.desc}</p>
                </div>
              </a>
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
            The Botswana Communications Regulatory Authority (BOCRA) is an independent body established under the Communications Regulatory Authority Act, 2012 to regulate the communications sector in Botswana. Our mandate covers telecommunications, internet and information and communications technologies (ICTs), radio communications, broadcasting, postal services and the management of the .bw country code Top Level Domain.
          </p>
          <div className="mt-6 text-primary-foreground/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            <p>
              BOCRA's vision is to be a world-class regulator that promotes access to affordable, reliable and high-quality communications services for all Batswana. We work to create an enabling environment that encourages investment, innovation, and fair competition in the communications sector.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { num: "50+", label: "Licensed Operators" },
              { num: "2.5M+", label: "Connected Citizens" },
              { num: "99%", label: "Network Coverage" },
              { num: "15+", label: "Years of Service" },
            ].map((s) => (
              <div key={s.label} className="bg-primary-foreground/5 rounded-lg p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent">{s.num}</div>
                <div className="text-primary-foreground/60 text-xs md:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-bocra-blue/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-bocra-blue" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To regulate the communications sector in Botswana in a manner that promotes affordable access, fair competition, innovation, economic growth, and the empowerment of consumers and citizens.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-bocra-green/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-bocra-green" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A world-class regulator facilitating a digitally connected Botswana where every citizen enjoys affordable, reliable and high-quality communications services that drive economic and social development.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-bocra-yellow/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-bocra-yellow" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-3">Our Values</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transparency, accountability, fairness, integrity, and excellence guide every aspect of our regulatory activities. We are committed to stakeholder engagement and evidence-based decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
                  <h2 className="mt-1 text-2xl md:text-3xl font-heading font-bold text-foreground">News & Notices</h2>
                </div>
                <a href="#" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-bocra-blue hover:text-accent transition-colors">
                  View All <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-4">
                {newsItems.map((item, i) => (
                  <article
                    key={i}
                    className="bg-card rounded-lg p-5 border border-border hover:border-accent/50 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex flex-shrink-0 w-14 h-14 bg-primary rounded-lg items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-foreground text-base mb-1 hover:text-bocra-blue transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <a href="#" className="sm:hidden mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bocra-blue hover:text-accent transition-colors">
                View All News <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="mb-8">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Mark Your Calendar</span>
                <h2 className="mt-1 text-2xl md:text-3xl font-heading font-bold text-foreground">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {events.map((ev, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-lg p-5 border border-border hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs font-bold text-accent-foreground leading-none">{ev.date.split(" ")[0]}</span>
                        <span className="text-[10px] font-semibold text-accent-foreground/80 uppercase">{ev.date.split(" ")[1]}</span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground text-sm">{ev.title}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {ev.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact quick card */}
              <div className="mt-6 bg-primary rounded-lg p-6">
                <h4 className="font-heading font-bold text-primary-foreground text-lg mb-2">Need Help?</h4>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Our team is here to assist you with any enquiries about licensing, complaints, or regulations.
                </p>
                <div className="space-y-2">
                  <a href="tel:+2673957755" className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors">
                    <Phone className="w-4 h-4" /> +267 395 7755
                  </a>
                  <a href="mailto:info@bocra.org.bw" className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors">
                    <Mail className="w-4 h-4" /> info@bocra.org.bw
                  </a>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-md text-sm hover:brightness-110 transition"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Awareness Banner */}
      <section className="py-10 md:py-14 bg-bocra-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
            Know Your Rights as a Consumer
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-base mb-6">
            As a consumer of communications services in Botswana, you are entitled to fair pricing, quality of service, and access to a complaints resolution process. BOCRA is here to protect your interests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-primary-foreground text-foreground font-semibold rounded-md hover:bg-primary-foreground/90 transition text-sm">
              File a Complaint
            </a>
            <a href="#" className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition text-sm">
              Consumer Guide
            </a>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Market Data</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-foreground">
              Botswana Telecoms at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { stat: "186%", label: "Mobile Penetration Rate", color: "border-bocra-blue" },
              { stat: "67%", label: "Internet Penetration", color: "border-bocra-cyan" },
              { stat: "3.2M", label: "Active SIM Cards", color: "border-bocra-yellow" },
              { stat: "12", label: "Licensed ISPs", color: "border-bocra-green" },
              { stat: "98%", label: "Population Coverage (2G)", color: "border-bocra-pink" },
              { stat: "85%", label: "Population Coverage (4G)", color: "border-bocra-blue" },
              { stat: "45%", label: "Smartphone Adoption", color: "border-bocra-green" },
              { stat: "BWP 2.1B", label: "Sector Revenue (2025)", color: "border-bocra-yellow" },
            ].map((item) => (
              <div
                key={item.label}
                className={`bg-card rounded-lg p-5 border-l-4 ${item.color} shadow-sm`}
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{item.stat}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-bocra-blue hover:text-accent transition-colors">
              <BarChart3 className="w-4 h-4" /> View Full Statistics Report <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
