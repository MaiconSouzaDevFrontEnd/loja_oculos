import styles from './Rodape.module.css';

export default function Rodape() {
	return (
		<footer className={styles.rodape ?? ''}>
			<p>© {new Date().getFullYear()} Loja de Óculos - Todos os direitos reservados.</p>
		</footer>
	);
}
