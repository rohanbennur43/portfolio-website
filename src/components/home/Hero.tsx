import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.name}>Your Name</h1>
          <p className={styles.description}>
            A software engineer focused on building clean, performant web
            applications. I care about thoughtful design, accessible interfaces,
            and writing code that stands the test of time. Currently exploring
            the intersection of systems thinking and modern frontend
            architecture.
          </p>
          <div className={styles.actions}>
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <Button
              href="https://github.com/yourusername"
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile-placeholder.svg"
            alt="Profile photo of Your Name"
            width={320}
            height={320}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
