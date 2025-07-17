import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import projects from '../data/projects';
import styles from './LandingPage.module.css';
import Motion from '../assets/Motion.jpg';
import RollingGallery from '../components/RollingGallery';

function LandingPage() {
    const form = useRef();
    const [buttonState, setButtonState] = useState('idle');

    const sendEmail = (e) => {
        e.preventDefault();
        const { name, email, title, message } = form.current;

        if (!name.value.trim() || !email.value.trim() || !title.value.trim() || !message.value.trim()) {
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
        }).catch(() => {
            setButtonState('error');
            setTimeout(() => setButtonState('idle'), 2500);
        });
    };

    const renderButtonText = () => {
        switch (buttonState) {
            case 'sending': return '⏳ Bezig met verzenden...';
            case 'success': return '✅ Bericht verzonden!';
            case 'error': return '❌ Vul alles correct in';
            default: return 'Verstuur';
        }
    };

    return (
        <div className={styles.page}>
            {/* HERO */}
            <section className={styles.section}>
                <div className={styles.heroInner}>
                    <div className={styles.heroText}>
                        <h1>Hicham Tahiri</h1>
                        <p>
                            Creatieve ontwikkelaar met een passie voor techniek, design en gebruiksvriendelijke digitale ervaringen.
                            Met een achtergrond in informatica en een liefde voor probleemoplossing bouw ik graag aan slimme en schaalbare oplossingen.
                        </p>
                        <a href="#projecten" className={styles.ctaButton}>Bekijk mijn werk</a>
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <img src={Motion} alt="Hicham profielfoto" className={styles.heroImage} />
                    </div>
                </div>
            </section>

            {/* OVER MIJ */}
            <section id="over" className={styles.section}>
                <h2>Over mij</h2>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <h3>Vaardigheden</h3>
                        <p>
                            Ik volg momenteel het tweede jaar van de opleiding Informatica aan de Hogeschool Rotterdam.<br /><br />
                            <strong>Jaar 1:</strong> Python, SQLite, C#, Scrum, Trello, Django<br />
                            <strong>Jaar 2:</strong> API’s, TypeScript, PostgreSQL, Docker
                        </p>
                    </div>
                    <div className={styles.block}>
                        <h3>Sport</h3>
                        <p>
                            Ik sport drie keer per week, doe aan voetbal en basketbal. Sport heeft me veel geleerd over discipline, doorzettingsvermogen en grenzen verleggen – eigenschappen die ik ook toepas in mijn werk.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <h3>Roadmap</h3>
                        <ul className={styles.timeline}>
                            <li><strong>2017 – 2021:</strong> Mavo, Montfort College</li>
                            <li><strong>2021 – 2023:</strong> HAVO, Montfort College</li>
                            <li><strong>2023 – 2027:</strong> Informatica, Hogeschool Rotterdam</li>
                            <li><strong>2025 – 2026:</strong> Stage (focus op Cybersecurity/Data)</li>
                            <li><strong>Toekomst:</strong> Software Developer of DevOps Engineer</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROJECTEN */}
            <section id="projecten" className={styles.section}>
                <h2>Projecten</h2>
                <RollingGallery projects={projects} speed={20000000} />
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.section}>
                <h2>Contact</h2>
                <p>Stuur gerust een bericht. Ik probeer zo snel mogelijk te reageren.</p>

                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <input type="text" name="name" placeholder="Je naam" required />
                    <input type="email" name="email" placeholder="Je e-mailadres" required />
                    <input type="text" name="title" placeholder="Onderwerp" required />
                    <textarea name="message" placeholder="Je bericht..." required />
                    <button type="submit" className={styles.ctaButton}>{renderButtonText()}</button>
                </form>
            </section>
        </div>
    );
}

export default LandingPage;
