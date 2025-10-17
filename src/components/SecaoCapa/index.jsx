import styles from './SecaoCapa.module.css';     

export default function Capa(){
    return(
        <section className={styles.secaoCapa}>
            <div className={styles.container}>
                <div className={styles.textoCapa}>
                    <p>Preço baixo em</p>
                    <h1>Óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    );
}
        