import { motion } from 'framer-motion';

const PageAnimation = ({ children }) => {
    return (
        <motion.section
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
        >
            {children}
        </motion.section>
    );
};

export default PageAnimation;
