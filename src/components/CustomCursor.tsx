import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }

            if (cursorRef.current) {
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
