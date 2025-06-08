import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import styles from './Projecten.module.css';
import { motion } from 'framer-motion';

function Projecten() {
    const [filter, setFilter] = useState("Alles");

    // Tags uit de data ophalen
    const tags = ["Alles", ...new Set(projects.map(p => p.tag))];

    // Filtering toepassen
    const filteredProjects =
        filter === "Alles"
            ? projects
            : projects.filter((p) => p.tag === filter);

    return (
        <motion.div
            className={styles.projectsPage}
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100vw', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h1>Mijn projecten</h1>
            <p>Klik op een categorie om te filteren:</p>

            <div className={styles.filterButtons}>
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className={filter === tag ? styles.activeFilter : ""}
                        onClick={() => setFilter(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className={styles.projectGrid}>
                {filteredProjects.map((project, index) => (
                    <Link to={`/projecten/${project.slug}`} className={styles.projectCard} key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className={styles.projectInfo}>
                            <small>{project.tag}</small>
                            <h2>{project.title}</h2>
                            <p>{project.description.length > 100 ? project.description.slice(0, 100) + "..." : project.description}</p>
                            <span className={styles.viewProject}>Bekijk project →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}

export default Projecten;
