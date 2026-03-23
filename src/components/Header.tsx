import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import bocraLogo from "@/assets/bocra-logo.png";
import SearchDialog from "@/components/SearchDialog";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Licensing", href: "#" },
  { label: "Domains", href: "#" },
  { label: "Complaints", href: "#" },
  { label: "News", href: "#news" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-primary/10 py-0"
          : "bg-transparent py-1"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={bocraLogo}
            alt="BOCRA Logo"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            }`}
          />
          <div className="hidden sm:block">
            <span className="text-base md:text-lg font-heading font-bold text-primary-foreground tracking-tight">
              BOCRA
            </span>
            <p className="text-[9px] md:text-[10px] text-primary-foreground/50 leading-tight font-light">
              Botswana Communications<br />Regulatory Authority
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-3 py-2 text-[13px] font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <Search className="w-[18px] h-[18px]" />
            <span className="hidden sm:inline text-[13px] font-medium">Search</span>
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 text-[13px] font-semibold bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300"
          >
            Get in Touch
          </a>
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-primary-foreground hover:bg-primary-foreground/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass px-6 pb-5 pt-2 border-t border-primary-foreground/5">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-[13px] text-primary-foreground/70 hover:text-primary-foreground transition-colors border-b border-primary-foreground/5 last:border-0"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 inline-flex px-5 py-2 text-[13px] font-semibold bg-accent text-accent-foreground rounded-full"
          >
            Get in Touch
          </a>
        </nav>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};

export default Header;
