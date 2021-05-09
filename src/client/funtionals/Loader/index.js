import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loader.scss";

export default ({ text }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="loaderForAll">
          <div className="textLoader">{text}</div>
          <div className="lds-dual-ring"></div>
        </div>
      </motion.div>
      )
    </AnimatePresence>
  );
};
