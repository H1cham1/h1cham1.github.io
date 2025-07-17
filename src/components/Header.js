import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = id === 'contact' ? -95 : -133;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleNavClick = (id) => {
        if (location.pathname === '/') {
            scrollToSection(id);
        } else {
            // Navigeer naar home en scroll na vertraging
            navigate('/');
            setTimeout(() => {
                scrollToSection(id);
            }, 300);
        }
    };

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <button onClick={handleHomeClick} className={styles.logo}>Home</button>
                <nav className={styles.navLinks}>
                    <button onClick={() => handleNavClick('over')} className={styles.logo}>Over mij</button>
                    <button onClick={() => handleNavClick('projecten')} className={styles.logo}>Projecten</button>
                    <button onClick={() => handleNavClick('contact')} className={styles.logo}>Contact</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
