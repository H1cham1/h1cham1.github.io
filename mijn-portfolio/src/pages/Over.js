import { motion } from 'framer-motion';

function Over() {
    return (
        <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100vw', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h1>Over mij</h1>
            <p>Hier komt meer informatie over mij als persoon. ✍️</p>
        </motion.div>
    );
}

export default Over;
