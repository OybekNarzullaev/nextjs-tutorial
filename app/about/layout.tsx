import React from "react";
import styles from "./styles.module.css";
export default function AboutNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
