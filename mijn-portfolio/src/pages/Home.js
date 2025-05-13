import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import thumb from '../assets/duim.jpg';

function Home() {
    const navigate = useNavigate();
    const homeRef = useRef(null);

    const handleSlide = (target, direction) => {
        if (homeRef.current) {
            const slideClass = direction === 'right' ? styles.slideOutRight : styles.slideOutLeft;
            homeRef.current.classList.add(slideClass);

            setTimeout(() => {
                navigate(target);
            }, 500);
        }
    };

    return (
        <motion.div
            ref={homeRef}
            className={styles.home}
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {/* HERO BLOK */}
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>Welkom op mijn portfolio</h1>
                    <p>
                        Mijn naam is Hicham Tahiri. Ik ben een creatieve ontwikkelaar met passie voor techniek,
                        design en gebruiksvriendelijke digitale ervaringen. Kijk gerust rond op mijn website!
                    </p>
                </div>
                <div className={styles.heroImage}>
                    <img src={thumb} alt="Profielfoto" />
                </div>
            </section>

            {/* NAVIGATIE BLOKKEN */}
            <section className={styles.blocks}>
                <button onClick={() => handleSlide('/ervaringen', 'right')} className={styles.block}>Ervaringen</button>
                <button onClick={() => handleSlide('/projecten', 'left')} className={styles.block}>Projecten</button>
                <button onClick={() => handleSlide('/contact', 'right')} className={styles.block}>Contact</button>
                <button onClick={() => handleSlide('/over', 'left')} className={styles.block}>Over mij</button>
            </section>
        </motion.div>
    );
}

export default Home;
