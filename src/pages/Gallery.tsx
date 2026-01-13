import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

// Gallery images
import cgAndOsibanja from "/cg-and-osibanja.jpg";
import cg from "/cg.jpg";
import cgAndMember from "/cg-and-member.jpg";
import batch from "/batch.jpg";
import mg3196 from "/_MG_3196 (1).jpg";
import mg3193 from "/_MG_3193 (1).jpg";
import mg3168c from "/_MG_3168 (1)c.jpg";
import mg3166c from "/_MG_3166 (1)c.jpg";
import mg3166 from "/_MG_3166 (1).jpg";
import mg3165 from "/_MG_3165 (1).jpg";
import mg3163 from "/_MG_3163 (1).jpg";
import mg3160 from "/_MG_3160 (1).jpg";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "ceremonies", name: "Ceremonies & Events" },
  { id: "community", name: "Community Outreach" },
  { id: "training", name: "Training & Operations" },
  { id: "official", name: "Official Meetings" },
];

const galleryImages = [
  {
    id: 1,
    src: ceremonyAwards,
    title: "Medal Award Ceremony 2023",
    category: "ceremonies",
    description: "Officers receiving commendation medals for distinguished service",
  },
  {
    id: 2,
    src: communityOutreach,
    title: "Village Relief Distribution",
    category: "community",
    description: "NUPEC volunteers distributing essential supplies to rural communities",
  },
  {
    id: 3,
    src: trainingExercise,
    title: "Field Training Exercise",
    category: "training",
    description: "Cadets undergoing rigorous physical training at the national camp",
  },
  {
    id: 4,
    src: mediationMeeting,
    title: "Peace Mediation Conference",
    category: "official",
    description: "Community leaders and NUPEC officials during conflict resolution talks",
  },
  {
    id: 5,
    src: paradeMarch,
    title: "Independence Day Parade",
    category: "ceremonies",
    description: "NUPEC officers marching during national celebration in Abuja",
  },
  {
    id: 6,
    src: youthWorkshop,
    title: "Youth Empowerment Workshop",
    category: "community",
    description: "Educational program for young Nigerians on peace and unity",
  },
  {
    id: 7,
    src: officialHandshake,
    title: "Diplomatic Partnership Meeting",
    category: "official",
    description: "Official partnership ceremony with government dignitaries",
  },
  {
    id: 8,
    src: humanitarianAid,
    title: "Flood Relief Operations",
    category: "community",
    description: "Emergency response team providing aid during flood disaster",
  },
  {
    id: 9,
    src: corpsCeremony,
    title: "Corps Commissioning Ceremony",
    category: "ceremonies",
    description: "New officers being commissioned into NUPEC service",
  },
  {
    id: 10,
    src: handsUnity,
    title: "Unity Pledge Moment",
    category: "ceremonies",
    description: "Symbol of national unity and solidarity across all tribes",
  },
  {
    id: 11,
    src: peacekeepersCommunity,
    title: "Community Peacekeeping Mission",
    category: "training",
    description: "Officers engaging with local community members during patrol",
  },
  {
    id: 12,
    src: miningSite,
    title: "Mining Site Inspection",
    category: "training",
    description: "NMRS officers inspecting mining operations for compliance",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
                Our Moments
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Photo Gallery
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore moments from NUPEC ceremonies, community outreach programs, training
                exercises, and official events across Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-coffee-light sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-elevated transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/70 text-xs line-clamp-2">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No photos found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-serif font-bold text-accent mb-2">500+</div>
                <p className="text-secondary-foreground/70 text-sm">Events Documented</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-accent mb-2">36</div>
                <p className="text-secondary-foreground/70 text-sm">States Covered</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-accent mb-2">30+</div>
                <p className="text-secondary-foreground/70 text-sm">Years of Service</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-accent mb-2">1000+</div>
                <p className="text-secondary-foreground/70 text-sm">Community Projects</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white font-serif font-bold text-xl mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
