import React from "react";
import styles from "./style.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
