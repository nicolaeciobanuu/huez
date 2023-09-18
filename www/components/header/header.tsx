"use client";
import styles from "./header.module.scss";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export function Header() {
  return (
    <nav className={styles.navbar}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Huez</Link>
        </li>
        <li className={styles.item}>
          <Link href="/docs">Documentation</Link>
        </li>
        <li className={styles.item}>
          <a
            title="GitHub"
            href="https://github.com/ciobanunicolae/huez"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub"
          >
            <GitHubLogoIcon />
          </a>
        </li>
      </ol>
    </nav>
  );
}
