"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  const email = "rohan.bennur@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.name}>Rohan Bennur</h1>

          <p className={styles.tagline}>
            Software Engineer focused on distributed systems, reliability,
            performance, computer networks, and modern AI systems.
          </p>

          <div className={styles.description}>
            <p>
              Currently at <strong>Viasat</strong>, working on applications
              that power large scale satellite networks and mission critical
              systems.
            </p>

            <p>
              Previously at <strong>Amagi Media Labs</strong> for 2.5 years,
              where I built backend systems in the streaming domain, including
              a distributed live stream recording platform, a Layer 4 media
              transport system, and dynamic ad insertion services that directly
              impacted revenue.
            </p>

            <p>
              Actively exploring modern AI models and inference engines, while
              deepening my understanding of distributed systems and network
              architecture.
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

            <Button
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rohan Bennur's LinkedIn profile"
            >
              LinkedIn
            </Button>

            <div className={styles.emailBox}>
              <span className={styles.emailText}>{email}</span>

              <button
                onClick={handleCopy}
                className={styles.copyButton}
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <span className={styles.check}>✓</span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                  </svg>
                )}
              </button>
            </div>
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
