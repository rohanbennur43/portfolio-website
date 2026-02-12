import { HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padded?: boolean;
}

export default function Card({
  hoverable = false,
  padded = true,
  className = "",
  children,
  ...props
}: CardProps) {
  const classes = [
    styles.card,
    hoverable ? styles.hoverable : "",
    padded ? styles.padded : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
