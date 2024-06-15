//Recursos React - Next
import Head from 'next/head';
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

//Componentes
import Buttons from '@/components/Menu/buttons';
import Context from "@/components/Context/context";
import Cookies from '@/components/Features/cookies';
import LogedDropDown from '@/components/Loged/dropmenu';
import MenuDropdown from '@/components/Menu/dropmenu';
import Menu from '@/components/Menu/menu';
import Search from '@/components/Menu/search';
//Imagens
import Loading from '@/img/Features/loading....gif';
import BoynoHaveShoe from '@/img/Img-Not-Found/No-Have-Shoes.png';

//Animate
import 'animate.css';

export default function Reembolso (){
    const {header} : any = useContext(Context)
    const [Display, setDisplay] = useState<String>('d-none')
    const [ShoeReembolso ,setShoeReembolso] = useState<String>('')
    const [FormReembolso, setFormReembolso] = useState<String>('d-none')
    const [color, setcolor] = useState('text-success')
    const [idDaCompra, setidDaCompra] = useState()
    const [AvisodeReembolso, setAvisodeReembolso] = useState<any>()
    async function Reload () {
        useEffect(() => {
            async function fetchData() {
                const response = await fetch('/api/showData');
                const data = await response.json();
                if (data.message === "This JWT don't exist!") {
                    location.replace("/");
                }
            }
            fetchData();
        }, []);
    }
    
    //If logged account
 let [MenuDD, setMenuDD] = useState(<Image width={100} src={Loading} alt='Loading...'/>)
 let [Button, setButton] = useState(<Image width={100} src={Loading} alt='Loading...'/>)
 const [UserName, setUserName] = useState<String>('')
if (process.browser) {
const { header }: any = useContext(Context)
 useEffect(() => {
   fetch('/api/showData', header)
   .then(resp => resp.json())
   .then(resp => {
    setUserName(resp.data[0].users);
    
    !resp.erro ? ( setMenuDD(<LogedDropDown/ >), setButton(<></>)):(setMenuDD(<MenuDropdown />), setButton(<Buttons />))
})
 }, [])
}
Reload()
const [ListCompras, setListCompras] = useState<any>()
const [HaveItens, setHaveItens] = useState<any>(
  <div className="text-center">
    <Image alt="Loading..." width={100} src={Loading} />
  </div>
)
useEffect(() => {
    const getCompras = () => {
      fetch('/api/showData')
      .then(resp => resp.json())
      .then(user => {
        fetch('/api/getCompras')
        .then(resp => resp.json())
        .then(resp => {
          const list = resp.filter((e: any) => {
            return e.iduser == user.data[0].id
          })
          setListCompras(list)
        }
        )
      })
    }
    getCompras()
  }, [])
useEffect(() => {
ListCompras == 0 ? 
setHaveItens(
<div className="text-center">
<Image alt="no Have" width={500} height={500} className="d-none d-lg-block w-25 h-100" src={BoynoHaveShoe} />
<Image alt="no Have" width={500} height={500} className="d-lg-none w-50 h-100" src={BoynoHaveShoe} />
</div>) : null
})

const ShowItens = () => {
    setFormReembolso('d-none')
    setDisplay('d-lg-flex animate__animated animate__zoomIn')
}


const SendReembolso = (e: any) => {
    e.preventDefault()
    axios.post('/api/statusCompra', {
        data: 'Reembolsado',
        compra: idDaCompra
    }, header)
// Define o aviso de reembolso
setAvisodeReembolso(
    <p className='fs-3 fw-bolder text text-break text-danger'>Obrigado, iremos lhe contatar sobre o seu reembolso...</p>
);

// Aguarda 5 segundos antes de limpar o estado
setTimeout(() => {
    setAvisodeReembolso('');
}, 3000);

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
      <div className='m-5 p-5 '>
        <h1 className='animate__animated animate__backInLeft text-light'>Olá, {UserName}</h1>
        <h2 className='animate__delay-1s	1s animate__animated animate__backInLeft mt-5 mb-5 pt-5 text-light'>Como podemos ajudar?</h2>
        <div className='d-flex align-items-center'>
        <h2 className="animate__delay-2s	2s animate__animated animate__backInLeft text-light mt-5 me-5">Compras</h2>
        <button onClick={ShowItens} className='animate__delay-3s	3s animate__animated animate__fadeIn h-25 btn btn-danger bg-gradient mt-5'>Ver compras</button>      
        </div>
        {
        ListCompras == 0 ? 
        HaveItens
        :
        ListCompras?.map((e: any) => (
          <div className={`List ${Display} mt-5 pt-5`}>
          <Image alt="shoeImg" width={300} height={300} src={e.img} />
          <div className="bg-dark border border-danger">
          <h3 style={{marginRight:'100px', marginLeft: '25px'}} className="text-danger">#{e.id}</h3>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className="text-light">comprador: {UserName}</p>
          <h3 style={{marginRight:'100px', marginLeft: '25px'}} className="text-light">{e.namehsoe}</h3>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className="text-danger">compra de nº: {e.id}</p>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className="text-light">números de tênis comprados: {e.quantidade}</p>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className="text-light">tamanho: {e.tamanho}</p>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className="text-light">valor: R${e.price}</p>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className="text-light">endereço: {e.end}</p>
          <p style={{marginRight:'100px', marginLeft: '25px'}} className={`status fw-bolder ${e.status == 'Reembolsado' ? 'text-danger' : 'text-success'}`}>STATUS: {e.status}</p>
          <a className="text-light link-offset-2 link-underline link-underline-opacity-0"><button onClick={() => {
            setFormReembolso('d-block')
            setDisplay('d-none')
            setShoeReembolso(e.namehsoe)
            setidDaCompra(e.id)
            }} className="btn btn-danger bg-gradient m-3">Reembolso</button></a>
          </div>
          </div>   
        ))
      }
      <form onSubmit={SendReembolso} className={`${FormReembolso} mt-5`}>
        <h1 className='text-center text-light' >Motivo do reemboolso ?</h1>
        <input type="text" placeholder='Insira aqui o motivo de reembolso...' className='w-50 text-center d-block mx-auto mb-5 mt-5 bg-transparent outline-0 border-0 border-bottom border-danger text-light' />
        <h1 className='text-center text-light' >Seu número para contato...</h1>
        <input type="text" placeholder='Insira aqui seu número para contato...' className='w-50 text-center d-block mx-auto mb-5 mt-5 bg-transparent outline-0 border-0 border-bottom border-danger text-light' />
        {ListCompras?.filter((e: any) => e.namehsoe === ShoeReembolso).map((item: any, index: number) => (
        <div className='text-center align-items-center justify-content-center d-lg-flex'>
        <Image width={200} height={200} alt='imgShoe' src={item.img} /> 
        <div className='border border-danger'>
        <h3 className="m-3 text-danger">#{item.id}</h3>
          <p className="m-3 text-light">comprador: {UserName}</p>
          <h3 className="m-3 text-light">{item.namehsoe}</h3>
          <p className="m-3 text-danger">compra de nº: {item.id}</p>
          <p className="m-3 text-light">números de tênis comprados: {item.quantidade}</p>
          <p className="m-3 text-light">tamanho: {item.tamanho}</p>
          <p className="m-3 text-light">valor: R${item.price}</p>
          <p className="m-3 text-light">endereço: {item.end}</p>
          <p className={`status m-3 fw-bolder ${item.status == 'Reembolsado' ? 'text-danger' : 'text-success'}`}>STATUS: {item.status}</p>
          <button className='btn btn-danger bg-gradient m-2'>Reembolsar</button>
        </div>
        </div>
    ))}
      </form>
      {AvisodeReembolso}
      </div>
</>
    )
}