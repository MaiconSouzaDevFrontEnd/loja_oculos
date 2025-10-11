import styles from './SecaoSobre.module.css';

export default function SecaoSobre() {
  return (
    <section id="sobre" className={styles.secaoSobre ?? ''}>
      <h2>Sobre</h2>
      <p>Informações sobre a loja.</p>
    </section>
  );
}