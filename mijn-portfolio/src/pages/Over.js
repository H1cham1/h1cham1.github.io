import styles from './Over.module.css';
import { motion } from 'framer-motion';

function Over() {
    return (
        <motion.div
            className={styles.over}
            initial={{ x: 300, opacity: 0 }} // <-- Fix: geen '100vw'
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h1>Over mij</h1>
            <p className={styles.intro}>
                Op deze pagina geef ik een inkijk in wie ik ben buiten het klaslokaal. Je leest over mijn technische vaardigheden, sportieve passies, persoonlijke ontwikkeling en toekomstplannen als IT-professional.
            </p>

            <section className={styles.blocks}>
                <div className={styles.block}>
                    <h2>Vaardigheden</h2>
                    <p>
                        Ik volg momenteel het tweede jaar van de opleiding Informatica aan de Hogeschool Rotterdam.<br /><br />
                        In de afgelopen twee jaar heb ik kennis en ervaring opgedaan met diverse programmeertalen, tools en werkmethodes.
                        Hieronder een overzicht van de belangrijkste technologieën waar ik mee heb gewerkt.<br /><br />
                        <strong>Jaar 1:</strong><br />
                        -Python<br />
                        -SQLite<br />
                        -C#<br />
                        -Scrum<br />
                        -Trello<br />
                        -Django<br /><br />
                        <strong>Jaar 2:</strong><br />
                        -API's<br />
                        -TypeScript<br />
                        -PostgreSQL<br />
                        -Docker<br />
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>Sport</h2>
                    <p>
                        Ik heb een grote passie voor sport en beweging.<br />
                        Ik sport drie keer per week in de gym om aan mijn kracht en conditie te werken.<br /><br />
                        Daarnaast doe ik graag aan voetbal en basketbal, en ik sta altijd open om nieuwe sporten te ontdekken en onder de knie te krijgen.<br /><br />
                        Tijdens het sporten streef ik er altijd naar om het maximale uit mezelf te halen. Mentaliteit, discipline, doorzetten en blijven verbeteren zijn eigenschappen die ik vanuit het sporten ook probeer toe te passen in mijn dagelijks leven om zo altijd het maximale uit mezelf te halen.
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>Roadmap</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <span className={styles.dot}></span>
                            <div className={styles.timelineContent}>
                                <strong>2017 – 2021:</strong> Mavo afgerond op Montfort College, profiel Natuur & Techniek.
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.dot}></span>
                            <div className={styles.timelineContent}>
                                <strong>2020 – heden:</strong> Werk bij Albert Heijn (parttime). Hier heb ik werkdiscipline, klantgerichtheid en verantwoordelijkheid ontwikkeld.
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.dot}></span>
                            <div className={styles.timelineContent}>
                                <strong>2021 – 2023:</strong> HAVO afgerond op Montfort College, profiel Natuur & Gezondheid.
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.dot}></span>
                            <div className={styles.timelineContent}>
                                <strong>2023 – 2027:</strong> Bachelor Informatica aan Hogeschool Rotterdam. Tot nu toe gewerkt met Python, SQLite, C#, Docker, TypeScript en PostgreSQL.
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.dot}></span>
                            <div className={styles.timelineContent}>
                                <strong>2025 – 2026:</strong> Stage bij een IT-bedrijf (in de planning). Focus op Cybersecurity en Data Analyse.
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.dot}></span>
                            <div className={styles.timelineContent}>
                                <strong>Toekomst:</strong> Afstuderen, misschien een minor AI of Cybersecurity, en daarna een baan als Software Developer of DevOps Engineer.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.block}>
                    <h2>Overig</h2>
                    <p>
                        Mijn naam is Hicham Tahiri en ik ben 19 jaar oud. Sinds jonge leeftijd heb ik een sterke interesse in technologie en innovatie.<br />
                        Buiten mijn studie besteed ik graag tijd aan sport en persoonlijke programmeerprojecten.<br /><br />
                        Deze projecten variëren van serieuze toepassingen tot experimenten waarmee ik mijn vaardigheden en kennis verder ontwikkel.<br />
                        Op de lange termijn wil ik bijdragen aan innovatieve softwareoplossingen die maatschappelijke impact maken.<br />
                    </p>
                </div>
            </section>
        </motion.div>
    );
}

export default Over;
