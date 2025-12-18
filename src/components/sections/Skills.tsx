import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Layers, Zap, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with a focus on user experience and visual hierarchy.",
    tools: ["Figma", "Adobe XD", "Sketch", "Framer"],
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, performant web applications with modern frameworks.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Crafting scalable design systems that ensure consistency across products.",
    tools: ["Storybook", "Tokens", "Component Libraries"],
  },
  {
    icon: Zap,
    title: "Motion Design",
    description: "Adding life to interfaces with meaningful animations and micro-interactions.",
    tools: ["Framer Motion", "GSAP", "Lottie", "CSS Animations"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring flawless experiences across all devices and screen sizes.",
    tools: ["Mobile-First", "PWA", "Cross-Browser"],
  },
  {
    icon: Globe,
    title: "Web Performance",
    description: "Optimizing for speed, accessibility, and search engine visibility.",
    tools: ["Core Web Vitals", "SEO", "A11y", "Lighthouse"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="display-lg mt-4">
            Skills & <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card border border-border rounded-lg hover-lift cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
