//Recursos 
import Context from "@/components/Context/context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Head from 'next/head';
//Components 
import MenuDropdown from '@/components/Menu/dropmenu';
import LogedDropDown from '@/components/Loged/dropmenu';
import Buttons from '@/components/Menu/buttons';
import Cookies from '@/components/Features/cookies';
import MenuCSS from '@/styles/menu.module.css'
import Link from 'next/link'
import ShoeIcon from '@/img/Menu/Hopstarter-Van-Slip-Ons-Vans-Checkerboard-Dirty-White.256.png'

//Imagens
import Loading from '@/img/Features/loading....gif';
import HomemdeCamisa from '@/img/Gallery/pexels-ketut-subiyanto-4964767.jpg'

export default function Suport () {
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
      <div className="d-lg-flex justify-content-around">
        
      <div className="w-100 text-center d-flex flex-column" >
        <Link href='/'><Image width={100} loading="eager" priority={true} className={ MenuCSS.icon } src={ShoeIcon} alt='iconMenu'/></Link>
        <h1 className="text-light">Envie seu currículo pra análise</h1>
        <input type="file" className="m-5 bg-danger text-light p-1 rounded-2 w-50 mx-auto" />
        <button className="m-5 btn btn-danger w-25 mx-auto">Enviar</button>
        </div>

      <div className="w-100 h-100">
    <Image alt="homem" className="img-fluid" src={HomemdeCamisa} style={{ width: '100vw', height: '100vh' }} />
    </div>
      </div>
      </>)
}