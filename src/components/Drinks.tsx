"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { IoMdBeer } from "react-icons/io";
import { FaCocktail, FaWineBottle, FaStar, FaArrowRight } from "react-icons/fa";
import { GiIceCube } from "react-icons/gi";
import Link from "next/link";

const onTap = [
  { name: "Miller Lite", price: "$1.50", tag: "Popular" },
  { name: "Bud Light", price: "$1.50", tag: null },
  { name: "Molson's", price: "$1.50", tag: null },
  { name: "Craft Rotation", price: "$2.00", tag: "Rotating" },
];

const bottles = [
  { name: "PBR (can)", price: "$1.25" },
  { name: "Domestics", price: "$2.00" },
  { name: "Craft Bottles", price: "$3.00" },
  { name: "Imports", price: "$2.50" },
];

const specialtyDrinks = [
  {
    name: "Bell Bar Bloody Mary",
    desc: "Our legendary house recipe — the most talked-about drink in Bay City. Ask for Amy's special.",
    icon: FaCocktail,
    featured: true,
  },
  {
    name: "Rum & Coke",
    desc: "Classic combination, perfectly mixed. A customer favorite since day one.",
    icon: FaCocktail,
    featured: false,
  },
  {
    name: "Jack & Coke",
    desc: "Tennessee whiskey meets cola. Simple. Strong. Satisfying.",
    icon: FaCocktail,
    featured: false,
  },
  {
    name: "7 and 7",
    desc: "Seagram's 7 and 7-Up. A timeless classic for a timeless bar.",
    icon: FaCocktail,
    featured: false,
  },
];

function SectionFade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export function Drinks() {
  const [activeTab, setActiveTab] = useState<"tap" | "bottles" | "cocktails">("tap");

  return (
    <section id="drinks" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionFade>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Drinks
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Coldest Pints in{" "}
              <span className="text-gradient">Bay County</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Six taps of ice-cold beer, a bar stocked with your favorites, and
              prices that&apos;ll make you wonder if it&apos;s still 1990.
            </p>
          </div>
        </SectionFade>

        {/* Featured - Bloody Mary */}
        <SectionFade delay={0.1}>
          <div className="glass rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FaCocktail className="text-4xl text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Legendary Bloody Mary
                  </h3>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full flex items-center gap-1">
                    <FaStar className="text-[10px]" /> House Favorite
                  </span>
                </div>
                <p className="text-muted-foreground max-w-xl">
                  Our most talked-about drink. Made fresh with a secret house
                  recipe that regulars swear by. One review says it best:
                  &ldquo;Amy makes the best Bloody Marys in the state.&rdquo;
                  Come taste it for yourself.
                </p>
              </div>
            </div>
          </div>
        </SectionFade>

        {/* Tab Navigation */}
        <SectionFade delay={0.15}>
          <div className="flex justify-center mb-10">
            <div className="glass rounded-xl p-1.5 flex gap-1">
              {[
                { id: "tap" as const, label: "On Tap", icon: IoMdBeer },
                { id: "bottles" as const, label: "Bottles & Cans", icon: FaWineBottle },
                { id: "cocktails" as const, label: "Cocktails", icon: FaCocktail },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "tap" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {onTap.map((beer) => (
                <div
                  key={beer.name}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <IoMdBeer className="text-3xl text-primary/70 group-hover:text-primary transition-colors" />
                    {beer.tag && (
                      <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                        {beer.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold mb-1">{beer.name}</h4>
                  <p className="text-2xl font-bold text-gradient">{beer.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">per pint</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "bottles" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bottles.map((beer) => (
                <div
                  key={beer.name}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <FaWineBottle className="text-3xl text-primary/70 group-hover:text-primary transition-colors mb-3" />
                  <h4 className="text-lg font-bold mb-1">{beer.name}</h4>
                  <p className="text-2xl font-bold text-gradient">{beer.price}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "cocktails" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {specialtyDrinks.map((drink) => (
                <div
                  key={drink.name}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <drink.icon className="text-2xl text-primary mb-3" />
                  <h4 className="text-lg font-bold mb-2">{drink.name}</h4>
                  <p className="text-sm text-muted-foreground">{drink.desc}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Full Menu CTA */}
        <SectionFade delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View Full Menu
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
