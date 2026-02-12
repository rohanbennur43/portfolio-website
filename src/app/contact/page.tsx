import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Contact — Your Name",
  description:
    "Get in touch to discuss projects, opportunities, or collaboration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SectionContainer background="off-white" narrow>
      <div className={styles.header}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a question or want to work together? Send me a message and I'll
          get back to you.
        </p>
      </div>
      <Card>
        <ContactForm />
      </Card>
    </SectionContainer>
  );
}
