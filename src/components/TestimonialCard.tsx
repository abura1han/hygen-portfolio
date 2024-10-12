"use client";
import { motion } from "framer-motion";
const TestimonialCard = ({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <p className="text-gray-300 mb-4">{'"' + quote + '"'}</p>
    <p className="text-teal-300 font-semibold">{author}</p>
    <p className="text-gray-400 text-sm">{role}</p>
  </motion.div>
);

export default TestimonialCard;
