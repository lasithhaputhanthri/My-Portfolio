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

            // Add random horizontal offset for more natural smoke variability
            const randomX = (Math.random() - 0.5) * 10;
            smoke.style.left = `${e.clientX + randomX}px`;

            document.body.appendChild(smoke);

            // Clean up after animation finishes (1s matches CSS animation)
            setTimeout(() => {
                smoke.remove();
            }, 1000);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return null; // The component itself renders nothing, only manages DOM nodes
};

export default CustomCursor;
