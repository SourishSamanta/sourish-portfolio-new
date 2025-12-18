import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectSaas from "@/assets/project-saas.jpg";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "UI/UX Design • Development",
    description: "A comprehensive financial management platform with real-time analytics, intuitive data visualization, and seamless user workflows.",
    image: projectFintech,
    tags: ["React", "TypeScript", "D3.js"],
    color: "from-primary/20 to-accent/10",
  },
  {
    id: 2,
    title: "E-Commerce Redesign",
    category: "Brand Identity • Web Design",
    description: "Complete redesign of a luxury fashion brand's digital presence, focusing on premium aesthetics and conversion optimization.",
    image: projectEcommerce,
    tags: ["Figma", "Next.js", "Shopify"],
    color: "from-accent/20 to-primary/10",
  },
  {
    id: 3,
    title: "Healthcare App",
    category: "Mobile Design • UX Research",
    description: "Patient-centered mobile application designed to simplify healthcare management with accessibility at its core.",
    image: projectHealthcare,
    tags: ["React Native", "User Research", "A11y"],
    color: "from-primary/15 to-accent/15",
  },
  {
    id: 4,
    title: "SaaS Platform",
    category: "Product Design • Frontend",
    description: "Enterprise collaboration tool with complex workflow management, real-time features, and intuitive team interactions.",
    image: projectSaas,
    tags: ["Vue.js", "Design System", "WebSocket"],
    color: "from-accent/15 to-primary/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-body text-sm tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="display-lg mt-4">
              Selected <span className="text-gradient">Works</span>
            </h2>
          </div>
          <Button variant="heroOutline" className="self-start md:self-auto">
            View All Projects
            <ArrowUpRight size={18} />
          </Button>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Image container */}
              <div className={`relative aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-gradient-to-br ${project.color}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* View button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm">
                    View Case Study
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
