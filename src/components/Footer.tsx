import bocraLogo from "@/assets/bocra-logo.png";
import { ArrowRight } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-bocra-dark text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={bocraLogo} alt="BOCRA" className="h-14 w-14 mb-5 opacity-90" />
          <p className="text-primary-foreground/40 text-[13px] leading-relaxed font-light">
            Botswana Communications Regulatory Authority — Regulating for a Connected Future.
          </p>
          <div className="flex gap-2 mt-5">
            {["bg-bocra-blue", "bg-bocra-cyan", "bg-bocra-yellow", "bg-bocra-green", "bg-bocra-pink"].map((c) => (
              <span key={c} className={`w-2 h-2 rounded-full ${c}`} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground/80 mb-5 text-[12px] uppercase tracking-[0.15em]">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "About", "Services", "Licensing", "Complaints"].map((l) => (
              <li key={l}>
                <a href="#" className="text-[13px] text-primary-foreground/40 hover:text-accent transition-colors duration-300 font-light flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground/80 mb-5 text-[12px] uppercase tracking-[0.15em]">Resources</h4>
          <ul className="space-y-2.5">
            {["Publications", "Statistics", "Forms & Applications", "FAQs"].map((l) => (
              <li key={l}>
                <a href="#" className="text-[13px] text-primary-foreground/40 hover:text-accent transition-colors duration-300 font-light flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground/80 mb-5 text-[12px] uppercase tracking-[0.15em]">Contact Us</h4>
          <div className="space-y-2.5 text-[13px] text-primary-foreground/40 font-light">
            <p>Plot 206/207, Independence Avenue</p>
            <p>Private Bag 00495, Gaborone</p>
            <p className="hover:text-accent transition-colors cursor-pointer">+267 395 7755</p>
            <p className="hover:text-accent transition-colors cursor-pointer">info@bocra.org.bw</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/5 py-5">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-primary-foreground/30">
        <span>© {new Date().getFullYear()} BOCRA. All rights reserved.</span>
        <div className="flex gap-5 mt-2 sm:mt-0">
          <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
