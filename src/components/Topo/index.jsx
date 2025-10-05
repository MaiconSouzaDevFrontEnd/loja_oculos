import Image from 'next/Image';
import Logo from '../../public/logo.png';
export default function Topo(){
    return(
        <header>
            <Image src={Logo} alt="logomarca" />
            <nav>
                <a href="#produtos">Produtos</a>
                <a href="#sobre">Sobre</a>
                <a href="#contatos">Contatos</a>
            </nav>
        </header>    
        );}
        