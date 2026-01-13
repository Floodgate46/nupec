import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Award, Star, Users } from "lucide-react";
import commandantImage from "@/assets/commandant-portrait.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const boardMembers = [
  {
    name: "Dr. Chinedu S. Nneji",
    title: "BOT Chairman & Commandant General",
    role: "Current Leader",
    description: "Dr. Chinedu S. Nneji serves as both the Chairman of the Board of Trustees and the Commandant General. He assumed leadership in 2013 and has been instrumental in pushing for legislative recognition.",
    isFeatured: true,
  },
  {
    name: "Late Prof. Humphrey Ogoegbunam",
    title: "Pioneer Commandant General",
    role: "In Memoriam",
    description: "The pioneer Commandant General and BOT member who founded and led the organization until 2013 before handing over due to health challenges.",
    isDeceased: true,
  },
  {
    name: "Dr. Mariam Ali Gombe",
    title: "Board of Trustees Member",
    role: "BOT Member",
    description: "A distinguished member of the reconstituted Board of Trustees, contributing to the governance and strategic direction of NUPEC.",
  },
  {
    name: "Dr. Elizabeth Afuwape",
    title: "Board of Trustees Member",
    role: "BOT Member",
    description: "A valued member of the Board of Trustees, bringing expertise and dedication to the organization's mission.",
  },
];

const Leadership = () => {
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
                Our Leaders
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Leadership & Governance
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meet the dedicated individuals guiding NUPEC's mission for peace and national unity.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Leader */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={commandantImage}
                  alt="Commandant General Portrait"
                  className="rounded-2xl shadow-elevated w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                  <Award size={32} className="mb-2" />
                  <p className="font-semibold text-sm">Commandant General</p>
                </div>
              </div>
              <div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Current Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-2">
                  Dr. Chinedu S. Nneji
                </h2>
                <p className="text-secondary font-medium mb-6">
                  BOT Chairman & Commandant General
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Chinedu S. Nneji assumed the mantle of leadership in 2013, following the handover from the pioneer Commandant General, Late Prof. Humphrey Ogoegbunam, due to health challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Under his leadership, NUPEC has achieved significant legislative progress, with the Nigerian Peace Corps Bill being passed by the National Assembly in both 2017 and 2023. He also introduced the Nigeria Mines Ranger Service (NMRS) Bill to curb illegal mining activities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-coffee-light rounded-lg px-4 py-3">
                    <p className="text-xs text-muted-foreground">Leadership Since</p>
                    <p className="font-semibold text-foreground">2013</p>
                  </div>
                  <div className="bg-coffee-light rounded-lg px-4 py-3">
                    <p className="text-xs text-muted-foreground">Role</p>
                    <p className="font-semibold text-foreground">BOT Chairman</p>
                  </div>
                  <div className="bg-coffee-light rounded-lg px-4 py-3">
                    <p className="text-xs text-muted-foreground">Legislative Bills</p>
                    <p className="font-semibold text-foreground">2 Passed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pioneer */}
        <section className="py-20 bg-coffee-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Star size={40} className="text-primary" />
                </div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  In Memoriam
                </span>
                <h2 className="text-3xl font-serif font-bold text-foreground mt-4 mb-2">
                  Late Prof. Humphrey Ogoegbunam
                </h2>
                <p className="text-secondary font-medium mb-6">Pioneer Commandant General</p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Late Prof. Humphrey Ogoegbunam was, in addition to being a BOT member, the pioneer Commandant General of National Unity and Peace Corps. His vision and dedication laid the foundation for what NUPEC has become today. Prior to his death, he handed over the mantle of leadership in 2013 due to health challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Governance
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
                Board of Trustees
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Following the demise of some members, the Board of Trustees was reconstituted to ensure continued strong governance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {boardMembers.slice(2).map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Users size={28} className="text-secondary" />
                  </div>
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
