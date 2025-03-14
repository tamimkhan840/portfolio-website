import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Digital from "../assets/Digital.png";
import Nike from "../assets/Nike.png";
import Clothify from "../assets/Clothify.png";
import commerce from "../assets/e-commerce.png";
import coffee from "../assets/coffee1.png";
import book from "../assets/book.png";
import task from "../assets/task.png";
import Screenshot from "../assets/Screenshot.png";
import Experienced from "../assets/Experienced.png";

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      category: "Marketing",
      title: "Digital-Marketing",
      link: "https://digital-marketing-tamim.netlify.app/",
      image: Digital,
      techStack: ["React.js", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      category: "Landing",
      title: "corree",
      link: "https://tamim-corree.netlify.app/",
      image: coffee,
      techStack: ["React",  "shadcn UI", "Tailwind CSS"],
    },
    {
      id: 3,
      category: "E-Commerce",
      title: "Book Collection",
      link: "https://tamim-khan-a9423d.netlify.app/",
      image: book,
      techStack: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 4,
      category: "E-Commerce",
      title: "Cartly",
      link: "https://e-commerce-tamim-khan-2267.netlify.app/",
      image: commerce,
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
    },
    {
      id: 5,
      category: "E-Commerce",
      title: "Nike-Topaz",
      link: "https://nike-topaz-delta.vercel.app/",
      image: Nike,
      techStack: ["React.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 6,
      category: "E-Commerce",
      title: "Style Shop",
      link: "https://clothify-two.vercel.app/",
      image: Clothify,
      techStack: ["React.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 7,
      category: "Marketing",
      title: "SEO Dream",
      link: "https://tamimkhan-mobile.vercel.app/",
      image: Experienced,
      techStack: ["React.js",  "Stripe", "Tailwind CSS"],
    },
    {
      id: 8,
      category: "Landing",
      title: "Task Management",
      link: "https://eloquent-puffpuff-909923.netlify.app/",
      image: task,
      techStack: ["React.js",  "Tailwind CSS"],
    },
    {
      id: 9,
      category: "E-Commerce",
      title: "Flash Sales",
      link: "https://vermillion-cascaron-237d0e.netlify.app/",
      image: Screenshot,
      techStack: ["React.js", "MongoDB", "Stripe", "Tailwind CSS"],
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
        {["All", "Landing", "Marketing", "E-Commerce"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg mx-2 border border-gray-600 transition-all duration-300 hover:bg-purple-600 ${
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 12, duration: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover px-3 pt-3 rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
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
                      className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
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
