import { HTMLAttributes } from "react";
import styles from "./SectionContainer.module.css";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "main";
  background?: "white" | "off-white" | "light-gray";
  narrow?: boolean;
}

export default function SectionContainer({
  as: Tag = "section",
  background = "white",
  narrow = false,
  className = "",
  children,
  ...props
}: SectionContainerProps) {
  const classes = [
    styles.section,
    styles[background.replace("-", "")],
    narrow ? styles.narrow : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      <div className={styles.inner}>{children}</div>
    </Tag>
  );
}
