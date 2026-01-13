import { Calendar, Award, Users, Building } from "lucide-react";

const timelineEvents = [
  {
    year: "1987",
    icon: Users,
    title: "Conception",
    description: "Like-minded Nigerians from different parts of the country came together to foster national unity and peace.",
  },
  {
    year: "1992",
    icon: Award,
    title: "Official Registration",
    description: "Formally registered with the Corporate Affairs Commission (CAC) under CAC/IT/NO. 6265 on 4th August.",
  },
  {
    year: "2013",
    icon: Building,
    title: "Change of Leadership",
    description: "Dr. Chinedu S. Nneji assumed the position of Commandant General and BOT Chairman.",
  },
  {
    year: "2017",
    icon: Calendar,
    title: "Legislative Progress",
    description: "The Nigerian Peace Corps Bill was passed by the National Assembly.",
  },
  {
    year: "2023",
    icon: Building,
    title: "NMRS Introduction",
    description: "Nigeria Mines Ranger Service (NMRS) Bill introduced to curb illegal mining activities.",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mt-4">
            Key Milestones
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary/30 hidden lg:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`bg-card rounded-xl p-6 shadow-elevated inline-block ${
                    index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                  }`}>
                    <span className="text-accent font-bold text-xl font-serif">{event.year}</span>
                    <h3 className="font-serif font-semibold text-lg text-foreground mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-elevated">
                  <event.icon size={28} className="text-secondary-foreground" />
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
