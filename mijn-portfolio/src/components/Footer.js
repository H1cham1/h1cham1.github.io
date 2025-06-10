import styles from './Footer.module.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    const lastUpdated = '15 mei 2025';

    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <p>© {new Date().getFullYear()} Hicha. Alle rechten voorbehouden.</p>
                <p className={styles.updated}>Laatste update: {lastUpdated}</p>
            </div>

            <div className={styles.right}>
                <div className={styles.socialsGroup}>
                    <p className={styles.heading}>Socials</p>
                    <a href="https://www.linkedin.com/in/hicham-tahiri-7483b5281/" target="_blank" rel="noreferrer" className={styles.link}>
                        <FaLinkedin className={styles.icon} /> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/hicham__5314/" target="_blank" rel="noreferrer" className={styles.link}>
                        <FaInstagram className={styles.icon} /> Instagram
                    </a>
                    <a href="https://github.com/H1cham1" target="_blank" rel="noreferrer" className={styles.link}>
                        <FaGithub className={styles.icon} /> GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
