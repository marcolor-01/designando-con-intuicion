
import Head from 'next/head';
import Link from 'next/link';

export default function Galeria() {
  return (
    <>
      <Head>
        <title>Galería - Diseñando con Intuición</title>
      </Head>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Galería de Proyectos</h1>
        <p>Explora las imágenes y conceptos que dan vida a nuestro diseño intuitivo.</p>
        <Link href="/">Volver al inicio</Link>
      </main>
    </>
  );
}
