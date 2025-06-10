import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Motion from '../assets/Motion.jpg';

//ALS IK ZOEK NAAR STAGE OF EEN BAAN KAN IK DIT OP DE HOMEPAGINA DUIDELIJK WEERGEVEN

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
            initial={{ y: '-150vh', opacity: 1 }}
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
                    <img src={Motion} alt="Profielfoto" />
                </div>
            </section>

            {/* NAVIGATIE BLOKKEN */}
            <section className={styles.blocks}>
                <button onClick={() => handleSlide('/over', 'left')} className={styles.block}>Over mij</button>
                <button onClick={() => handleSlide('/contact', 'right')} className={styles.block}>Contact</button>
                <button onClick={() => handleSlide('/projecten', 'left')} className={styles.block}>Projecten</button>
            </section>
        </motion.div>
    );
}

export default Home;
