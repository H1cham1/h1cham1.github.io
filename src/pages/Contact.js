import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {
    const form = useRef();
    const [buttonState, setButtonState] = useState('idle'); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();

        const { name, email, title, message } = form.current;

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !title.value.trim() ||
            !message.value.trim()
        ) {
            setButtonState('error');
            setTimeout(() => setButtonState('idle'), 2500);
            return;
        }

        setButtonState('sending');

        emailjs.sendForm(
            'service_ynp5sxl',
            'template_ydmjigd',
            form.current,
            'IepTh5lQlTFSGrtab'
        ).then(() => {
            form.current.reset();
            setButtonState('success');
            setTimeout(() => setButtonState('idle'), 2500);
        }).catch((err) => {
            console.error(err);
            setButtonState('error');
            setTimeout(() => setButtonState('idle'), 2500);
        });
    };

    const renderButtonText = () => {
        switch (buttonState) {
            case 'sending':
                return '⏳ Bezig met verzenden...';
            case 'success':
                return '✅ Bericht verzonden!';
            case 'error':
                return '❌ Vul alles correct in';
            default:
                return 'Verstuur';
        }
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
                    <input type="text" name="title" placeholder="Onderwerp" required className={styles.input} />
                    <textarea name="message" placeholder="Je bericht..." required className={styles.textarea} />
                    <motion.button
                        type="submit"
                        className={styles.button}
                        key={buttonState}
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: [0, 50, -50, 0], opacity: [1, 0, 0, 1] }}
                        transition={{ duration: 0.6 }}
                    >
                        {renderButtonText()}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
}

export default Contact;
