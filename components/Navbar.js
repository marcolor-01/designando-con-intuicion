import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Diseñando con Intuición</div>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="/galeria">Galería</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
