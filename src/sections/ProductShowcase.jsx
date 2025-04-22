import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["9%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section className="py-24 flex items-center justify-center bg-gradient-to-r from-red-400 to-yellow-400">
      <div ref={ref} className="h-screen flex items-center justify-center">
        <motion.img
          src="https://rstr.in/google/firebase-studio/8pLnpvHsGsS"
          alt="Firebase Studio"
          className="w-full max-w-7xl z-10 object-contain"
          style={{
            translateY,
            opacity,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
