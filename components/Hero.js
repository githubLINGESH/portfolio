import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Animation transformations for AI and DL elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.5, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Center pop-out effect for the profile background
  const bgScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.7, 1.1, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center justify-center overflow-hidden relative"
      style={{
        backgroundColor : "var(--bg-main)"
      }}
    >
      {/* Profile Background with ease pop-out transition */}
      <motion.div
        className="absolute inset-0 bg-center"
        style={{
          backgroundImage: "url('Edited.png')",
          scale: bgScale,
          opacity: bgOpacity,
        }}
        transition={{ ease: [0.4, 0, 0.6, 1], duration: 2.5 }}
      />

      {/* Floating AI image positioned with smooth pop-in */}
      <motion.div
        className="absolute top-1/3 left-10"
        style={{ y: y1, rotate, scale, opacity }}
        transition={{
          ease: [0.42, 0, 0.58, 1],
          duration: 2,
          delay: 0.3,
        }}
      >
        <img className="w-20 h-20" src="dl.png" alt="Deep Learning Icon" />
      </motion.div>
    </section>
  );
};

export default Hero;
