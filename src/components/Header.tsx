import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import bocraLogo from "@/assets/bocra-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Licensing", href: "#" },
  { label: "Domains", href: "#" },
  { label: "Complaints", href: "#" },
  { label: "News", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={bocraLogo}
            alt="BOCRA Logo"
            className="h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
          />
          <div className="hidden sm:block">
            <span className="text-lg md:text-xl font-heading font-bold text-primary-foreground tracking-wide">
              BOCRA
            </span>
            <p className="text-[10px] md:text-xs text-secondary leading-tight">
              Botswana Communications<br />Regulatory Authority
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="text-primary-foreground/70 hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-md hover:brightness-110 transition"
          >
            Get in Touch
          </a>
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex px-4 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-md"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
