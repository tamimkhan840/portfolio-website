import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Digital from "../assets/Digital.png";
import Nike from "../assets/Nike.png";
import Clothify from "../assets/Clothify.png";
import commerce from "../assets/e-commerce.png";
import coffee from "../assets/coffee1.png";
import book from "../assets/book.png";
import task from "../assets/task.png";
import Experienced from "../assets/Experienced.png";

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      category: "Landing",
      title: "Digital-Marketing",
      link: "https://digital-marketing-tamim.netlify.app/",
      image: Digital,
      techStack: ["React.js","Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      category: "Landing",
      title: "corree",
      link: "https://tamim-corree.netlify.app/",
      image: coffee,
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI", "Tailwind CSS"],
    },
    {
      id: 3,
      category: "Tool",
      title: "Book Collection",
      link: "https://tamim-khan-a9423d.netlify.app/",
      image: book,
      techStack: ["React.js","Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 4,
      category: "Advanced",
      title: "Cartly",
      link: "https://e-commerce-tamim-khan-2267.netlify.app/",
      image: commerce,
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
    },
    {
      id: 5,
      category: "Advanced",
      title: "Machines World",
      link: "https://nike-topaz-delta.vercel.app/",
      image: Nike,
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 6,
      category: "Tool",
      title: "SEO Dream",
      link: "https://clothify-two.vercel.app/",
      image: Clothify,
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 7,
      category: "Tool",
      title: "SEO Dream",
      link: "https://clothify-two.vercel.app/",
      image:Experienced,
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 8,
      category: "Tool",
      title: "SEO Dream",
      link: "https://clothify-two.vercel.app/",
      image: task,
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
  ];

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div id="project" className="bg-black text-white py-12 px-6">
      <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
        Projects
      </h2>
      <div className="text-center mb-10">
        {["All", "Landing", "Advanced", "Tool"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg mx-2 border ${
              activeTab === tab ? "bg-purple-500 text-white" : "text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredItems.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="bg-blue-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Project;
