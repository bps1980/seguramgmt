import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
