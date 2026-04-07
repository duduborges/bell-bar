"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GiPoolTriangle,
  GiDart,
} from "react-icons/gi";
import { FaTv, FaTree, FaClock, FaDice } from "react-icons/fa";
import { IoMdBeer } from "react-icons/io";

const features = [
  {
    icon: GiPoolTriangle,
    title: "Pool Table",
    desc: "Just 50 cents a game. Challenge anyone in the bar — you'll make a friend either way.",
  },
  {
    icon: GiDart,
    title: "Dartboard",
    desc: "Sharpen your aim between pints. A classic bar pastime that never gets old.",
  },
  {
    icon: FaTv,
    title: "Multiple TVs",
    desc: "Catch every game on our screens. From Lions to Tigers, we've got you covered.",
  },
  {
    icon: FaDice,
    title: "Lottery Machines",
    desc: "Try your luck on Michigan Lottery machines while you sip your favorite beer.",
  },
  {
    icon: FaTree,
    title: "Outdoor Patio",
    desc: "A fenced-in patio for those warm Michigan evenings. Fresh air, cold beer.",
  },
  {
    icon: FaClock,
    title: "Open at 7 AM",
    desc: "For the third-shift nurses, the early risers, and anyone who needs a cold one before noon.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Atmosphere() {
  return (
    <section id="atmosphere" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Atmosphere
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your <span className="text-gradient">Living Room</span> Away
              From Home
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Bell Bar isn&apos;t trying to be something it&apos;s not. It&apos;s a genuine
              neighborhood corner bar where everybody seems to know each
              other — and if they don&apos;t, they will by the end of the night.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feat, i) => (
            <FadeIn key={feat.title} delay={i * 0.08}>
              <motion.div
                className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feat.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Photo Strip */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip0O48ppov1q3zEIHbh2PRod5zIL1y9ZTQk3zbRgUlgHd3PFooUD5PtJyaz7I9yNIxkPE_pvF_97aalC0e2Rzc5e8fRrkL0LC31FG4S9lkp1SteAtqk-WmzAfHMYC5UuaCMr5Uofe4-O22/s1600/bell+inside2.jpg",
                alt: "Bell Bar interior",
              },
              {
                src: "https://img02.restaurantguru.com/c81b-Pub-and-bar-Bell-Bar-design.jpg",
                alt: "Bell Bar design",
              },
              {
                src: "https://img02.restaurantguru.com/ca82-Bell-Bar-Bay-City-interior.jpg",
                alt: "Bell Bar seating area",
              },
              {
                src: "https://img02.restaurantguru.com/c5d7-Pub-and-bar-Bell-Bar-bar-counter.jpg",
                alt: "Bell Bar counter",
              },
            ].map((photo) => (
              <div
                key={photo.alt}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-sm font-medium text-foreground">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Fun Fact */}
        <FadeIn delay={0.15}>
          <div className="mt-12 glass rounded-2xl p-8 text-center">
            <IoMdBeer className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Did You Know?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bell Bar has scooters available outside for customers who&apos;ve had a
              few too many. It&apos;s that kind of thoughtful, old-school hospitality
              that makes this place one of a kind.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
