import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrapper = ({ children }) => {
    return (
        <motion.article
            animate={{ y: 0 }}
            initial={{ y: -900 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
        >
            {children}
        </motion.article>
    );
};

export default AnimationWrapper;
