// src/pages/AllProjects.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectSaas from "@/assets/project-saas.jpg";

// Extended projects array with more projects
const allProjects = [
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
  // Add more projects here as needed
];

const categories = ["All", "UI/UX Design", "Development", "Mobile Design", "Brand Identity"];

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>

          <br />

          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h1 className="display-lg mt-4 mb-6">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore my complete collection of design and development work across various industries and technologies.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;