import styles from "./header.module.css";
export default function Header({ text }) {
  return (
    <div className={styles.headerStyle}>
      <h1>{text}</h1>
    </div>
  );
}
