"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Wand2, Zap, Lock, Share2, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Secure & Compliant",
      description:
        "Keep your data safe with our secure and compliant platform.",
      icon: <Lock className="h-8 w-8 mb-2 text-accent" />,
    },

    {
      title: "Smart Templates",
      description: "Get started quickly with our pre-designed form templates.",
      icon: <Wand2 className="h-8 w-8 mb-2 text-accent" />,
    },
    {
      title: "Real-time Collaboration",
      description:
        "Work together with your team in real-time on form projects.",
      icon: <Share2 className="h-8 w-8 mb-2 text-accent" />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights from form submissions with powerful analytics.",
      icon: <BarChart className="h-8 w-8 mb-2 text-accent" />,
    },
    {
      title: "Drag-and-Drop Builder",
      description:
        "Easily create forms with our intuitive drag-and-drop interface.",
      icon: <Layers className="h-8 w-8 mb-2 text-accent" />,
    },
    {
      title: "Integrations",
      description: "Connect your forms with your favorite tools and services.",
      icon: <Zap className="h-8 w-8 mb-2 text-accent" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the powerful features that make our form builder the best
              choice for your needs.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="flex flex-col items-center text-center h-full border-accent/50 text-white bg-inherit">
                  <CardHeader className="flex justify-center items-center">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
