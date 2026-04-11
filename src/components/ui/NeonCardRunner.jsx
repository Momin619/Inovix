import { useEffect, useRef } from "react";
import styles from "./NeonCardRunner.module.css";

export default function NeonRunnerCard({ children }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // ✅ Set it once, on the path's own style only
    function updateDash() {
      const L = path.getTotalLength();
      const stripLen =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--runner-len",
          ),
        ) || 50;
      const gap = stripLen * 2;
      path.style.strokeDasharray = `${stripLen} ${gap}`;
      path.style.strokeDashoffset = "0";
      // ✅ Remove the documentElement.style.setProperty("--perimeter", L) line
      //    It's not used by the CSS animation anyway — the animation uses --speed
    }

    updateDash();
    window.addEventListener("resize", updateDash);
    return () => window.removeEventListener("resize", updateDash);
  }, []);
  return (
    <div className={styles.cardWrapper}>
      {/* Neon Runner Layer */}
      <div className={styles.runnerWrapper}>
        <div className={styles.runner}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              ref={pathRef}
              className={styles.borderPath}
              d="M 10,0 
                 H 90 Q 100,0 100,10 
                 V 90 Q 100,100 90,100 
                 H 10 Q 0,100 0,90 
                 V 10 Q 0,0 10,0 Z"
            />
          </svg>
        </div>
      </div>

      {/* Card Content (your step content goes here) */}
      <div className="relative bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 sm:p-8 z-10">
        {children}
      </div>
    </div>
  );
}
