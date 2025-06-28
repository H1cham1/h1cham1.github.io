import styles from './ScrollIndicator.module.css';

function ScrollIndicator({ count = 1, active = 0 }) {
    return (
        <div className={styles.indicator}>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className={`${styles.dot} ${i === active ? styles.active : ''}`}
                />
            ))}
        </div>
    );
}

export default ScrollIndicator;
