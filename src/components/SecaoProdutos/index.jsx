import styles from './SecaoProdutos.module.css';
import Image from 'next/image';
import oculosGrau from '../../publico/oculos01.png';
import oculosTransition from '../../publico/oculos02.png';
import oculosSol from '../../publico/oculos03.png';
import oculosInfantil from '../../publico/oculos04.png';

export default function SecaoProdutos() {
	return (
		<section id="produtos" className={styles.secaoProdutos}>
			<div className={styles.container}>
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                
                <div className={styles.containerProdutos}>
                    <article className={styles.produto}>
                        <h3>Óculos de grau</h3>
                        <div>
                            <Image src={oculosGrau} alt="Óculos de grau" className={styles.img} />
                        </div>
                        <p>R$ 500,00</p>
                    </article>    

                    <article className={styles.produto}>
                        <h3>Óculos transition</h3>
                        <div>
                            <Image src={oculosTransition} alt="Óculos transition" className={styles.img} />
                        </div>
                        <p>R$ 750,00</p>
                    </article> 
                    
                    <article className={styles.produto}>
                        <h3>Óculos de sol</h3>
                        <div>
                            <Image src={oculosSol} alt="Óculos de sol" className={styles.img} />
                        </div>    
                        <p>R$ 700,00</p>
                    </article> 

                    <article className={styles.produto}>
                        <h3>Óculos infantil</h3>
                        <div>
                            <Image src={oculosInfantil} alt="Óculos infantil" className={styles.img} />
                        </div>
                        <p>R$ 500,00</p>
                    </article> 
                </div>

                <h4>Todos os nossos produtos incluem:</h4>
                <ul>
                    <li>Garantia de 1 ano.</li>
                    <li>Manutenção preventiva.</li>
                    <li>Descontos especiais na compra da segunda unidade.</li>
                    <li>Flexibilidade de pagamento.</li>
                </ul>
            </div>
		</section>
	);
}
