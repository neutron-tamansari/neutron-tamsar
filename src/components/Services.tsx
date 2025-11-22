import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Cloud, Palette, Shield, Rocket } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps that engage users and drive results.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for your business.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create memorable user experiences.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Comprehensive security solutions to protect your digital assets.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Rocket,
      title: "Consulting",
      description: "Strategic guidance to help you leverage technology for business growth.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-sm text-accent font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:border-primary/50 transition-smooth overflow-hidden">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 inline-flex items-center text-primary group-hover:gap-2 transition-smooth">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
