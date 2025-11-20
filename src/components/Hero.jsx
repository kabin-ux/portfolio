import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20  from-gray-200 via-[#1e1e2f] to-gray-800 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative inline-block">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                            Hi, I'm <span className="relative">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
                                    Kabin Dongol Maharjan
                                </span>
                                {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 transform -skew-x-12"></span> */}
                            </span>
                        </h1>
                    </div>
                    <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                        Bringing Ideas to Life Through Code
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        From intuitive frontends to robust backends, I turn ideas into high-performing web solutions.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <motion.a
                            href="#projects"
                            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-6 py-3 border border-gray-600 rounded-lg text-white font-medium hover:border-purple-500 transition flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}