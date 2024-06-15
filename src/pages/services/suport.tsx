//Recursos 
import Context from "@/components/Context/context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Head from 'next/head';
//Components 
import Menu from '@/components/Menu/menu';
import MenuDropdown from '@/components/Menu/dropmenu';
import LogedDropDown from '@/components/Loged/dropmenu';
import Buttons from '@/components/Menu/buttons';
import Cookies from '@/components/Features/cookies';
import Search from '@/components/Menu/search';
import OndeEstaMeuPedido from "@/components/Help/OndeEstaMeuPedido";
import DevolucoesEReembolsos from '@/components/Help/DevoluçõesEReembolsos';
import EnviosEEntregas from '@/components/Help/EnviosEEntregas';
import Pagamentos from "@/components/Help/Pagamentos";

//Imagens
import Loading from '@/img/Features/loading....gif';

export default function Suport () {
  const [Help, setHelp] = useState(
    <OndeEstaMeuPedido />
  )
     //If logged account
  let [MenuDD, setMenuDD] = useState(<Image width={100} src={Loading} alt='Loading...'/>)
  let [Button, setButton] = useState(<Image width={100} src={Loading} alt='Loading...'/>)
if (process.browser) {
 const { header }: any = useContext(Context)
  useEffect(() => {
    fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(resp => !resp.erro ? ( setMenuDD(<LogedDropDown/ >), setButton(<></>)):(setMenuDD(<MenuDropdown />), setButton(<Buttons />)))
  }, [])
}
    return (
        <>
        <Head>
      <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
      <title>ShoesShooting</title>
      </Head>
      <Cookies />
      <div className='d-flex justify-content-between '>
      {MenuDD}
      <Menu 
      colortitle="text-light"
      />
      {Button}
      </div>
      <Search />
      <div>
        <h3 className="text-danger m-5 p-5">Pesquise na nossa biblioteca de ajuda</h3>
        <input type="text" 
        placeholder="Em que podemos ajudar? Dê uma olhada em alguma de nossas dicas ou utilize nosso número de contato pra conversar com algum de nossos atendentes..." 
        className="text-light p-1 d-block mx-auto bg-dark border-1 outline-0 border-bottom border-danger w-75" />
      </div>
      <div className="m-3 p-3">
        <h4 className="text-danger">Todos os tópicos de ajuda</h4>
        <div className="d-lg-flex justify-content-between">
        <ul className="d-lg-flex flex-column" >
            <a onClick={() => setHelp(<OndeEstaMeuPedido />)} className="link-offset-2 helpLink link-underline link-underline-opacity-0"><li className="text-center border border-1 border-danger w-75 text-light m-5">Onde está meu pedido?</li></a>
            <a onClick={() => setHelp(<EnviosEEntregas />)} className="link-offset-2 helpLink link-underline link-underline-opacity-0"><li className="text-center border border-1 border-danger w-75 text-light m-5">Envios e entregas</li></a>
            <a onClick={() => setHelp(<DevolucoesEReembolsos />)} className="link-offset-2 helpLink link-underline link-underline-opacity-0"><li className="text-center border border-1 border-danger w-75 text-light m-5">Devoluções e Reembolsos</li></a>
            <a onClick={() => setHelp(<Pagamentos />)} className="link-offset-2 helpLink link-underline link-underline-opacity-0"><li className="text-center border border-1 border-danger w-75 text-light m-5">Pagamentos</li></a>
        </ul>
      {Help}
      </div>
      </div>
      <div className="d-block text-center">
      <h2 className="text-danger">Contato com o suporte: </h2>
      <p className="text-center text-light">+00 (00)-0000-0000</p>
      </div>
        </>
    )
}