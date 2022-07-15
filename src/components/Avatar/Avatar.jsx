import styles from "./Avatar.module.css";

export function Avatar({ src, comment = false }) {
  return (
    <div className={styles}>
      <img
        className={comment ? styles.avatar2comment : styles.avatar}
        src={src}
      />
    </div>
  );
}
