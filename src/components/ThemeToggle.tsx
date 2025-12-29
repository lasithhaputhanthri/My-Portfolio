import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        // Check if View Transitions API is supported
        if (!document.startViewTransition) {
            setTheme(theme === "light" ? "dark" : "light");
            return;
        }

        const transition = document.startViewTransition(() => {
            setTheme(theme === "light" ? "dark" : "light");
        });

        transition.ready.then(() => {
            // Get the center of the viewport
            const x = window.innerWidth / 2;
            const y = window.innerHeight / 2;

            // Calculate distance to the furthest corner
            const right = window.innerWidth - x;
            const bottom = window.innerHeight - y;
            const maxRadius = Math.hypot(
                Math.max(x, right),
                Math.max(y, bottom)
            );

            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return (
        <button
            className={styles.toggleButton}
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;
