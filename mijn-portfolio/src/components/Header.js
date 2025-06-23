import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            document.body.classList.add('slide-down');

            setTimeout(() => {
                document.body.classList.remove('slide-down');
                navigate('/');
            }, 500);
        }
    };

    const handleNavigate = (path) => {
        if (location.pathname !== path) {
            navigate(path);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <button onClick={handleHomeClick} className={styles.logo}>Home</button>
                <nav className={styles.navLinks}>
                    <button onClick={() => handleNavigate('/projecten')} className={styles.logo}>Projecten</button>
                    <button onClick={() => handleNavigate('/contact')} className={styles.logo}>Contact</button>
                    <button onClick={() => handleNavigate('/over')} className={styles.logo}>Over mij</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
