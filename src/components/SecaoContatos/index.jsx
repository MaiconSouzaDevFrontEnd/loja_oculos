import styles from './SecaoContatos.module.css';

export default function SecaoContatos() {
	return (
		<section id="contatos" className={styles.secaoContatos ?? ''}>
			<h2>Contatos</h2>
			<p>Informações de contato aqui.</p>
		</section>
	);
}
