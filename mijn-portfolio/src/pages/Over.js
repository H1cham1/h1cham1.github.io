import styles from './Over.module.css';
import { motion } from 'framer-motion';

function Over() {
    return (
        <motion.div
            className={styles.over}
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100vw', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >

            <h1>Over mij</h1>
            <p className={styles.intro}>
                Hier is te zien wat ik allemaal doe in mijn dagelijks leven. Denk aan hobbies,
            </p>

            <section className={styles.blocks}>
                <div className={styles.block}>
                    <h2>Vaardigheden</h2>
                    <p>
                        Ik volg momenteel het tweede jaar van de opleiding Informatica aan de Hogeschool Rotterdam.<br /><br />

                        In de afgelopen twee jaar heb ik kennis en ervaring opgedaan met diverse programmeertalen, tools en werkmethodes.
                        Hieronder een overzicht van de belangrijkste technologieën waar ik mee heb gewerkt.<br /><br />
                        Jaar 1:<br />
                        -Python<br />
                        -SQLite<br />
                        -C#<br />
                        -Scrum<br />
                        -Trello<br />
                        -Django<br /><br />

                        Jaar 2:<br />
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
                    <p>Ik ben gek op nieuwe technologie, toetsenborden, gadgets en alles met RGB-lampjes.</p>
                </div>

                <div className={styles.block}>
                    <h2>Games</h2>
                    <p>Ik game graag in m’n vrije tijd. Denk aan FIFA, Valorant of een potje strategy games.</p>
                </div>
            </section>
        </motion.div>
    );
}

export default Over;
