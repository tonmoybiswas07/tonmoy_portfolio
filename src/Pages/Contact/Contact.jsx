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
      toast.error("Failed to send message 😢");
      formRef.current.reset();
    }
  };

  return (
    <div className="relative z-0">
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Get in Touch
            </h2>

            <p className="text-gray-300 mb-10 max-w-md leading-relaxed">
              Have a question or want to work together? Drop me a message and
              let's create something amazing!
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  info: "tonmoybiswas13900@gmail.com",
                  bg: "bg-purple-500/20 text-purple-400",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Location",
                  info: "Dhaka, Bangladesh 1212",
                  bg: "bg-pink-500/20 text-pink-400",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`p-3 rounded-xl ${item.bg} flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              {[
                { type: "text", name: "user_name", placeholder: "Your Name" },
                { type: "email", name: "user_email", placeholder: "Your Email" },
                { type: "text", name: "subject", placeholder: "Subject" },
              ].map((input, idx) => (
                <input
                  key={idx}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  required
                  className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 transition-colors duration-300"
                />
              ))}

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 transition-colors duration-300"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </section>

      {/* BACKGROUND EFFECT */}
      <BackgroundBeams />
    </div>
  );
};

export default Contact;