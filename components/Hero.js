import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // ✅ Call ALL hooks FIRST — before any conditionals
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // ✅ Define ALL transforms at the top level - NEVER conditionally
  // Reduced mobile animation intensity to prevent misalignment
  const y1Mobile = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y1Desktop = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const rotateMobile = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateDesktop = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const scaleMobile = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1.0, 0.9]);
  const scaleDesktop = useTransform(scrollYProgress, [0, 0.2, 1], [0.5, 1.2, 1]);

  const scaleSmall1 = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 0.7, 0.6]);
  const scaleSmall2 = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 0.5, 0.4]);

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const bgScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.95, 1.05, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  // ✅ Effects after hooks
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    setHasMounted(true);

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Early return after all hooks
  if (!hasMounted) {
    return (
      <section
        ref={ref}
        className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-black"
      >
        <div className="opacity-0" aria-hidden="true">Loading...</div>
      </section>
    );
  }

  // ✅ Safe to render with all transforms defined
  return (
    <section
      ref={ref}
      className="
        w-full 
        flex flex-col 
        items-center 
        justify-start 
        overflow-hidden
        relative 
        bg-black
        pt-60     /* smaller top & bottom padding for mobile */
        sm:pt-40 sm:pb-16   /* slightly larger padding for small tablets */
        md:min-h-screen     /* only stretch to full height on desktop */
        md:justify-center   /* center content vertically on desktop */
      "
    >



      {/* Background with mobile-optimized scaling */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('finalprofile.png')",
          scale: bgScale,
          opacity: bgOpacity,
        }}
        transition={{ ease: [0.4, 0, 0.6, 1], duration: 2.5 }}
      />

      {/* Conditional layout based on screen size */}
      {isMobile ? (
        <>  </>
      ) : (
        /* Desktop layout - Original positioning */
        <motion.div
          className="ml-10"
          style={{ 
            y: y1Desktop, 
            rotate: rotateDesktop, 
            scale: scaleDesktop, 
            opacity 
          }}
          transition={{ ease: [0.42, 0, 0.58, 1], duration: 2, delay: 0.3 }}
        >
          <img className="w-20 h-20" src="dl.png" alt="Deep Learning Icon" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;