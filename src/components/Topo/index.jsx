import Image from 'next/image';
import Logo from '@/publico/logo.png';

// Importando o CSS do componente   
import styles from './Topo.module.css';     

export default function Topo(){
    return(
        <header className={styles.topo}>
            <Image src={Logo} alt="logomarca" className={styles.logomarca}/>
            <nav className={styles.navmenu}>
                <a href="#produtos">Produtos</a>
                <a href="#sobre">Sobre</a>
                <a href="#contatos">Contatos</a>
            </nav>
        </header>    
        );}
        