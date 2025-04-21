import React from "react";
import { motion } from "framer-motion";
import omarPhoto from "../assets/omarPhoto.png";
const FloatingBubbles = () => {
  return (
    <motion.div className="relative w-96 h-96  mb-20">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute w-96 h-96 rounded-full  overflow-hidden   group "
      >
        <div
          className="relative w-full h-full transition-all duration-1200 transform group-hover:[transform:rotateX(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* front side */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400  to-purple-600 "
            style={{ backfaceVisibility: "hidden" }}
          />

          {/* back side */}
          <div
            className="absolute inset-0 w-full h-full [transform:rotateX(180deg)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={omarPhoto}
              alt="Floating Bubble"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute w-32 h-32 rounded-full overflow-hidde top-80 bg-gradient-to-r from-pink-400   to-purple-600 group"></motion.div>
      <motion.div className="absolute w-32 h-32 rounded-full overflow-hidde left-70 bg-gradient-to-r from-pink-400   to-purple-600 group"></motion.div>
    </motion.div>
  );
};

export default FloatingBubbles;
