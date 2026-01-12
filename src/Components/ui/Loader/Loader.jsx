import { motion } from "framer-motion";

const Loader = () => {
  const name = "TONMOY";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Name */}
        <motion.h1 className="flex text-5xl font-extrabold tracking-[0.35em]">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.6)]"
            >
              {char}
            </motion.span>
          ))}
          <span className="text-blue-500">.</span>
        </motion.h1>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-1 bg-blue-500 rounded-full mt-4"
        />

        {/* Loading dots (spinner alternative) */}
        <motion.div className="flex gap-3 mt-10">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Text */}
        <motion.p
          className="mt-6 text-sm font-mono tracking-widest text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          Initializing portfolio()
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;
