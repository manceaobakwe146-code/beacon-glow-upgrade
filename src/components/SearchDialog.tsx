import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, ArrowRight, FileText, Globe, Radio, Wifi, Mail, Shield, Users, BarChart3, BookOpen, AlertTriangle, MapPin } from "lucide-react";

const searchableItems = [
  { title: "Home", href: "#", category: "Pages", description: "Return to the homepage" },
  { title: "About BOCRA", href: "#about", category: "Pages", description: "Learn about the Botswana Communications Regulatory Authority" },
  { title: "Services", href: "#services", category: "Pages", description: "Our regulatory mandate and services" },
  { title: "Licensing", href: "#", category: "Pages", description: "Apply for telecommunications and broadcasting licences" },
  { title: "Domains", href: "#", category: "Pages", description: ".bw domain registration and management" },
  { title: "Complaints", href: "#", category: "Pages", description: "Lodge a complaint about service providers" },
  { title: "News & Notices", href: "#news", category: "Pages", description: "Latest updates and announcements" },
  { title: "FAQ", href: "#", category: "Pages", description: "Frequently asked questions" },
  { title: "Contact Us", href: "#contact", category: "Pages", description: "Get in touch with BOCRA" },
  { title: "Telecommunications", href: "#services", category: "Services", description: "Regulating telecom operators for quality service delivery and fair pricing" },
  { title: "Broadcasting", href: "#services", category: "Services", description: "Radio and television broadcasting standards and licensing" },
  { title: "Postal Services", href: "#services", category: "Services", description: "Regulating postal and courier service providers" },
  { title: "Internet", href: "#services", category: "Services", description: "Promoting affordable internet services across Botswana" },
  { title: "Apply for a Licence", href: "#", category: "Online Services", description: "Submit your licence application through our portal" },
  { title: "Lodge a Complaint", href: "#", category: "Online Services", description: "Report service quality issues or disputes" },
  { title: "Telecoms Statistics", href: "#", category: "Online Services", description: "Access latest market data and performance indicators" },
  { title: "Publications", href: "#", category: "Online Services", description: "Browse research papers and annual reports" },
  { title: "Consumer Rights", href: "#", category: "Online Services", description: "Know your rights as a communications consumer" },
  { title: ".bw Domain Registration", href: "#", category: "Online Services", description: "Register and manage your Botswana domain name" },
  { title: "5G Spectrum Allocation", href: "#news", category: "News", description: "Public consultation on 5G spectrum allocation and licensing" },
  { title: "Consumer Protection Framework", href: "#news", category: "News", description: "New guidelines to safeguard telecommunications consumers" },
  { title: "Cybersecurity Best Practices", href: "#news", category: "News", description: "Partnership on cybersecurity standards for operators" },
  { title: "Mobile Penetration", href: "#", category: "Statistics", description: "186% mobile penetration rate in Botswana" },
  { title: "Internet Penetration", href: "#", category: "Statistics", description: "67% internet penetration rate" },
  { title: "Network Coverage", href: "#about", category: "Statistics", description: "99% network coverage across Botswana" },
];

const categoryIcons: Record<string, React.ElementType> = {
  Pages: Globe,
  Services: Wifi,
  "Online Services": FileText,
  News: BookOpen,
  Statistics: BarChart3,
};

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof searchableItems> = {};
    results.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [results]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    setQuery("");
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setQuery(""); }}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden bg-card border-border/60">
        <div className="flex items-center border-b border-border px-4">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, services, news..."
            className="flex-1 h-12 px-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
          />
          <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
            ESC
          </kbd>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() && results.length === 0 && (
            <div className="py-10 text-center text-sm text-muted-foreground">
              No results found for "{query}"
            </div>
          )}
          {!query.trim() && (
            <div className="py-10 text-center text-sm text-muted-foreground">
              Start typing to search...
            </div>
          )}
          {Object.entries(grouped).map(([category, items]) => {
            const Icon = categoryIcons[category] || Globe;
            return (
              <div key={category} className="mb-2">
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground flex items-center gap-1.5">
                  <Icon className="w-3 h-3" />
                  {category}
                </div>
                {items.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleSelect(item.href)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-accent/10 transition-colors duration-200 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate font-light">
                        {item.description}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
