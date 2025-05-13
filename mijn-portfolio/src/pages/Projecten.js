import { motion } from 'framer-motion';

function Projecten() {
    return (
        <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100vw', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h1>Projecten</h1>
            <p>Hier komen mijn projecten te staan. 🚧</p>
        </motion.div>
    );
}

export default Projecten;
