"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      "service_d4kbme1",
      "template_zbitgit",
      formRef.current,
      "V1YUuKLLEw6rslv9W"
    );

    toast.success("Message sent successfully 🚀");
    formRef.current.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
   formRef.current.reset();
  }
};


  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-400 mb-10 max-w-md">
            Have a question or want to work together? Drop us a message!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Mail />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">tonmoybiswas13900@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                <MapPin />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400 text-sm">
                  Dhaka, Bangladesh 1212
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
<ToastContainer position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="dark"></ToastContainer>
      {/* BACKGROUND EFFECT */}
      <BackgroundBeams />
    </section>
  );
};

export default Contact;
