import { motion } from "motion/react";
import FadeInSection from "@/components/animations/FadeInSection";
import BlurText from "@/components/animations/BlurText";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@johndoe.dev", href: "mailto:hello@johndoe.dev" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full opacity-20 translate-y-1/2"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-mono text-primary mb-6">
            Get in Touch
          </span>
          <BlurText
            text="Let's Work Together"
            className="text-4xl md:text-5xl font-display font-bold justify-center"
            delay={50}
          />
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeInSection direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's build something amazing</h3>
                <p className="text-muted-foreground text-lg">
                  I'm always excited to work on new projects and collaborate with 
                  creative people. Whether you have a project in mind or just want 
                  to say hello, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-2xl glass-effect group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl glass-effect hover:bg-secondary/50 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Contact Form */}
          <FadeInSection direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl card-gradient border border-border/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Nagarajan"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
