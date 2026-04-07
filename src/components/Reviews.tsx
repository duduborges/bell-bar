"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaStar, FaGoogle, FaYelp, FaFacebook, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    text: "A perfect corner bar where everybody seems to know each other. Ample seating, cheap pool, and a great atmosphere. The bartenders make you feel right at home.",
    author: "Mike R.",
    platform: "Google",
    icon: FaGoogle,
    rating: 5,
  },
  {
    text: "Amy makes THE BEST Bloody Marys in the state. Cold beer, friendly people, and the prices are unbeatable. This is what a real bar should be.",
    author: "Sarah T.",
    platform: "Facebook",
    icon: FaFacebook,
    rating: 5,
  },
  {
    text: "If you want a no-frills, genuine dive bar experience with cheap drinks and friendly regulars, Bell Bar is your spot. I've been coming here for years.",
    author: "James L.",
    platform: "Google",
    icon: FaGoogle,
    rating: 5,
  },
  {
    text: "Great little bar! Staff is super friendly. $1.50 pints and 50-cent pool — you really can't beat it. A Bay City classic.",
    author: "Chris D.",
    platform: "Yelp",
    icon: FaYelp,
    rating: 5,
  },
  {
    text: "This bar has the feel of walking into a friend's living room. Clean, welcoming, and the drinks are always ice cold. Don't miss the Bloody Marys!",
    author: "Linda M.",
    platform: "Google",
    icon: FaGoogle,
    rating: 5,
  },
  {
    text: "I work third shift at the hospital and Bell Bar is my go-to when I get off at 7 AM. Best morning crew in town. Feels like family.",
    author: "Nurse Katie",
    platform: "Facebook",
    icon: FaFacebook,
    rating: 5,
  },
];

const platforms = [
  { name: "Google", rating: "4.4", count: "242 reviews", icon: FaGoogle },
  { name: "Facebook", rating: "4.0", count: "322 reviews", icon: FaFacebook },
  { name: "Restaurant Guru", rating: "4.7", count: "587 votes", icon: FaStar },
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

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Reviews
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What Our <span className="text-gradient">Regulars</span> Say
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Don&apos;t just take our word for it — hear from the people who call Bell Bar
              their second home.
            </p>
          </div>
        </FadeIn>

        {/* Rating Platforms */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {platforms.map((p) => (
              <div key={p.name} className="glass rounded-xl px-6 py-4 flex items-center gap-4">
                <p.icon className="text-2xl text-primary" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{p.rating}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xs ${
                            i < Math.round(parseFloat(p.rating))
                              ? "text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{p.count}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                className="glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <FaQuoteLeft className="text-primary/30 text-2xl mb-4" />
                <p className="text-foreground/90 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(review.rating)].map((_, s) => (
                        <FaStar key={s} className="text-primary text-xs" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <review.icon className="text-sm" />
                    <span className="text-xs">{review.platform}</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Bell+Bar/@43.5891942,-83.8797665,17z/data=!4m14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGoogle />
              Leave us a review on Google
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
