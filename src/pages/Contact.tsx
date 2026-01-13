import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import patternBg from "@/assets/pattern-bg.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    content: "Block1 Flat 1, Section 1, Yenagoa Street Area II Garki, Abuja, Nigeria",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+234 803 608 0424",
  },
  {
    icon: Mail,
    title: "Website",
    content: "nigerianpeacecorps.org",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday: 8:00 AM - 5:00 PM",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about NUPEC or want to get involved? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Registration Info */}
                <div className="mt-12 bg-coffee-light rounded-xl p-6">
                  <h3 className="font-serif font-bold text-foreground mb-4">Registration Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CAC Number:</span>
                      <span className="font-medium text-foreground">CAC/IT/ NO. 6265</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Registered:</span>
                      <span className="font-medium text-foreground">4th August 1992</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Supervising Body:</span>
                      <span className="font-medium text-foreground">Ministry of Interior</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-8 shadow-elevated">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <CheckCircle size={48} className="mx-auto mb-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Join NUPEC?
              </h2>
              <p className="text-lg text-secondary-foreground/80 leading-relaxed mb-8">
                Become part of Nigeria's foremost paramilitary organization dedicated to peace and national unity. Visit our headquarters or contact us to learn more about membership and volunteer opportunities.
              </p>
              <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full">
                <MapPin size={18} />
                <span className="font-medium">National Headquarters, Abuja</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
