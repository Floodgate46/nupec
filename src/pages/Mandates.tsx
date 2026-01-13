import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Handshake, Scale, Users, Shield, Pickaxe, FileCheck, Target } from "lucide-react";
import miningImage from "@/assets/mining-site.jpg";
import peaceKeepersImage from "@/assets/peacekeepers-community.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const coreMandates = [
  {
    icon: Heart,
    title: "Peace Building",
    description: "Establishing sustainable peace through proactive community engagement, dialogue facilitation, and grassroots initiatives that bring together diverse groups.",
    features: ["Community dialogue sessions", "Peace education programs", "Interfaith initiatives", "Youth peace advocacy"],
  },
  {
    icon: Handshake,
    title: "Conflict Resolution",
    description: "Professional intervention in disputes to find amicable solutions that satisfy all parties and prevent future conflicts.",
    features: ["Dispute mediation", "Negotiation facilitation", "Settlement agreements", "Follow-up monitoring"],
  },
  {
    icon: Scale,
    title: "Conflict Mitigation",
    description: "Early intervention strategies to prevent conflicts from escalating and causing harm to communities and individuals.",
    features: ["Early warning systems", "Risk assessment", "Preventive measures", "Stakeholder engagement"],
  },
  {
    icon: Users,
    title: "Mediation",
    description: "Neutral third-party facilitation to help conflicting parties reach mutually acceptable agreements.",
    features: ["Neutral facilitation", "Structured dialogue", "Agreement drafting", "Implementation support"],
  },
];

const Mandates = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "400px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                What We Do
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Our Core Mandates
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NUPEC's core mandates focus on creating and maintaining peace across Nigeria through proven methodologies.
              </p>
            </div>
          </div>
        </section>

        {/* Core Mandates Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {coreMandates.map((mandate, index) => (
                <div
                  key={mandate.title}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                    <mandate.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    {mandate.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {mandate.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {mandate.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Image Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={peaceKeepersImage}
              alt="NUPEC in community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Target size={48} className="mx-auto mb-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
                Serving Communities Across Nigeria
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Our officers work tirelessly in communities across all 36 states, building relationships, fostering understanding, and creating lasting peace where it matters most - at the grassroots level.
              </p>
            </div>
          </div>
        </section>

        {/* NMRS Section */}
        <section className="py-20 bg-coffee-light">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <Pickaxe size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">New Initiative</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Nigeria Mines Ranger Service (NMRS)
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At the commencement of the present Assembly in 2023, the Commandant General introduced the Nigeria Mines Ranger Service (NMRS) Bill to curb illegal mining activities in the country.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Shield size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Combat Illegal Mining</h4>
                      <p className="text-muted-foreground text-sm">Protecting Nigeria's mineral resources from unauthorized exploitation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <FileCheck size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Regulatory Enforcement</h4>
                      <p className="text-muted-foreground text-sm">Supporting proper licensing and compliance in the mining sector.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <p className="text-sm text-muted-foreground mb-2">Legislative Status</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-slow" />
                    <p className="font-medium text-foreground">Passed by Senate • Awaiting House Concurrence</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={miningImage}
                  alt="Mining site in Nigeria"
                  className="rounded-2xl shadow-elevated w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mandates;
