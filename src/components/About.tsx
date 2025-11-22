import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative technology solutions that drive business growth and success.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "A diverse team of professionals dedicated to excellence and innovation.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Committed to delivering the highest quality in every project we undertake.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Helping businesses scale and thrive in the digital landscape.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NEUTRON BANDUNG-2 is at the forefront of technological innovation, 
            transforming businesses through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-primary opacity-20 rounded-2xl blur-3xl" />
            <img
              src={aboutImage}
              alt="About NEUTRON BANDUNG-2"
              className="relative rounded-2xl border border-border/50 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold">
              Building the <span className="text-accent">Future</span> Today
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Since our inception, we've been committed to pushing the boundaries of what's possible. 
              Our team combines technical expertise with creative thinking to deliver solutions that 
              not only meet but exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in the power of technology to transform businesses and improve lives. 
              Every project we undertake is an opportunity to innovate, learn, and create 
              lasting value for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-smooth"
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-smooth" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
