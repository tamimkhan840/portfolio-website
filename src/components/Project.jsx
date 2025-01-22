import { useState } from "react";
import Digital from '../assets/Digital.png'
import Nike from '../assets/Nike.png'
import Clothify from '../assets/Clothify.png'
import commerce from "../assets/e-commerce.png";
import coffee from "../assets/coffee.png";
import book from "../assets/book.png";
import task from "../assets/task.png";

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const portfolioItems = [
    {
       id: 1,
       category: "Landing",
       title: "DOCCURE",
       link: "https://business420.netlify.app/",
       github: 'https://github.com/rohitsingh93300/YTBusiness',
       image: Digital,
       techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"]
     },
    {
      id: 2,
       category: "Landing",
       title: "Brand",
       link: "https://nike-topaz-delta.vercel.app/",
       github: 'https://github.com/rohitsingh93300/YT-Nike',
       image: coffee,
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
    },
    {
      id: 3,
       category: "Tool",
      title: "Hello There",
      link: "https://clothify-two.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Clothify',
      image: book,
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 4,
       category: "Advanced",
      title: "Cartly",
      link: "https://business420.netlify.app/",
      github: 'https://github.com/rohitsingh93300/YTBusiness',
      image: commerce,
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
    },
    {
      id: 5,
      category: "Advanced",
      title: "Machines World",
      link: "https://nike-topaz-delta.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Nike',
      image: Nike,
       techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 6,
      category: "Tool",
      title: "SEO Dream",
      link: "https://clothify-two.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Clothify',
      image: Clothify,
       techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 6,
      category: "Tool",
      title: "SEO Dream",
      link: "https://clothify-two.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Clothify',
      image: task,
       techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
  ];

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="bg-black text-white py-12 px-6">
       <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
      <div className="text-center mb-10 ">
        <button
          onClick={() => setActiveTab("All")}
          className={`px-4 py-2 rounded-lg border ${
            activeTab === "All" ? "bg-purple-500 text-white" : "text-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("Landing")}
          className={`px-4 py-2 rounded-lg mx-2 border ${
            activeTab === "Landing" ? "bg-purple-500 text-white" : "text-gray-300"
          }`}
        >
          Landing
        </button>
        <button
          onClick={() => setActiveTab("Advanced")}
          className={`px-4 py-2 rounded-lg mx-2 border ${
            activeTab === "Advanced" ? "bg-purple-500 text-white" : "text-gray-300"
          }`}
        >
          Advanced
        </button>
        <button
          onClick={() => setActiveTab("Tool")}
          className={`px-4 py-2 rounded-lg border ${
            activeTab === "Tool" ? "bg-purple-500 text-white" : "text-gray-300"
          }`}
        >
          Tool
        </button>
      </div>



        <div className='max-w-7xl mx-auto'>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
              {filteredItems.map((project, index) => (
                  <div key={index} className='bg-slate-100 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                      <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                      <div className='p-6'>
                          <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                          {/* <p className='text-gray-300 mb-4'>{project.description}</p> */}
                          <div className='flex flex-wrap gap-2 mb-4'>
                              {project.techStack.map((tech, idx) => (
                                  <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                              ))}
                          </div>
                          <div className='flex gap-3'>
                              <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                              {/* <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a> */}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        </div>
    </div>
  );
};

export default Project;
