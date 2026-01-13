import { Heart, Handshake, Scale, Users } from "lucide-react";
import handsImage from "@/assets/hands-unity.jpg";

const missions = [
  {
    icon: Heart,
    title: "Peace Building",
    description: "Creating sustainable peace through community engagement and dialogue.",
  },
  {
    icon: Handshake,
    title: "Conflict Resolution",
    description: "Mediating disputes and fostering understanding between conflicting parties.",
  },
  {
    icon: Scale,
    title: "Conflict Mitigation",
    description: "Preventing escalation through early intervention and proactive measures.",
  },
  {
    icon: Users,
    title: "Mediation",
    description: "Facilitating peaceful negotiations between communities and groups.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={handsImage}
                alt="Unity - diverse hands coming together"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elevated max-w-[240px]">
              <p className="text-4xl font-serif font-bold text-primary mb-2">1987</p>
              <p className="text-muted-foreground text-sm">
                The year like-minded Nigerians came together for a common purpose
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Core Mandates
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Building a Peaceful & United Nigeria
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Following communal and non-communal conflicts experienced between tribes across Nigeria, our founders envisioned an organization dedicated to fostering national unity, peace, progress, and a conflict-free society.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {missions.map((mission, index) => (
                <div
                  key={mission.title}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <mission.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {mission.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
