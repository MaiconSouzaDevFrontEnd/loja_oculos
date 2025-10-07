import Head from 'next/head';
import estilos from "@/styles/Home.module.css";
import Topo from '@/components/Topo';
import SecaoCapa from '@/components/SecaoCapa';
import SecaoProdutos from '@/components/SecaoProdutos';
import SecaoSobre from '@/components/SecaoSobre';
import SecaoContatos from'@/components/SecaoContatos';
import Rodape from '@/components/Rodape';

export default function Home(){
    return(
        <>
            <Head>
                <title>Loja de Oculos</title>
                <meta name="description" content="Loja de Oculos, Aqui voce encontra o melhor Oculos" />
                <meta name="viewport" content="width=device-width, inicial-scale=1" />
            </Head>
            <main className="estilos.body"> 
                 <Topo />
                {/*<SecaoCapa />
                <SecaoProdutos />*/
                <SecaoSobre />
                /*<SecaoContatos />
                <Rodape /> */}
            </main>
        </>
    );
}