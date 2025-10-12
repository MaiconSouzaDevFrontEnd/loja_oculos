import Image from 'next/image';
import Logo from '@/publico/logo.png';
import Link from 'next/link';

// Importando o CSS do componente   
import styles from './Topo.module.css';     

export default function Topo(){
    return(
        <header className={styles.topo}>
            <Image src={Logo} alt="logomarca" className={styles.logoMarca} />
            <nav className={styles.navmenu}>
                <Link href="#produtos">Produtos</Link>
                <Link href="#sobre">Sobre</Link>
                <Link href="#contatos">Contatos</Link>
            </nav>
        </header>    
        );
    }
        