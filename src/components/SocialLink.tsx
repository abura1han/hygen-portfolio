"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: IconType;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-teal-300 transition-colors"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="sr-only">{label}</span>
    <Icon className="w-6 h-6" />
  </motion.a>
);

export default SocialLink;
