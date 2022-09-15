import styles from "./Header.module.css";

export default function HeaderPage({ text }) {
  return (
    <div className={styles.header}>
      <h1>{text}</h1>;
    </div>
  );
}
