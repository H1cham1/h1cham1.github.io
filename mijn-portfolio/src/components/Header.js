import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            document.body.classList.add('slide-down');

            setTimeout(() => {
                document.body.classList.remove('slide-down');
                navigate('/');
            }, 500); // komt overeen met CSS animatie
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <button onClick={handleHomeClick} className={styles.logo}>Home</button>
                <button className={styles.menuButton} onClick={() => setMenuOpen(prev => !prev)}>
                    Menu
                </button>
            </div>

            <nav className={`${styles.slideMenu} ${menuOpen ? styles.open : ''}`}>
                <button onClick={handleHomeClick} className={styles.menuLink}>Home</button>
                <a href="/ervaringen" onClick={() => setMenuOpen(false)}>Ervaringen</a>
                <a href="/projecten" onClick={() => setMenuOpen(false)}>Projecten</a>
                <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <a href="/over" onClick={() => setMenuOpen(false)}>Over mij</a>
            </nav>
        </header>
    );
}

export default Header;
