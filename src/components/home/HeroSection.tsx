import { ArrowRight, Shield, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-unity.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nigerian unity - diverse people coming together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Shield size={16} className="text-accent" />
            <span className="text-sm font-medium">Established 1987 • Registered 1992</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            National Unity &<br />
            <span className="text-accent">Peace Corps</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fostering national unity, peace, progress, and cohesion across Nigeria through peace building, conflict resolution, and community mediation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/about">
                Learn Our Story
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/mandates">
                Our Mandates
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Users size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-primary-foreground">35+</p>
                <p className="text-sm text-primary-foreground/70">Years of Service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Shield size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-primary-foreground">36</p>
                <p className="text-sm text-primary-foreground/70">States Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Scale size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-primary-foreground">1000+</p>
                <p className="text-sm text-primary-foreground/70">Conflicts Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
