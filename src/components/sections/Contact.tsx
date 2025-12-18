import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="display-lg mt-4 mb-6">
            Let's create something
            <br />
            <span className="text-gradient italic">extraordinary</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss 
            how we can bring your vision to life.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <Button variant="hero" size="xl" className="text-lg px-12">
            Start a Project
            <ArrowUpRight size={20} />
          </Button>
        </motion.div>

        {/* Contact info grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Email */}
          <div className="text-center p-8 border border-border rounded-lg bg-card/50 hover-lift">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display font-semibold mb-2">Email</h3>
            <a 
              href="mailto:hello@yourname.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              hello@yourname.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center p-8 border border-border rounded-lg bg-card/50 hover-lift">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">
              Available Worldwide
            </p>
          </div>

          {/* Availability */}
          <div className="text-center p-8 border border-border rounded-lg bg-card/50 hover-lift">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h3 className="font-display font-semibold mb-2">Availability</h3>
            <p className="text-muted-foreground">
              Open for new projects
            </p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
