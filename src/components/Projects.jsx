import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Waste Management System (PWA)",
    description: "Developed a Progressive Web Application (PWA) using the MERN stack to streamline waste collection processes. Users can schedule pickups, track waste collection, and communicate with staff. Tailwind CSS was used for styling, and Firebase was integrated for push notifications.",
    image: "https://trashgurl.com/wp-content/uploads/2022/11/waste_management-img1.jpg",
    github: "https://github.com/kabin-ux/waste-wise-frontend",
    live: "https://waste-wise-wma.netlify.app/",
    tags: ["MERN", "PWA", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Real Time Chat Application",
    description: "Built a real-time chat application using MERN stack and Socket.io for bidirectional communication",
    image: "https://plus.unsplash.com/premium_photo-1721879243046-b0014907da1a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/kabin-ux/Real-Time-Chat-App",
    live: "https://github.com/kabin-ux/Real-Time-Chat-App",
    tags: ["MERN", "Socket.io", "Tailwind CSS"]
  },
  {
    title: "Restaurant-Ecommerce Website",
    description:
      "Developed a full-featured restaurant e-commerce platform using Next.js. Includes menu browsing, cart management, order placement, and responsive UI. Integrated API routes, optimized routing, and implemented reusable components for scalability.",
    image:
      "https://static01.nyt.com/images/2024/04/10/multimedia/10best-restaurants-chicago13-hpqj/08best-restaurants-chicago13-hpqj-videoSixteenByNine3000.jpg",
    github: "https://github.com/kabin-ux/Ecommerce-Website-NextJS",
    live: "https://github.com/kabin-ux/Ecommerce-Website-NextJS",
    tags: ["Next.js", "TailwindCSS", "E-commerce"]
  },
  {
    title: "Bookstore Management System",
    description: "Designed and developed a full-stack bookstore management system using ReactJS for the frontend and .NET Core WebAPI for the backend. Implemented real-time notifications with SignalR to enhance user interaction and system responsiveness.",
    image: "https://lynnrosen.com/wp-content/uploads/2023/05/bookstore-768x407.jpg",
    github: "https://github.com/kabin-ux/BookStore",
    live: "https://github.com/kabin-ux/BookStore",
    tags: [".NET Core", "React", "SignalR", "Full-Stack"]
  },

]


export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}