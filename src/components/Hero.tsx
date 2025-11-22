import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Next Generation Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              Welcome to{" "}
              <span className="gradient-text">NEUTRON</span>
              <br />
              <span className="text-accent">BANDUNG-2</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Empowering businesses with cutting-edge technology solutions. 
              We transform ideas into reality with innovation and excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground glow-primary hover:scale-105 transition-smooth group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 transition-smooth"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 glow-primary"
            >
              <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center glow-primary">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold">Innovation Driven</h3>
                <p className="text-muted-foreground">
                  Combining creativity with technology to deliver exceptional results for modern businesses.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex-1 bg-muted/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="flex-1 bg-muted/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-accent">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
