import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, FileText, Shield, Building } from "lucide-react";
import peaceKeepersImage from "@/assets/peacekeepers-community.jpg";
import nationalAssemblyImage from "@/assets/national-assembly.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const About = () => {
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
                Our History
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                The Story of NUPEC
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tracing our journey from 1987 to becoming Nigeria's premier paramilitary organization for peace and unity.
              </p>
            </div>
          </div>
        </section>

        {/* Conception */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  1987 - The Beginning
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                  Conception
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  In 1987, a group of like-minded Nigerians from different parts of the country, brought together by divine providence, began to share some common thoughts.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Their thoughts were based on recent communal and non-communal conflicts experienced between some tribes living in different parts of the country. Their thoughts were centred on how to foster national unity, peace, progress, cohesion, and a conflict-free society.
                </p>
                <p className="text-foreground font-medium">
                  Thus, these individual thoughts gave birth to the organization called: National Unity and Peace Corps.
                </p>
              </div>
              <div className="relative">
                <img
                  src={peaceKeepersImage}
                  alt="NUPEC peacekeepers in community"
                  className="rounded-2xl shadow-elevated w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="py-20 bg-coffee-light">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-2xl p-8 shadow-elevated">
                  <FileText size={48} className="text-primary mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Official Registration Details
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Registration Number</p>
                        <p className="text-muted-foreground">CAC/IT/ NO. 6265</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Date of Registration</p>
                        <p className="text-muted-foreground">4th August 1992</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Registration Body</p>
                        <p className="text-muted-foreground">Corporate Affairs Commission (CAC)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Supervising Ministry</p>
                        <p className="text-muted-foreground">Ministry of Interior</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Organization Type</p>
                        <p className="text-muted-foreground">Paramilitary Organization (Licensed)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  1992 - Official Status
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                  Registration & Recognition
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  On 4th August 1992, National Unity and Peace Corps was formally registered with the Corporate Affairs Commission (CAC) under the Incorporated Trustees Act.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a paramilitary organization, NUPEC is licensed and supervised by the Ministry of Interior. Its rank structure is duly approved by both the Ministry of Interior and the Corporate Affairs Commission (CAC).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legislative Journey */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Legislative Processes
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                  Journey to Legislation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Chinedu S. Nneji, as the Commandant General, took the bull by the horn and proceeded to the National Assembly for legislation.
                </p>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 shadow-card">
                    <p className="font-medium text-foreground">July 2013</p>
                    <p className="text-muted-foreground text-sm">First Reading in the Senate</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-card">
                    <p className="font-medium text-foreground">2017</p>
                    <p className="text-muted-foreground text-sm">Nigerian Peace Corps Bill passed by National Assembly</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-card">
                    <p className="font-medium text-foreground">2023</p>
                    <p className="text-muted-foreground text-sm">Repeated legislative success with the Peace Corps Bill</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={nationalAssemblyImage}
                  alt="Nigerian National Assembly"
                  className="rounded-2xl shadow-elevated w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NMRS */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Building size={48} className="mx-auto mb-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Nigeria Mines Ranger Service (NMRS)
              </h2>
              <p className="text-lg text-secondary-foreground/80 leading-relaxed mb-8">
                At the commencement of the present Assembly in 2023, Dr. Chinedu S. Nneji introduced the Nigeria Mines Ranger Service (NMRS) to curb illegal mining activities in the country. The Bill has already been passed by the Senate and is waiting for the conclusion of concurrence at the House of Representatives.
              </p>
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <Shield size={16} />
                <span className="text-sm font-medium">Passed by Senate • Awaiting Concurrence</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
