import { Wifi, Radio, Mail, Globe, Shield, FileText, Users, Phone, BookOpen, BarChart3, AlertTriangle, CheckCircle, ArrowRight, Calendar, MapPin } from "lucide-react";

const services = [
  { icon: Wifi, label: "Telecommunications", color: "bg-bocra-blue", desc: "Regulating telecom operators to ensure quality service delivery and fair pricing for all consumers." },
  { icon: Radio, label: "Broadcasting", color: "bg-bocra-green", desc: "Overseeing radio and television broadcasting standards, licensing, and content regulation." },
  { icon: Mail, label: "Postal Services", color: "bg-bocra-pink", desc: "Regulating postal and courier service providers to maintain reliable delivery networks." },
  { icon: Globe, label: "Internet", color: "bg-bocra-yellow", desc: "Promoting affordable and accessible internet services across all regions of Botswana." },
];

const newsItems = [
  { date: "18 Mar 2026", title: "BOCRA Launches New Consumer Protection Framework", excerpt: "Comprehensive guidelines to safeguard the rights of telecommunications consumers.", category: "Regulation" },
  { date: "10 Mar 2026", title: "Public Consultation on 5G Spectrum Allocation", excerpt: "Stakeholders invited to participate in 5G spectrum allocation and licensing consultation.", category: "Licensing" },
  { date: "28 Feb 2026", title: "Annual Telecommunications Sector Report Released", excerpt: "Significant growth in mobile broadband penetration and digital service adoption.", category: "Publications" },
  { date: "15 Feb 2026", title: "Workshop on Cybersecurity Best Practices", excerpt: "Partnership with international bodies on cybersecurity standards for operators.", category: "Events" },
];

