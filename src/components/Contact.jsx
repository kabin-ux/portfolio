import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [result, setResult] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("access_key", "1feb6aea-2165-47de-bc36-8a9f23e2cda5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 text-white"
        >
            <div className="max-w-xl mx-auto text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-4xl font-bold mb-4">Contact Me</h2>
                    <p className="text-gray-400 text-lg">Let’s build something great together!</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
                <form name="contact" method="POST" data-netlify="true" className="space-y-6" onSubmit={onSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                            placeholder="Write your message here..."
                            required
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                    </motion.button>
                    <p className='text-center'>{result}</p>
                </form>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
                <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition">
                    <Mail className="w-6 h-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400 text-sm">dongolkabin@gmail.com</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition">
                    <Phone className="w-6 h-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400 text-sm">+977 9868730059</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition">
                    <MapPin className="w-6 h-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400 text-sm">Sanepa, Lalitpur</p>
                </div>
            </motion.div>
        </section>
    );
}
