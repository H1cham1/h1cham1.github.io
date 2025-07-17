import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./RollingGallery.css"; // Vergeet niet dit CSS-bestand te importeren

const RollingGallery = ({ projects = [], speed = 50, pauseOnHover = true }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const isPaused = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const animate = () => {
            if (!isPaused.current) {
                scrollAmount += 1;
                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                container.scrollLeft = scrollAmount;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    const handleMouseEnter = () => {
        if (pauseOnHover) isPaused.current = true;
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) isPaused.current = false;
    };

    return (
        <div
            className="marquee-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="marquee-content" ref={containerRef}>
                {[...projects, ...projects].map((project, i) => (
                    <Link to={`/projecten/${project.slug}`} key={i} className="project-card">
                        <small className="project-tag">{project.tag}</small>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">
                            {project.description.length > 100
                                ? project.description.slice(0, 97) + "..."
                                : project.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RollingGallery;
