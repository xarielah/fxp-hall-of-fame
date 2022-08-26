import { motion } from 'framer-motion';

const ContentAnimation = ({ children }) => {
    return (
        <motion.article
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            {children}
        </motion.article>
    );
};

export default ContentAnimation;
