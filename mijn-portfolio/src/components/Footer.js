import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <p>© {new Date().getFullYear()} Hicha. Alle rechten voorbehouden.</p>
            </div>
            <div className={styles.right}>
                <p className={styles.heading}>Socials</p>
                <a href="https://www.linkedin.com/in/jouw-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/jouw-instagram" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://github.com/jouw-github" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </footer>
    );
}

export default Footer;
