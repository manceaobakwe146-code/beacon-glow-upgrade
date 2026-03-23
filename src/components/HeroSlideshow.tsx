import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bocraLogoSlide from "@/assets/bocra-logo-slide.jpg";
import slideTelecom from "@/assets/slide-telecom.jpg";
import slideCity from "@/assets/slide-city.jpg";
import slideDigital from "@/assets/slide-digital.jpg";

const slides = [
  { image: bocraLogoSlide, title: "", subtitle: "", isLogo: true, logoImage: true },
  {
    image: slideTelecom,
    title: "Regulating for a",
    highlight: "Connected Future",
    subtitle: "Driving innovation and ensuring fair access to communications across Botswana.",
  },
  {
    image: slideCity,
    title: "Building a",
    highlight: "Digital Botswana",
    subtitle: "Enabling connectivity and growth through world-class telecommunications infrastructure.",
  },
  {
    image: slideDigital,
    title: "Empowering",
    highlight: "Digital Inclusion",
    subtitle: "Ensuring every citizen has access to affordable, quality communication services.",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 900);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[60svh] xs:h-[70svh] sm:h-[80svh] md:h-[90svh] lg:h-[100svh] min-h-[400px] max-h-[920px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
            i === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title || "BOCRA"}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {!slide.isLogo && <div className="absolute inset-0 gradient-overlay" />}
          {!slide.isLogo && (
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="max-w-2xl slide-content" key={`content-${current}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[2px] bg-accent rounded-full" />
                    <span className="text-accent/90 text-xs font-semibold tracking-[0.2em] uppercase">BOCRA</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-primary-foreground leading-[1.1] tracking-tight">
                    {slide.title}
                    <br />
                    <span className="text-secondary">{slide.highlight}</span>
                  </h1>
                  <p className="mt-5 text-sm sm:text-base md:text-lg text-primary-foreground/60 max-w-md font-light leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#services"
                      className="px-7 py-3 bg-accent text-accent-foreground font-semibold rounded-full text-sm hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300"
                    >
                      Explore Services
                    </a>
                    <a
                      href="#about"
                      className="px-7 py-3 border border-primary-foreground/20 text-primary-foreground/90 font-medium rounded-full text-sm hover:bg-primary-foreground/10 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full glass text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full glass text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 glass rounded-full px-4 py-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-accent w-7" : "bg-primary-foreground/30 w-2 hover:bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Service sidebar */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 flex-col glass rounded-l-xl overflow-hidden">
        {[
          { label: "TELECOMMUNICATIONS", color: "bg-bocra-blue" },
          { label: "BROADCASTING", color: "bg-bocra-green" },
          { label: "POSTAL", color: "bg-bocra-pink" },
          { label: "INTERNET", color: "bg-bocra-yellow" },
        ].map((item) => (
          <a
            key={item.label}
            href="#services"
            className="flex items-center gap-3 px-6 py-4 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-all duration-300 border-b border-primary-foreground/5 last:border-0 group"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${item.color} group-hover:scale-125 transition-transform duration-300`} />
            <span className="text-[11px] font-medium tracking-[0.12em]">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/40 to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default HeroSlideshow;
