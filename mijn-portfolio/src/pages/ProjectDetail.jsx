import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import projects from '../data/projects';
import styles from './ProjectDetail.module.css';

function ProjectDetail() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [otherProjects, setOtherProjects] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const found = projects.find(p => p.slug === slug);
        setProject(found);
        setCurrentImageIndex(0);

        const others = projects
            .filter(p => p.slug !== slug)
            .slice(0, 3);
        setOtherProjects(others);
    }, [slug]);

    const handleNextImage = () => {
        if (project && project.gallery.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
        }
    };

    const handlePrevImage = () => {
        if (project && project.gallery.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
        }
    };

    if (!project) {
        return <div className={styles.container}><p>Project niet gevonden.</p></div>;
    }

    return (
        <div className={styles.container}>
            <Link to="/projecten" className={styles.backLink}>← Terug naar projecten</Link>
            <h1>{project.title}</h1>
            <span className={styles.tag}>{project.tag}</span>

            {/* GALLERY */}
            <div className={styles.gallery}>
                <div className={styles.mainImageWrapper}>
                    <img
                        src={project.gallery[currentImageIndex]}
                        alt={`${project.title} afbeelding ${currentImageIndex + 1}`}
                    />

                    {project.gallery.length > 1 && (
                        <div className={styles.galleryControls}>
                            <button onClick={handlePrevImage}>←</button>
                            <span>{currentImageIndex + 1} / {project.gallery.length}</span>
                            <button onClick={handleNextImage}>→</button>
                        </div>
                    )}
                </div>

                {project.gallery.length > 1 && (
                    <div className={styles.thumbnailRow}>
                        {project.gallery.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Thumb ${i + 1}`}
                                className={i === currentImageIndex ? styles.activeThumb : ""}
                                onClick={() => setCurrentImageIndex(i)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* INFO */}
            <div className={styles.info}>
                <h2>Beschrijving</h2>
                <p>{project.description}</p>

                {project.techstack && (
                    <>
                        <h2>Tech stack</h2>
                        <p>{project.techstack}</p>
                    </>
                )}
            </div>

            {/* ANDERE PROJECTEN */}
            {otherProjects.length > 0 && (
                <div className={styles.otherProjects}>
                    <h2>Andere projecten</h2>
                    <div className={styles.projectGrid}>
                        {otherProjects.map((proj, index) => (
                            <Link key={index} to={`/projecten/${proj.slug}`} className={styles.projectCard}>
                                <div className={styles.thumbnail}>
                                    <img src={proj.image} alt={proj.title} />
                                </div>
                                <h3>{proj.title}</h3>
                                <p>{proj.description.length > 100 ? proj.description.slice(0, 100) + '...' : proj.description}</p>
                                <span className={styles.viewProject}>Bekijk project →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
