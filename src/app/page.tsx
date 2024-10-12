"use client";

import MouseBlurEffect from "@/components/MouseBlurEffect";
import Project from "@/components/Project";
import Section from "@/components/Section";
import SocialLink from "@/components/SocialLink";
import TestimonialCard from "@/components/TestimonialCard";
import Timeline from "@/components/TimeLine";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Head>
        <title>Your Name - Full-Stack Developer & Entrepreneur</title>
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MouseBlurEffect />

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 transform-origin-0"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 w-full bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-lg z-50">
        <ul className="flex justify-center space-x-6 p-4">
          {[
            "Home",
            "About",
            "Experience",
            "Skills",
            "Projects",
            "Testimonials",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`}>
                <span className="cursor-pointer hover:text-blue-300 transition-colors">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24">
        <motion.header
          className="py-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-48 h-48 mb-8 rounded-full overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <Image
              src="/your-image.jpg" // Replace with your image path
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
            <motion.div
              className="absolute inset-0 bg-teal-500 mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your Name
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full-Stack Developer & Entrepreneur
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com/yourusername"
              icon={FaGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/yourusername"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://twitter.com/yourusername"
              icon={FaTwitter}
              label="Twitter"
            />
            <SocialLink
              href="https://medium.com/@yourusername"
              icon={FaMedium}
              label="Medium"
            />
          </motion.div>
        </motion.header>

        <Section id="about" title="About Me">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I{"'"}m a passionate full-stack developer and entrepreneur with a
            keen eye for design and a love for creating innovative solutions.
            With expertise in modern web technologies, I bring ideas to life
            through clean, efficient code and intuitive user experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in tech started [brief background]. Today, I specialize
            in [your key areas], and I{"'"}m always excited to take on new
            challenges that push the boundaries of what{"'"}s possible in web
            development.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <Timeline
            items={[
              {
                title: "Senior Full-Stack Developer at TechCorp",
                date: "January 2020 - Present",
                description:
                  "Lead development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.",
              },
              {
                title: "Full-Stack Developer at StartupX",
                date: "June 2017 - December 2019",
                description:
                  "Developed and maintained multiple client projects, focusing on responsive design and performance optimization.",
              },
              {
                title: "Junior Developer at WebSolutions Inc.",
                date: "September 2015 - May 2017",
                description:
                  "Assisted in the development of e-commerce platforms and contributed to internal tool development.",
              },
            ]}
          />
        </Section>

        <Section id="skills" title="Skills">
          <motion.div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "GraphQL",
              "TailwindCSS",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#4FD1C5" }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              title="Project 1"
              description="A brief description of your first project. Highlight key features and technologies used."
              link="#"
            />
            <Project
              title="Project 2"
              description="Details about your second project. Explain the problem it solves and your role in its development."
              link="#"
            />
            <Project
              title="Project 3"
              description="Information about your third project. Discuss any challenges overcome and the impact of the solution."
              link="#"
            />
            <Project
              title="Project 4"
              description="Description of your fourth project. Emphasize unique aspects and the skills demonstrated."
              link="#"
            />
          </div>
        </Section>

        <Section id="testimonials" title="Testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Your Name is an exceptional developer with a keen eye for detail. Their ability to translate complex ideas into elegant, efficient code is truly impressive."
              author="Jane Doe"
              role="CTO, TechCorp"
            />
            <TestimonialCard
              quote="Working with Your Name was a game-changer for our project. Their technical expertise and problem-solving skills are top-notch."
              author="John Smith"
              role="Founder, StartupX"
            />
          </div>
        </Section>

        <Section id="blog" title="Latest Blog Posts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "The Future of Web Development",
                date: "May 15, 2023",
                url: "#",
              },
              {
                title: "Optimizing React Applications",
                date: "April 2, 2023",
                url: "#",
              },
            ].map((post, index) => (
              <motion.a
                key={index}
                href={post.url}
                className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.date}</p>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get in Touch">
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                required
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </Section>
      </main>

      <motion.footer
        className="mt-20 py-8 bg-gray-800 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js, TailwindCSS, and Framer Motion
        </p>
      </motion.footer>
    </div>
  );
}
