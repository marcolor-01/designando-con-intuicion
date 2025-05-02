import Navbar from '../components/NavbarAnimated';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diseñando con Intuición</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Diseñando con Intuición</h1>
        <Image
          src="/altamira-futuro.png"
          alt="Altamira meets AI"
          width={800}
          height={400}
        />
        <p className={styles.description}>
          Bienvenido a una nueva era del aprendizaje, del contenido y de la expansión humana.
          <br />
          Lo humano a veces también está fuera del humano.
        </p>
        <a href="#" className={styles.button}>Soñemos juntos</a>
              <div style={{ marginTop: "2rem" }}>
          <Link href="/galeria">Ir a la galería</Link>
        </div>
      </main>
          <Footer />
    </div>
  );
}
