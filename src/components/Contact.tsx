"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaFacebook,
  FaDirections,
  FaBeer,
} from "react-icons/fa";

const hours = [
  { day: "Monday - Saturday", time: "7:00 AM - 2:00 AM" },
  { day: "Sunday", time: "12:00 PM - 2:00 AM" },
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

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Find Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Come <span className="text-gradient">Visit</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              We&apos;re on the corner of Columbus and Lincoln. Can&apos;t miss us. Pull up a
              stool and stay awhile.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.789!2d-83.8797665!3d43.5892272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8823e1a7f1ae2afd%3A0xd81f3fa14f04a0e6!2sBell%20Bar!5e0!3m2!1sen!2sus!4f13.1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bell Bar location on Google Maps"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {/* Address */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      1314 Columbus Ave<br />
                      Bay City, MI 48708
                    </p>
                    <a
                      href="https://www.google.com/maps/dir//Bell+Bar,+1314+Columbus+Ave,+Bay+City,+MI+48708"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaDirections />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+19898938381"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      (989) 893-8381
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3">Hours</h3>
                    <div className="space-y-2">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground text-sm">
                            {h.day}
                          </span>
                          <span className="font-mono text-sm font-semibold text-primary">
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaFacebook className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Follow Us</h3>
                    <a
                      href="https://www.facebook.com/profile.php?id=100057384051622"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Bell Bar on Facebook
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      1,888 likes &bull; 6,297 check-ins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
