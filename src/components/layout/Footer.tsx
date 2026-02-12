import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/rohanbennur43"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rohan-bennur"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
