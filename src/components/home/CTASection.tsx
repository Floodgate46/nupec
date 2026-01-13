import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ceremonyImage from "@/assets/corps-ceremony.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ceremonyImage}
          alt="NUPEC officers in ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Join the Movement for Peace
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Become part of Nigeria's premier paramilitary organization dedicated to fostering national unity, peace, and conflict resolution. Together, we can build a better Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/leadership">
                Meet Our Leaders
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
