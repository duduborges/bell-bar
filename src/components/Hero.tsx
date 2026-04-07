"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import { IoMdBeer } from "react-icons/io";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.restaurantguru.com/rb45-Bell-Bar-interior-2023-12.jpg')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Bell Icon */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <IoMdBeer className="text-6xl md:text-8xl text-primary" />
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-2">
            <span className="text-gradient">BELL</span>{" "}
            <span className="text-foreground">BAR</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-8"
          >
            Bay City&apos;s Classic Corner Pub &bull; Since 1950
          </motion.p>

          {/* Divider */}
          <div className="section-divider w-48 mx-auto mb-8" />

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
              <FaClock className="text-primary text-lg" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Open Daily</p>
                <p className="text-sm font-semibold">7AM - 2AM</p>
              </div>
            </div>
            <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary text-lg" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-semibold">1314 Columbus Ave</p>
              </div>
            </div>
            <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
              <FaPhone className="text-primary text-lg" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Call Us</p>
                <a href="tel:+19898938381" className="text-sm font-semibold hover:text-primary transition-colors">
                  (989) 893-8381
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#drinks"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              View Drinks
            </a>
            <a
              href="https://www.google.com/maps/dir//Bell+Bar,+1314+Columbus+Ave,+Bay+City,+MI+48708"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary/40 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary/60 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
