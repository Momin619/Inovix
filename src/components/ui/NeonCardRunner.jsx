import styles from "./NeonCardRunner.module.css";

export default function NeonCardRunner({ children }) {
  return (
    <div className={styles.cardWrapper}>
      {/* Animated border */}
      <div className={styles.border}></div>

      {/* Content */}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
