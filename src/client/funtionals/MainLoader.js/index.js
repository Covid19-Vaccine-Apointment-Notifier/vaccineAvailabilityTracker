import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import "./mainLoader.scss";

export default ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="loaderForAll">
            <div className="uLogo"></div>
            <div className="lds-dual-ring"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
