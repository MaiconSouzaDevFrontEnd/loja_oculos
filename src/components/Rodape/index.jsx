import styles from './Rodape.module.css';

export default function Rodape() {
	return (
		<footer className={styles.rodape}>
			<div className={styles.container}>
				<h3 className={styles.titulo}>Fale conosco</h3>
				<p className={styles.paragrafo_rodape}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
				
				<section className={styles.subContainer}>
					
				</section>
				
				<p>© {new Date().getFullYear()} Loja de Óculos - Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}
