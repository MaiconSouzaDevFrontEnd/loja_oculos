import styles from './SecaoSobre.module.css';
import Image from 'next/image';
import loja from '@/publico/loja.png';
import atendimento from '@/publico/atendimento.png';

export default function SecaoSobre() {
  return (
    <section id="sobre" className={styles.secaoSobre}>
      <h2>QUEM SOMOS NÓS?</h2>
      <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
      <div className={styles.containerSobre}>
          <article>
            <Image src={loja} alt='Mostroario de uma farmácia onde uma farmaceutica retira uma caixa de medicamentos' className={styles.img} />
          </article>
          <div>
            <h3>Nossa filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
           <div>
            <h3>Atendimento flexível</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <article>
            <Image src={atendimento} alt='atendimento na farmácia' className={styles.img} />
          </article>
         
      </div>
    </section>
  );
}