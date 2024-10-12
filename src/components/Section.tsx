"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [controls, id]);

  return (
    <motion.section
      id={id}
      className="py-20"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      {children}
    </motion.section>
  );
};

export default Section;
