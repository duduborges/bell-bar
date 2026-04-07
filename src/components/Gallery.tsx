"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const photos = [
  {
    src: "https://img.restaurantguru.com/rb45-Bell-Bar-interior-2023-12.jpg",
    alt: "Bell Bar interior view",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7U6ZqkfySNAKIIkKO5bstrMtP8nNtGRI_c189nIyEXTK2L2hxKKAlQ4uD-6CV7105rR4kfdD0SMv0fcAWT47fFn2tZZLMblEd4vXQTn2DGO6kCnofSqkYv0CcYAue3gHUOLRtKk6F-PpB/s1600/bell+outside1.jpg",
    alt: "Bell Bar exterior",
    span: "",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5fXU5Z_GNQdW_k90uw6JSqdwPo7OP4euP89DPmBSTf53S4GIMYptTB1EVxYFdisz2pDYUMR8m_nAnq0K6UhpTR552DTSz5GavRiyzIc3E1VSfJVsRQBAzNlaXwvmtlVU9u9h9U1F6GMrL/s1600/bell+austin3.jpg",
    alt: "Bartender at Bell Bar",
    span: "",
  },
  {
    src: "https://img02.restaurantguru.com/c81b-Pub-and-bar-Bell-Bar-design.jpg",
    alt: "Bar design and decor",
    span: "",
  },
  {
    src: "https://img02.restaurantguru.com/ca82-Bell-Bar-Bay-City-interior.jpg",
    alt: "Interior seating area",
    span: "",
  },
  {
    src: "https://img02.restaurantguru.com/cc6a-Pub-and-bar-Bell-Bar-exterior.jpg",
    alt: "Bar counter area",
    span: "col-span-2",
  },
  {
    src: "https://img02.restaurantguru.com/cf71-Pub-and-bar-Bell-Bar-drink.jpg",
    alt: "Beverages at Bell Bar",
    span: "",
  },
  {
    src: "https://img02.restaurantguru.com/c5d7-Pub-and-bar-Bell-Bar-bar-counter.jpg",
    alt: "The famous bar counter",
    span: "",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiegdor06N4zSbilDSPeSEnPCnkbqrF3Fvvs0aEzPErPKkC360JsC-H4HvuqebEpBbB4RgXzYnah6aGKuWpiwdxeaDWDDkojNNf9T_-wY5zji1ngyN7IUN0m4RMvyW4elJl2EzYE4IjwaHO/s1600/bell+wall+sign.jpg",
    alt: "Vintage wall signage",
    span: "",
  },
  {
    src: "https://img02.restaurantguru.com/c31c-Pub-and-bar-Bell-Bar-photo.jpg",
    alt: "Bell Bar atmosphere",
    span: "",
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

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (dir: -1 | 1) => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + dir + photos.length) % photos.length;
    setSelectedIndex(newIndex);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Step <span className="text-gradient">Inside</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Real photos from real visits. What you see is what you get —
              an authentic Bay City neighborhood bar.
            </p>
          </div>
        </FadeIn>

        {/* Photo Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${photo.span}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-foreground/90">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-10"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-foreground/70 hover:text-foreground transition-colors z-10"
            >
              <FaChevronLeft className="text-3xl" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-foreground/70 hover:text-foreground transition-colors z-10"
            >
              <FaChevronRight className="text-3xl" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-lg px-4 py-2">
              <p className="text-sm text-foreground/80">
                {photos[selectedIndex].alt} &mdash; {selectedIndex + 1}/{photos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
