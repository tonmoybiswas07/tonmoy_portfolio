"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
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

  const contactInfo = [
    {
      icon: <Mail size={21} />,
      label: "Email",
      info: "tonmoybiswas13900@gmail.com",
      color: "from-cyan-400 to-blue-500",
      glow: "group-hover:shadow-cyan-500/30",
    },
    {
      icon: <MapPin size={21} />,
      label: "Location",
      info: "Dhaka, Bangladesh 1212",
      color: "from-purple-400 to-pink-500",
      glow: "group-hover:shadow-purple-500/30",
    },
  ];

  const inputs = [
    {
      type: "text",
      name: "user_name",
      placeholder: "Your Name",
    },
    {
      type: "email",
      name: "user_email",
      placeholder: "Your Email",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Subject",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-5 py-24 md:px-10 lg:px-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
        />

        {/* Pink Glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[100px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="font-mono text-xs tracking-[0.35em] text-cyan-400">
              CONTACT / CONNECT
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Have an idea, a project, or simply want to say hello? Send me a
            message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Status */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-xs tracking-widest text-emerald-300">
                AVAILABLE FOR WORK
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Have a project
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                in mind?
              </span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 md:text-base">
              Whether you&apos;re looking to build a modern website, improve an
              existing product, or collaborate on something exciting, feel free
              to reach out.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06] ${item.glow}`}
                >
                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]`}
                  />

                  <div className="relative flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 text-white shadow-lg`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-slate-200">
                        {item.info}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="ml-auto text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-8 flex items-center gap-3 font-mono text-xs text-slate-600">
              <span className="text-cyan-400">&gt;</span>
              <span>Let&apos;s build something extraordinary_</span>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 blur-sm" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 shadow-2xl backdrop-blur-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>

                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                  MESSAGE_TERMINAL
                </span>

                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>

              {/* Form */}
              <div className="p-6 sm:p-8">
                <div className="mb-7">
                  <p className="font-mono text-xs text-cyan-400">
                    $ send_message()
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Start a conversation
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Fill out the form and I&apos;ll get back to you soon.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-5"
                >
                  {inputs.map((input) => (
                    <div key={input.name} className="relative">
                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required
                        className="peer w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10"
                      />

                      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-500 peer-focus:w-[90%]" />
                    </div>
                  ))}

                  <div className="relative">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                      className="peer w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10"
                    />

                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-500 peer-focus:w-[90%]" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]"
                  >
                    {/* Button Shine */}
                    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative">Send Message</span>

                    <Send
                      size={18}
                      className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.button>
                </form>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="font-mono text-[10px] text-slate-600">
                    SECURE_CONNECTION
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] text-emerald-400">
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.3em] text-slate-700"
        >
          <span>CREATE</span>
          <span className="text-cyan-500">•</span>
          <span>CONNECT</span>
          <span className="text-purple-500">•</span>
          <span>COLLABORATE</span>
        </motion.div>
      </div>

      {/* Toast */}
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
  );
};

export default Contact;