//Recursos React - Next
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
//Componentes
import Search from '@/components/Menu/search';
import Carousel from '@/components/Carousel/carousel';
import Dropdown from '@/components/Menu/dropdown';
import Menu from '@/components/Menu/menu';
import MenuDropdown from '@/components/Menu/dropmenu';
import LogedDropDown from '@/components/Loged/dropmenu';
import Buttons from '@/components/Menu/buttons';
import Sponsors from '@/components/Body/Sponsors';
import Cookies from '@/components/Features/cookies';
import Models from  '@/components/Body/Models';
import MoreSales from '@/components/Body/moreSales';
import WantBeModel from '@/components/Body/WantBeModel';
import Footer from '@/components/Footer/Footer';
import Context from '@/components/Context/context';
import Gallery from '@/components/Body/Photos';
//Imagens
import Loading from '@/img/Features/loading....gif';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Alert
import Sobre from '@/components/Alerts/sobre'

export default function Home() {
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
    <main>
      <Sobre />
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
      <div id='content-background-white' className='d-none d-lg-flex bg-white content-bg-white' >
      <Dropdown />
      </div>
      <div className="d-flex justify-content-evenly">
      <Carousel />
      </div>
      <Gallery />
      <Models />
      <MoreSales />
      <WantBeModel />
      <Sponsors />
      <Footer />
    </main>
  )
}
