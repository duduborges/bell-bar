"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GiVintageRobot, GiBarStool, GiPoolTriangle } from "react-icons/gi";
import { FaBeer, FaHistory, FaHeart } from "react-icons/fa";

const timeline = [
  {
    year: "~1933",
    title: "Post-Prohibition Origins",
    desc: "Bell Bar opens its doors on the corner of Columbus & Lincoln, likely one of the first neighborhood bars after Prohibition ends.",
  },
  {
    year: "1950",
    title: "Officially Named",
    desc: "City directories confirm the name 'Bell Bar' — the iconic bell hung behind the bar becomes the symbol of the place.",
  },
  {
    year: "2014",
    title: "A Sudden Close",
    desc: "After decades of continuous operation, Bell Bar unexpectedly closes its doors on December 31st.",
  },
  {
    year: "2015",
    title: "Reborn Under New Ownership",
    desc: "Matt & Gina Woods purchase the bar in May, give it a complete renovation, and reopen in July — preserving its soul while adding new life.",
  },
];

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              More Than Just a <span className="text-gradient">Bar</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              For over seven decades, Bell Bar has been the beating heart of
              Bay City&apos;s Columbus Avenue — a place where strangers become
              regulars and regulars become family.
            </p>
          </div>
        </FadeInSection>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left - Story */}
          <FadeInSection delay={0.1}>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <FaHistory className="text-3xl text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">A Bay City Legend</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Walk into Bell Bar and you&apos;re stepping into a piece of Bay City
                  history. Operating since just after Prohibition, this corner bar
                  at Columbus and Lincoln has served generations of locals — from
                  factory workers to third-shift nurses from the nearby hospital
                  who stop in at 7 AM after their overnight shifts.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  During renovations, the new owners discovered vintage beer cans
                  from Pfeiffer and E&B — extinct Detroit breweries — tucked away
                  in the walls. These treasures now sit proudly displayed above
                  the bar, connecting the present to decades of history.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <FaHeart className="text-3xl text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">The Bell Behind the Bar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  An original bell hangs on the wall behind the bar — the
                  namesake that has rung through generations of good times,
                  celebrations, and the kind of moments that make a
                  neighborhood bar irreplaceable. The exact origin of the bell
                  remains a mystery, adding to the charm.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Right - Image + Stats */}
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7U6ZqkfySNAKIIkKO5bstrMtP8nNtGRI_c189nIyEXTK2L2hxKKAlQ4uD-6CV7105rR4kfdD0SMv0fcAWT47fFn2tZZLMblEd4vXQTn2DGO6kCnofSqkYv0CcYAue3gHUOLRtKk6F-PpB/s1600/bell+outside1.jpg"
                  alt="Bell Bar exterior on Columbus Avenue, Bay City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm text-muted-foreground">
                    Corner of Columbus & Lincoln
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaBeer, value: "70+", label: "Years Strong" },
                  { icon: GiBarStool, value: "4.4", label: "Google Rating" },
                  { icon: GiPoolTriangle, value: "$0.50", label: "Pool Games" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-xl p-4 text-center"
                  >
                    <stat.icon className="text-2xl text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Timeline */}
        <FadeInSection delay={0.1}>
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-12">
              Through the <span className="text-gradient">Years</span>
            </h3>
            <div className="hidden md:block absolute left-1/2 top-20 bottom-0 w-px bg-border" />
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative glass rounded-xl p-6 ${
                    i % 2 === 0 ? "md:text-right" : "md:col-start-2"
                  }`}
                >
                  <span className="text-primary font-mono text-sm font-bold">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold mt-1 mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
