import { motion } from "framer-motion";
import { ReactNode } from "react";

// Premium page transition with blur and scale
const pageTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

// Smooth fade with slide
export const FadeIn = ({ 
  children, 
  delay = 0,
  className = "",
  direction = "up"
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction],
        filter: "blur(8px)",
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ 
  children, 
  direction = "left",
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}) => {
  const directionOffset = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction], filter: "blur(8px)" }}
      animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ 
  children,
  className = "",
  staggerDelay = 0.1
}: { 
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children,
  className = ""
}: { 
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 20,
          scale: 0.95,
          filter: "blur(8px)",
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover card animation wrapper
export const HoverCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.02, 
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};
