import { useState, useRef, useEffect, useMemo } from "react";
import { Search, X, ArrowRight, Globe, Wifi, FileText, BookOpen, BarChart3 } from "lucide-react";

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
  { title: "Telecommunications", href: "#services", category: "Services", description: "Regulating telecom operators for quality service delivery" },
  { title: "Broadcasting", href: "#services", category: "Services", description: "Radio and television broadcasting standards and licensing" },
  { title: "Postal Services", href: "#services", category: "Services", description: "Regulating postal and courier service providers" },
  { title: "Internet", href: "#services", category: "Services", description: "Promoting affordable internet services across Botswana" },
  { title: "Apply for a Licence", href: "#", category: "Online Services", description: "Submit your licence application through our portal" },
  { title: "Lodge a Complaint", href: "#", category: "Online Services", description: "Report service quality issues or disputes" },
  { title: "Telecoms Statistics", href: "#", category: "Online Services", description: "Access latest market data and performance indicators" },
  { title: "Publications", href: "#", category: "Online Services", description: "Browse research papers and annual reports" },
  { title: ".bw Domain Registration", href: "#", category: "Online Services", description: "Register and manage your Botswana domain name" },
  { title: "5G Spectrum Allocation", href: "#news", category: "News", description: "Public consultation on 5G spectrum allocation" },
  { title: "Consumer Protection Framework", href: "#news", category: "News", description: "New guidelines to safeguard consumers" },
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

const InlineSearch = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (expanded) inputRef.current?.focus();
  }, [expanded]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false);
        setQuery("");
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpanded(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleSelect = (href: string) => {
    setExpanded(false);
    setQuery("");
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Collapsed: icon button */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
        >
          <Search className="w-[18px] h-[18px]" />
          <span className="hidden sm:inline text-[13px] font-medium">Search</span>
        </button>
      )}

      {/* Expanded: inline search input */}
      {expanded && (
        <div className="relative">
          <div className="flex items-center bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-full px-4 py-1.5 w-[260px] sm:w-[320px] transition-all duration-300 shadow-lg shadow-black/10">
            <Search className="w-4 h-4 text-primary-foreground/50 shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-[13px] text-primary-foreground placeholder:text-primary-foreground/40 px-2.5 py-0.5"
            />
            <button
              onClick={() => { setExpanded(false); setQuery(""); }}
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Results dropdown */}
          {query.trim() && (
            <div className="absolute top-full right-0 mt-2 w-[320px] sm:w-[380px] max-h-[50vh] overflow-y-auto rounded-xl bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl shadow-black/20 z-50">
              {results.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No results for "{query}"
                </div>
              ) : (
                <div className="p-1.5">
                  {Object.entries(grouped).map(([category, items]) => {
                    const Icon = categoryIcons[category] || Globe;
                    return (
                      <div key={category} className="mb-1">
                        <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground flex items-center gap-1.5">
                          <Icon className="w-3 h-3" />
                          {category}
                        </div>
                        {items.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => handleSelect(item.href)}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-accent/10 transition-colors group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-muted-foreground truncate">
                                {item.description}
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-accent transition-colors shrink-0" />
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InlineSearch;
