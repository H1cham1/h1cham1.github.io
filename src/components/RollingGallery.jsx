import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./RollingGallery.css";

const RollingGallery = ({ projects = [], speed = 1, pauseOnHover = true }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const isPaused = useRef(false);
    const manualScrollTimer = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const autoScroll = () => {
            if (!isPaused.current && container) {
                container.scrollLeft += speed;
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationRef.current = requestAnimationFrame(autoScroll);
        };

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationRef.current);
    }, [speed]);

    const handleManualScroll = () => {
        isPaused.current = true;
        clearTimeout(manualScrollTimer.current);
        manualScrollTimer.current = setTimeout(() => {
            isPaused.current = false;
        }, 2000); // 2 seconden pauze na handmatig scrollen
    };

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
            {/* Fade edges */}
            <div className="marquee-fade marquee-fade-left" />
            <div className="marquee-fade marquee-fade-right" />

            <div
                className="marquee-content"
                ref={containerRef}
                onScroll={handleManualScroll}
            >
                {[...projects, ...projects].map((project, i) => (
                    <Link
                        to={`/projecten/${project.slug}`}
                        key={i}
                        className="project-card"
                    >
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
