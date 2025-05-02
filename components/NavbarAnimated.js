import Navbar from '../components/NavbarAnimated';
import { useState } from 'react';
import styles from './NavbarAnimated.module.css';

export default function NavbarAnimated() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Diseñando con Intuición</div>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="/galeria">Galería</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
