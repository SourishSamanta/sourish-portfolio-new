// src/components/About.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Rocket, 
  Target, 
  Briefcase, 
  Sparkles,
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="display-lg mt-4">
            Get to <span className="text-gradient">Know Me</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-16">
          
          {/* Introduction - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 lg:col-span-8 bento-card group"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Hello, I'm a Designer & Developer
                </h3>
                <p className="text-muted-foreground text-lg">
                  Crafting beautiful, functional experiences that solve real problems
                </p>
              </div>
            </div>
            <p className="body-lg text-muted-foreground leading-relaxed">
              I'm passionate about building digital products that not only look amazing 
              but also provide seamless user experiences. With a keen eye for design and 
              strong development skills, I bridge the gap between aesthetics and functionality.
            </p>
          </motion.div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-4 bento-card-gradient group"
          >
            <div className="relative z-10 ">
              <div className="flex items-center gap-3 mb-4 ">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-sm font-medium text-green-500 ">Available</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-2">
                Open for Work
              </h4>
              <p className="text-sm text-muted-foreground">
                Currently accepting freelance projects and full-time opportunities
              </p>
            </div>
          </motion.div>

          {/* My Work */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 bento-card group"
          >
            <div className="p-3 rounded-xl bg-accent/10 text-accent mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={24} />
            </div>
            <h4 className="font-display text-xl font-semibold mb-3">
              My Work
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Specializing in UI/UX design, frontend development, and creating 
              design systems that scale beautifully across products.
            </p>
          </motion.div>

          {/* Ambition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 bento-card group"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
              <Target size={24} />
            </div>
            <h4 className="font-display text-xl font-semibold mb-3">
              Ambition
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building products that make a meaningful impact, pushing the boundaries 
              of design and technology to create delightful experiences.
            </p>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 bento-card group"
          >
            <div className="p-3 rounded-xl bg-accent/10 text-accent mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
              <Rocket size={24} />
            </div>
            <h4 className="font-display text-xl font-semibold mb-3">
              Future Goals
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Launching my own SaaS products, contributing to open-source, and 
              mentoring the next generation of designers and developers.
            </p>
          </motion.div>

          {/* Tech Stack - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-12 md:col-span-6 lg:col-span-8 bento-card-dark group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Code2 size={24} />
              </div>
              <h4 className="font-display text-2xl font-semibold">
                Tech Stack & Services
              </h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Frontend
                </h5>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Design Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Photoshop", "Illustrator"].map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Other Skills
                </h5>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Design Systems", "Prototyping", "Responsive Design", "API Integration"].map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 bento-card-gradient group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-white/10 text-white mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-5xl font-display font-bold mb-2">
                  50+
                </div>
                <p className="text-muted-foreground text-sm">
                  Projects completed with passion and precision
                </p>
              </div>
            </div>
          </motion.div>

          {/* What Drives Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="col-span-12 bento-card group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform duration-300">
                <Heart size={24} />
              </div>
              <h4 className="font-display text-xl font-semibold">
                What Drives Me
              </h4>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              I'm driven by the challenge of turning complex problems into simple, elegant solutions. 
              Every pixel, every interaction, every line of code is an opportunity to create something 
              that makes people's lives better. I believe in continuous learning, staying curious, and 
              pushing boundaries to deliver exceptional work.
            </p>
          </motion.div>
        </div>

        {/* Technology Marquee */}
        <TechMarquee isInView={isInView} />
      </div>
    </section>
  );
};

// Scrolling Marquee Component
const TechMarquee = ({ isInView }: { isInView: boolean }) => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Figma", icon: "📐" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Vite", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "Git", icon: "🔀" },
    { name: "VS Code", icon: "💻" },
    { name: "Adobe XD", icon: "🎭" },
    { name: "Photoshop", icon: "🖼️" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="relative overflow-hidden py-8"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="inline-flex items-center gap-3 mx-6 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;