const quickLinks = [
  { icon: FileText, label: "Apply for a Licence", desc: "Submit your licence application through our streamlined portal." },
  { icon: AlertTriangle, label: "Lodge a Complaint", desc: "Report service quality issues or disputes with your provider." },
  { icon: BarChart3, label: "Telecoms Statistics", desc: "Access the latest market data and sector performance indicators." },
  { icon: BookOpen, label: "Publications", desc: "Browse research papers, regulatory decisions, and annual reports." },
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
      <section className="bg-secondary/40 py-5 md:py-6 border-b border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-base md:text-lg lg:text-xl font-heading font-semibold text-foreground text-center tracking-tight">
            Welcome to Botswana Communications Regulatory Authority
          </h2>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-3 bg-accent/10 px-4 py-1.5 rounded-full">What We Do</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight">
              Our Regulatory Mandate
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm font-light leading-relaxed">
              Ensuring fair competition, consumer protection, and universal access to communications services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.label} className="sleek-card bg-card rounded-xl p-6 border border-border/60 group">
                <div className={`w-11 h-11 rounded-xl ${s.color}/15 flex items-center justify-center mb-5`}>
                  <s.icon className={`w-5 h-5`} style={{ color: `var(--tw-shadow-color, currentColor)` }} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-[15px] mb-2">{s.label}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed font-light">{s.desc}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-bocra-blue hover:text-accent transition-colors duration-300 group-hover:gap-2.5">
                  Learn More <ArrowRight className="w-3.5 h-3.5 transition-all duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-3 bg-accent/10 px-4 py-1.5 rounded-full">Online Services</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              How Can We Help You?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((q) => (
              <a key={q.label} href="#" className="sleek-card flex items-start gap-4 bg-card rounded-xl p-5 border border-border/60 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <q.icon className="w-[18px] h-[18px] text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-[13px] mb-0.5">{q.label}</h3>
                  <p className="text-muted-foreground text-[12px] leading-relaxed font-light">{q.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-3 bg-accent/10 px-4 py-1.5 rounded-full">About BOCRA</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground tracking-tight">
            Regulating for a Connected Future
          </h2>
          <p className="mt-5 text-primary-foreground/60 max-w-2xl mx-auto text-sm leading-relaxed font-light">
            The Botswana Communications Regulatory Authority (BOCRA) is an independent body established under the Communications Regulatory Authority Act, 2012. Our mandate covers telecommunications, internet, broadcasting, postal services and the management of the .bw country code Top Level Domain.
          </p>
          <p className="mt-4 text-primary-foreground/50 max-w-2xl mx-auto text-sm leading-relaxed font-light">
            We work to create an enabling environment that encourages investment, innovation, and fair competition — ensuring every citizen enjoys affordable, reliable communications services.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { num: "50+", label: "Licensed Operators" },
              { num: "2.5M+", label: "Connected Citizens" },
              { num: "99%", label: "Network Coverage" },
              { num: "15+", label: "Years of Service" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-5">
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{s.num}</div>
                <div className="text-primary-foreground/50 text-[11px] mt-1 font-medium tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Our Mission", color: "text-bocra-blue", bg: "bg-bocra-blue/8", text: "To regulate the communications sector promoting affordable access, fair competition, innovation, economic growth, and consumer empowerment." },
              { icon: CheckCircle, title: "Our Vision", color: "text-bocra-green", bg: "bg-bocra-green/8", text: "A world-class regulator facilitating a digitally connected Botswana with affordable, reliable communications for all." },
              { icon: Users, title: "Our Values", color: "text-bocra-yellow", bg: "bg-bocra-yellow/8", text: "Transparency, accountability, fairness, integrity, and excellence guide every aspect of our regulatory activities." },
            ].map((item) => (
              <div key={item.title} className="sleek-card text-center p-8 rounded-xl border border-border/60 bg-card">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="inline-block text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2 bg-accent/10 px-4 py-1.5 rounded-full">Latest Updates</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">News & Notices</h2>
                </div>
                <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-semibold text-bocra-blue hover:text-accent transition-colors">
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="space-y-3">
                {newsItems.map((item, i) => (
                  <article key={i} className="sleek-card bg-card rounded-xl p-5 border border-border/60 group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-primary/5 rounded-xl items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                        <Calendar className="w-5 h-5 text-primary/60 group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-[11px] text-muted-foreground font-medium">{item.date}</span>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent bg-accent/8 px-2.5 py-0.5 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-foreground text-[14px] mb-1 group-hover:text-bocra-blue transition-colors duration-300 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-[12px] font-light leading-relaxed">{item.excerpt}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Events + Contact */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2 bg-accent/10 px-4 py-1.5 rounded-full">Calendar</span>
                <h2 className="text-2xl font-heading font-bold text-foreground tracking-tight">Upcoming Events</h2>
              </div>
              <div className="space-y-3">
                {events.map((ev, i) => (
                  <div key={i} className="sleek-card bg-card rounded-xl p-4 border border-border/60 group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex flex-col items-center justify-center">
                        <span className="text-[13px] font-bold text-accent-foreground leading-none">{ev.date.split(" ")[0]}</span>
                        <span className="text-[9px] font-semibold text-accent-foreground/70 uppercase">{ev.date.split(" ")[1]}</span>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground text-[13px] tracking-tight">{ev.title}</h4>
                        <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5 font-light">
                          <MapPin className="w-3 h-3" /> {ev.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact card */}
              <div className="bg-primary rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                <h4 className="font-heading font-bold text-primary-foreground text-base mb-2 tracking-tight relative z-10">Need Help?</h4>
                <p className="text-primary-foreground/50 text-[12px] mb-4 font-light leading-relaxed relative z-10">
                  Our team is here to assist with enquiries about licensing, complaints, or regulations.
                </p>
                <div className="space-y-1.5 relative z-10">
                  <a href="tel:+2673957755" className="flex items-center gap-2 text-[12px] text-secondary/80 hover:text-accent transition-colors">
                    <Phone className="w-3.5 h-3.5" /> +267 395 7755
                  </a>
                  <a href="mailto:info@bocra.org.bw" className="flex items-center gap-2 text-[12px] text-secondary/80 hover:text-accent transition-colors">
                    <Mail className="w-3.5 h-3.5" /> info@bocra.org.bw
                  </a>
                </div>
                <a href="#contact" className="relative z-10 mt-4 inline-flex items-center gap-1.5 px-5 py-2 bg-accent text-accent-foreground font-semibold rounded-full text-[12px] hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Banner */}
      <section className="py-12 md:py-16 bg-bocra-green relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bocra-green to-primary/30 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary-foreground mb-3 tracking-tight">
            Know Your Rights as a Consumer
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-[13px] mb-6 font-light leading-relaxed">
            You are entitled to fair pricing, quality of service, and access to a complaints resolution process.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="px-6 py-2.5 bg-primary-foreground text-foreground font-semibold rounded-full text-[13px] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              File a Complaint
            </a>
            <a href="#" className="px-6 py-2.5 border border-primary-foreground/30 text-primary-foreground font-medium rounded-full text-[13px] hover:bg-primary-foreground/10 transition-all duration-300">
              Consumer Guide
            </a>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-3 bg-accent/10 px-4 py-1.5 rounded-full">Market Data</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Botswana Telecoms at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { stat: "186%", label: "Mobile Penetration", color: "border-bocra-blue" },
              { stat: "67%", label: "Internet Penetration", color: "border-bocra-cyan" },
              { stat: "3.2M", label: "Active SIM Cards", color: "border-bocra-yellow" },
              { stat: "12", label: "Licensed ISPs", color: "border-bocra-green" },
              { stat: "98%", label: "2G Coverage", color: "border-bocra-pink" },
              { stat: "85%", label: "4G Coverage", color: "border-bocra-blue" },
              { stat: "45%", label: "Smartphone Adoption", color: "border-bocra-green" },
              { stat: "BWP 2.1B", label: "Sector Revenue", color: "border-bocra-yellow" },
            ].map((item) => (
              <div key={item.label} className={`sleek-card bg-card rounded-xl p-5 border-l-[3px] ${item.color} border border-r-border/60 border-t-border/60 border-b-border/60`}>
                <div className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">{item.stat}</div>
                <div className="text-[11px] text-muted-foreground mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 text-[12px] font-semibold text-bocra-blue hover:text-accent transition-colors duration-300">
              <BarChart3 className="w-4 h-4" /> View Full Statistics Report <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
