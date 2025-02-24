import React from "react";
import { getInTouch } from "../constants/getIntouch";
import { motion } from "framer-motion";
export const GetInTouch = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{getInTouch.address}</p>
        <p className="my-4">{getInTouch.phoneNo}</p>
        <a href="#" className="border-b">
          {getInTouch.email}
        </a>
      </motion.div>
    </div>
  );
};
