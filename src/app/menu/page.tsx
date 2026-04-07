"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdBeer } from "react-icons/io";
import {
  FaCocktail,
  FaWineBottle,
  FaStar,
  FaArrowLeft,
  FaInfoCircle,
} from "react-icons/fa";
import { GiPretzel, GiPizzaSlice } from "react-icons/gi";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const draftBeers = [
  { name: "Miller Lite", style: "Light Lager", abv: "4.2%", price: "$1.50" },
  { name: "Bud Light", style: "Light Lager", abv: "4.2%", price: "$1.50" },
  { name: "Molson Canadian", style: "Lager", abv: "5.0%", price: "$1.50" },
  { name: "Craft Rotation", style: "Varies", abv: "Varies", price: "$2.00" },
];

const bottlesCans = [
  { name: "PBR (can)", style: "American Lager", price: "$1.25" },
  { name: "Coors Light", style: "Light Lager", price: "$2.00" },
  { name: "Michelob ULTRA", style: "Light Lager", price: "$2.00" },
  { name: "Yuengling Lager", style: "Amber Lager", price: "$2.00" },
  { name: "Yuengling Black & Tan", style: "Dark Lager", price: "$2.00" },
  { name: "Blue Moon", style: "Belgian White", price: "$3.00" },
  { name: "Bell's Two Hearted", style: "IPA", price: "$3.00" },
  { name: "Kona Big Wave", style: "Golden Ale", price: "$3.00" },
  { name: "Leinenkugel Shandy", style: "Shandy (Seasonal)", price: "$3.00" },
];

const cocktails = [
  {
    name: "Bell Bar Bloody Mary",
    desc: "Our legendary house recipe. The most talked-about drink at Bell Bar. Ask for Amy's special touch.",
    price: "Ask",
    featured: true,
  },
  {
    name: "Rum & Coke",
    desc: "Captain Morgan or Bacardi with Coca-Cola over ice.",
    price: "$4.00",
    featured: false,
  },
  {
    name: "Jack & Coke",
    desc: "Jack Daniel's Tennessee Whiskey with Coca-Cola.",
    price: "$5.00",
    featured: false,
  },
  {
    name: "7 and 7",
    desc: "Seagram's 7 Crown blended with 7-Up. A timeless classic.",
    price: "$4.00",
    featured: false,
  },
  {
    name: "Well Drinks",
    desc: "Vodka, gin, rum, whiskey — your choice with your favorite mixer.",
    price: "$3.50",
    featured: false,
  },
];

const snacksAndNearby = [
  {
    icon: GiPretzel,
    name: "Bagged Snacks",
    desc: "Classic bar snacks available at the counter. Chips, nuts, and more.",
    type: "In-House",
  },
  {
    icon: GiPizzaSlice,
    name: "D'Angelo's Pizza",
    desc: "Right across the street on Columbus Ave. Order and bring it in!",
    type: "Across the Street",
  },
  {
    icon: GiPizzaSlice,
    name: "Grampa Tony's",
    desc: "A few blocks away — they deliver right to the bar. Ask the bartender!",
    type: "Delivers to Bar",
  },
];

function MenuSection({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="text-xl text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </Link>

          <div className="text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Full Menu
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Drinks & <span className="text-gradient">Eats</span>
            </h1>
            <p className="max-w-xl mx-auto text-muted-foreground">
              The coldest pints in Bay County at prices you won&apos;t believe. No
              kitchen, but plenty of options to keep you fueled.
            </p>
          </div>
        </motion.div>

        {/* Price Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-12 flex items-start gap-3"
        >
          <FaInfoCircle className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Prices are approximate and may vary. Specials change regularly — ask
            your bartender for today&apos;s deals. Craft rotation changes frequently
            based on availability.
          </p>
        </motion.div>

        {/* Draft Beers */}
        <MenuSection title="On Tap &mdash; 6 Ice-Cold Lines" icon={IoMdBeer}>
          <div className="grid sm:grid-cols-2 gap-4">
            {draftBeers.map((beer) => (
              <div
                key={beer.name}
                className="glass rounded-xl p-5 flex items-center justify-between hover:border-primary/30 transition-all duration-300"
              >
                <div>
                  <h3 className="font-bold text-lg">{beer.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {beer.style} &bull; {beer.abv}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gradient">{beer.price}</p>
                  <p className="text-xs text-muted-foreground">per pint</p>
                </div>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Bottles & Cans */}
        <MenuSection title="Bottles & Cans" icon={FaWineBottle} delay={0.05}>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] divide-y divide-border/50">
              {bottlesCans.map((beer) => (
                <div
                  key={beer.name}
                  className="contents hover:bg-primary/5 transition-colors"
                >
                  <div className="px-5 py-4">
                    <h3 className="font-semibold">{beer.name}</h3>
                    <p className="text-xs text-muted-foreground">{beer.style}</p>
                  </div>
                  <div className="px-5 py-4 flex items-center">
                    <span className="font-bold font-mono text-primary">
                      {beer.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Selection varies. Check Untappd for current check-ins.
          </p>
        </MenuSection>

        {/* Cocktails */}
        <MenuSection title="Cocktails & Mixed Drinks" icon={FaCocktail} delay={0.1}>
          <div className="space-y-4">
            {cocktails.map((drink) => (
              <div
                key={drink.name}
                className={`glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 ${
                  drink.featured ? "border-primary/20 relative overflow-hidden" : ""
                }`}
              >
                {drink.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <FaStar className="text-[8px]" /> HOUSE FAVORITE
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{drink.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {drink.desc}
                    </p>
                  </div>
                  <span className="font-bold font-mono text-primary text-lg whitespace-nowrap">
                    {drink.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Snacks & Nearby Food */}
        <MenuSection title="Food Options" icon={GiPretzel} delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-4">
            {snacksAndNearby.map((item) => (
              <div
                key={item.name}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="text-xl text-primary" />
                  <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full font-bold">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Spotted on Untappd */}
        <MenuSection title="Recently Spotted on Untappd" icon={IoMdBeer} delay={0.2}>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-4">
              These beers have been recently checked in by customers at Bell Bar.
              Availability may vary.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Kona Big Wave",
                "Bell's Two Hearted IPA",
                "Blue Moon Belgian White",
                "Mitten Brewing Fogout",
                "DuClaw Turn West",
                "Terrapin Hopsecutioner",
                "Kuhnhenn DRIPA",
                "Leinenkugel Summer Shandy",
              ].map((beer) => (
                <span
                  key={beer}
                  className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm text-foreground/80 border border-border/50"
                >
                  {beer}
                </span>
              ))}
            </div>
          </div>
        </MenuSection>

        {/* Back to Home */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
