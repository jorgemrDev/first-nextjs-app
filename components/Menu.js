import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <ul className={styles.ulstyled}>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/movies">
          <a>Movies</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contacto</a>
        </Link>
      </li>
    </ul>
  );
}
