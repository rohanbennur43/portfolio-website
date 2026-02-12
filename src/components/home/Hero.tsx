import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <div className={styles.content}>
<h1 className={styles.name}>Rohan Bennur</h1>

<p className={styles.tagline}>
  Software Engineer focused on distributed systems, reliability, performance, computer networks, and modern AI systems.</p>

<div className={styles.description}>
  <p>
    Currently at <strong>Viasat</strong>, working on applications that power large scale satellite networks and mission critical systems.
  </p>
  <p>
    Previously at <strong>Amagi Media Labs</strong> for 2.5 years, where I built backend systems in the streaming domain, including a distributed live stream recording platform, a Layer 4 media transport system, and dynamic ad insertion services that directly impacted revenue.
  </p>

    <p>
    Actively exploring modern AI models and inference engines, while deepening my understanding of distributed systems and network architecture.
  </p>
</div>

          <div className={styles.actions}>
            <Button href="/projects" size="lg">
              View Projects
            </Button>

            <Button
              href="https://github.com/rohanbennur43"
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rohan Bennur's GitHub profile"
            >
              GitHub
            </Button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/profile-placeholder.png"
            alt="Profile photo of Rohan Bennur"
            width={380}
            height={380}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
