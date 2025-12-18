import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
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
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Main text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-lg mb-8"
            >
              A passionate creator 
              <br />
              <span className="text-muted-foreground">driven by design</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-lg text-muted-foreground mb-6"
            >
              With a deep passion for creating seamless user experiences, 
              I've spent years perfecting my craft at the intersection of 
              design and development. Every project is an opportunity to 
              solve complex problems with elegant solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="body-lg text-muted-foreground"
            >
              I believe great design is invisible—it guides users effortlessly 
              toward their goals while delighting them along the way.
            </motion.p>
          </div>

          {/* Right column - Details */}
          <div className="space-y-8">
            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-gradient rounded-lg p-8 bg-card"
            >
              <h3 className="font-display text-xl font-semibold mb-4">
                My Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Design is not just how it looks—it's how it works. I approach 
                every project with user empathy, strategic thinking, and an 
                obsessive attention to detail.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-muted rounded-lg">
                <div className="text-2xl font-display font-bold text-primary mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Remote Friendly
                </div>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <div className="text-2xl font-display font-bold text-accent mb-1">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Async Communication
                </div>
              </div>
            </motion.div>

            {/* Current focus */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 p-4 border border-border rounded-lg"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Currently available for freelance projects
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
