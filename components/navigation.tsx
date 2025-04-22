import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="hidden md:flex md:space-x-4 md:flex-row">
        <li>
          <Link href="/" className={`${styles.link} inline md:hidden`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={styles.link}>
            Repositories
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/grid" className={styles.link}>
            Grid
          </Link>
        </li>
        <li>
          <Link href="/csvpreview" className={styles.link}>
            CSV Preview
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export function NavigationMobile() {
  return (
    <nav className="font-mono text-right mt-3">
      <ul>
        <li>
          <Link href="/" className={`${styles.link} inline md:hidden`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={styles.link}>
            Repositories
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
