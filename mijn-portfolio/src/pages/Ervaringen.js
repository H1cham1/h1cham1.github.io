import { motion } from 'framer-motion';

function Ervaringen() {
    return (
        <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100vh', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h1>Ervaringen</h1>
            <p>Hier vind je mijn werkervaring, stages en samenwerkingen. 💼</p>
        </motion.div>
    );
}

export default Ervaringen;
