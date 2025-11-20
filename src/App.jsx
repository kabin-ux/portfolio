import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600"
            >
              Portfolio
            </motion.span>
            <div className="flex space-x-8">
              <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-900 py-8 mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Kabin Dongol Maharjan. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://github.com/kabin-ux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/kabin-dongol-maharjan-0bb3a4290/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:dongolkabin@gmail.com" className="text-gray-400 hover:text-purple-400 transition">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;