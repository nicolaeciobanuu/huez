import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.container}>
      <a
        target="_blank"
        rel="nofollow"
        href="https://github.com/ciobanunicolae/huez"
      >
        GitHub
      </a>
      <p>Copyright © 2023 Huez</p>
      <div>
        <span>Made by </span>
        <a target="_blank" rel="nofollow" href="https://ciobanunicolae.com">
          ciobanunicolae
        </a>
      </div>
    </div>
  );
}
