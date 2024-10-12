"use client";

import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => (
  <motion.div
    className="bg-white bg-opacity-5 p-6 rounded-lg"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-300 hover:text-teal-100 transition-colors inline-block"
      whileHover={{ x: 5 }}
    >
      View Project →
    </motion.a>
  </motion.div>
);

export default Project;
