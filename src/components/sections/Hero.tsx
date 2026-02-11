import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import your image
import profileImage from "@/assets/profile.png"; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            > 
              <span className="text-muted-foreground font-body tracking-widest text-sm py-2 rounded-full">
                Hey, I'm Sourish — based in India 🇮🇳
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="display-xl mb-6"
              >
                I craft{" "}
                <span className="text-gradient italic pr-2">digital</span>
                <br />
                experiences that
                <br />
                <span className="relative inline-block">
                  <span className="text-primary">captivate</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary origin-left"
                  />
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="body-lg text-muted-foreground max-w-xl mb-12"
            >
              Transforming complex ideas into elegant, user-centered designs. 
              I blend creativity with strategic thinking to deliver exceptional 
              digital products.          
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl">
                View My Work
              </Button>
              <Button variant="heroOutline" size="xl">
                Let's Talk
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-20 flex gap-12 md:gap-20"
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Delivered" },
                { number: "15+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image with 3D Floating Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Animated background rings */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-[450px] h-[450px] border-2 border-primary/20 rounded-full"
            />
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute w-[500px] h-[500px] border-2 border-accent/20 rounded-full"
            />

            {/* Main image container */}
            <motion.div
              animate={{ 
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <div className="relative w-[400px] h-[500px]">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[2rem] opacity-75 blur-xl" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Sourish - Designer & Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-primary/30 rounded-2xl backdrop-blur-sm flex items-center justify-center text-3xl"
                >
                  ✨
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/30 rounded-2xl backdrop-blur-sm flex items-center justify-center text-4xl"
                >
                  🚀
                </motion.div>
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute z-10 bottom-0 right-0 px-6 py-4 bg-card/90 backdrop-blur-md border border-border rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Available for Work</p>
                  <p className="text-xs text-muted-foreground">Let's create something amazing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;