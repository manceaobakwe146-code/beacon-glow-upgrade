import bocraLogo from "@/assets/bocra-logo.png";

const Footer = () => (
  <footer id="contact" className="bg-bocra-dark text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={bocraLogo} alt="BOCRA" className="h-16 w-16 mb-4" />
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Botswana Communications Regulatory Authority – Regulating for a Connected Future.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-accent mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Home", "About", "Services", "Licensing", "Complaints"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-accent mb-4 text-sm uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Publications", "Statistics", "Forms & Applications", "FAQs"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-accent mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p>Plot 206/207, Independence Avenue</p>
            <p>Private Bag 00495, Gaborone, Botswana</p>
            <p>Tel: +267 395 7755</p>
            <p>Email: info@bocra.org.bw</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/40">
        <span>© {new Date().getFullYear()} BOCRA. All rights reserved.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
