import { motion } from "framer-motion";

const Timeline = ({
  items,
}: {
  items: {
    title: string;
    date: string;
    description: string;
  }[];
}) => (
  <div className="relative border-l border-gray-700 ml-3">
    {items.map((item, index) => (
      <motion.div
        key={index}
        className="mb-10 ml-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-900 rounded-full -left-9 ring-8 ring-gray-900">
          <svg
            className="w-2.5 h-2.5 text-teal-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          {item.title}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
          {item.date}
        </time>
        <p className="mb-4 text-base font-normal text-gray-400">
          {item.description}
        </p>
      </motion.div>
    ))}
  </div>
);
export default Timeline;
