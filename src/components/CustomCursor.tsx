import { useEffect } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Create smoke particle
            const smoke = document.createElement("div");
            smoke.classList.add(styles.smoke);

            // Position at mouse coordinates
            smoke.style.left = `${e.clientX}px`;
            smoke.style.top = `${e.clientY}px`;

            // Random physics values
            const tx = (Math.random() - 0.5) * 100; // Random horizontal drift (-50px to 50px)
            const tr = Math.random() * 360; // Random rotation (0 to 360deg)

            // Set CSS variables for the animation
            smoke.style.setProperty('--tx', `${tx}px`);
            smoke.style.setProperty('--tr', `${tr}deg`);

            document.body.appendChild(smoke);

            // Clean up after animation finishes
            setTimeout(() => {
                smoke.remove();
            }, 1000);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return null;
};

export default CustomCursor;
