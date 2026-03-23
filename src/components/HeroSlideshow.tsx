import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bocraLogoSlide from "@/assets/bocra-logo-slide.jpg";
import slideTelecom from "@/assets/slide-telecom.jpg";
import slideCity from "@/assets/slide-city.jpg";
import slideDigital from "@/assets/slide-digital.jpg";

const slides = [
  {
    image: bocraLogoSlide,
    title: "",
    subtitle: "",
    isLogo: true,
  },
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

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-screen min-h-[500px] max-h-[900px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title || "BOCRA"}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {!slide.isLogo && (
            <div className="absolute inset-0 bg-bocra-dark/60" />
          )}
          {!slide.isLogo && (
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-2xl slide-content">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-[3px] bg-accent" />
                    <span className="text-accent text-sm font-semibold tracking-wider uppercase">BOCRA</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-secondary">{slide.highlight}</span>
                  </h1>
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-primary-foreground/70 max-w-lg">
                    {slide.subtitle}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#services"
                      className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:brightness-110 transition text-sm md:text-base"
                    >
                      Explore Services
                    </a>
                    <a
                      href="#about"
                      className="px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition text-sm md:text-base"
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

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/50 text-primary-foreground hover:bg-primary/80 transition"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/50 text-primary-foreground hover:bg-primary/80 transition"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Service sidebar - desktop only */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 flex-col bg-primary/80 backdrop-blur-sm">
        {[
          { label: "TELECOMMUNICATIONS", color: "bg-bocra-blue" },
          { label: "BROADCASTING", color: "bg-bocra-green" },
          { label: "POSTAL", color: "bg-bocra-pink" },
          { label: "INTERNET", color: "bg-bocra-yellow" },
        ].map((item) => (
          <a
            key={item.label}
            href="#services"
            className="flex items-center gap-3 px-6 py-4 text-primary-foreground/90 hover:bg-primary-foreground/10 transition border-b border-primary-foreground/10 last:border-0"
          >
            <span className={`w-3 h-3 rounded-full ${item.color}`} />
            <span className="text-xs font-semibold tracking-wider">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
