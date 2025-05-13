import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h1>Contact</h1>
            <p>Neem gerust contact met me op via LinkedIn of e-mail. 📬</p>
        </motion.div>
    );
}

export default Contact;
