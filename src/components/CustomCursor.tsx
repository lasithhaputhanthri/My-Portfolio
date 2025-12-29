import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Direct update for the dot (instant follow)
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }

            // Update state for the main cursor (will lag slightly via CSS or RAF if implemented)
            // For now, let's keep it simple CSS transition or simple state update
            // State update might be too slow/jagged for high refresh, using ref manipulation is better
            if (cursorRef.current) {
                // Add a small delay effect via CSS transition or requestAnimationFrame for smoother feel
                // For this implementation, we'll direct update but the CSS has 'transition' property which might help
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={styles.cursorMain} />
            <div ref={dotRef} className={styles.cursorDot} />
        </>
    );
};

export default CustomCursor;
