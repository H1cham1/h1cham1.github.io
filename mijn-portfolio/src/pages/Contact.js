import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_USER_ID'
        ).then(
            () => {
                alert('Bericht verzonden!');
                form.current.reset();
            },
            (error) => {
                alert('Er ging iets mis 😕');
                console.error(error);
            }
        );
    };

    return (
        <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className={styles.container}
        >
            <div className={styles.left}>
                <h3>Pagina's</h3>
                <a href="/">Home</a>
                <a href="/ervaringen">Ervaringen</a>
                <a href="/projecten">Projecten</a>
                <a href="/contact">Contact</a>
                <a href="/over">Over mij</a>

                <h3 style={{ marginTop: '20px' }}>Socials</h3>
                <a href="https://www.linkedin.com/in/hicham-tahiri-7483b5281/" target="_blank" rel="noreferrer">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://www.instagram.com/hicham__5314/" target="_blank" rel="noreferrer">
                    <FaInstagram /> Instagram
                </a>
                <a href="https://github.com/H1cham1" target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                </a>
            </div>

            <div className={styles.right}>
                <h2>Contact</h2>
                <p>Wilt u in contact komen? Stuur mij gerust een bericht en ik probeer er zo snel mogelijk op terug te komen</p>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <input type="text" name="name" placeholder="Je naam" required className={styles.input} />
                    <input type="email" name="email" placeholder="Je e-mailadres" required className={styles.input} />
                    <textarea name="message" placeholder="Je bericht..." required className={styles.textarea} />
                    <button type="submit" className={styles.button}>Verstuur</button>
                </form>
            </div>
        </motion.div>
    );
}

export default Contact;
