import Context from "@/components/Context/context";
import Image from "next/image";
import Head from 'next/head'
import { useContext, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

// Components
import Menu from '@/components/Menu/menu';
import MenuDropdown from '@/components/Menu/dropmenu';
import LogedDropDown from '@/components/Loged/dropmenu';
import Buttons from '@/components/Menu/buttons';
import Cookies from '@/components/Features/cookies';

// Images
import Loading from '@/img/Features/loading....gif'
import BoyMarketCar from '@/img/Img-Not-Found/IA-image-marketCar.png'

//Animate
import 'animate.css';

export default function MarketCart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ComprasDados, setComprasDados] = useState<any>()
    const [Endereco, setEndereco] = useState<any>()
    const [ButtonDeleteAll , setButtonDeleteAll] = useState<any>(<Image width={100} src={Loading} alt='Loading...'/>)
    const [MarketCarItens, setMarketCarItens] = useState<any>()
    const { header }: any = useContext(Context)
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
Reload()
useEffect(() => {
    fetch('/api/showData')
    .then(resp => resp.json())
    .then(async user => {
        await fetch('/api/getMarketCar')
        .then(resp => resp.json())
        .then(itens => {
           const itensUser = itens.filter((e: any) => {
               return e.iduser == user.data[0].id
            })
            setMarketCarItens(itensUser)
        })
    })
}, [])
const handleDeleteItem = (nameshoeToDelete: any) => {
    let foundFirstItemToDelete = false; // Variável de controle

    // Filtra o array para excluir apenas o primeiro item com o nameshoe correspondente
    const updatedMarketCarItens = MarketCarItens.filter((item: any) => {
        if (item.nameshoe === nameshoeToDelete && !foundFirstItemToDelete) {
            foundFirstItemToDelete = true; // Atualiza a variável de controle
            return false; // Exclui o item encontrado
        }
        return true; // Mantém todos os outros itens
    });

    // Atualiza o estado com o novo array filtrado
    setMarketCarItens(updatedMarketCarItens);
    axios.post('/api/deleteMarketCar', {data: nameshoeToDelete}, header)
    MarketCarItens?.length != 0 ? null : setButtonDeleteAll('')
};

const SetLocal = (e: any) => {
    setEndereco(e.target.value);
    
}
const Buy = (e: any) => {
    e.preventDefault()
    const Number = /\d+(\.\d+)?/g;
    const url = /url=(.*)/;
    const nameShoe = e.target.childNodes[0].childNodes[1].childNodes[0].innerHTML
    const quantidade = e.target.childNodes[0].childNodes[1].childNodes[1].childNodes[2].value.match(Number)[0]
    const price = e.target.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML.match(Number)[0]
    const img = decodeURIComponent(e.target.childNodes[0].childNodes[0].childNodes[0].childNodes[0].src.match(url)[1])
    const tamanho = e.target.childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerHTML.match(Number)[0]
    console.log(tamanho);
    
    fetch('/api/showData')
    .then(resp => resp.json())
    .then(user => {
        const dados = {
            nameShoe: nameShoe,
            Quantidade: quantidade,
            preco: price,
            image: img,
            id: user.data[0].id,
            tamanho: tamanho
        }
        setComprasDados(dados)
        
    })
}
const Send = () => {
    const updatedMarketCarItens = MarketCarItens.filter((item: any)=> item.nameshoe !== ComprasDados.nameShoe);
    setMarketCarItens(updatedMarketCarItens);
    handleClose()
    axios.post('/api/compras', {
        ComprasDados,
        local: Endereco
    }, header)
    .then(resp => resp)
    
}
useEffect(() => {
    MarketCarItens?.length > 0 ? 
    setButtonDeleteAll(
        <>
        <button onClick={() => {
            setMarketCarItens([]);
    
             fetch('/api/showData', header)
            .then(resp => resp.json())
            .then(user => {
                const idUser = {
                    data: user.data[0].id
                }
                axios.post('/api/deleteAllMarketCar', {idUser}, header)
            })
    
        }} 
        className="mx-auto d-flex align-items-center m-5 btn btn-danger bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="animate__infinite	infinite animate__animated animate__wobble bi bi-trash2" viewBox="0 0 16 16">
        <path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
        </svg>
        <p className="p-1 m-0 text-center">Apagar tudo</p>
        </button>
        </>
    )  
    :
    setButtonDeleteAll('')
}, [MarketCarItens])


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
      {
        ButtonDeleteAll
      }
      <ul>
        {MarketCarItens?.length == 0 ? 
            <div className="position-relative d-flex justify-content-center align-items-center">
    <div className="text-center text-danger">
        <h1>Carrinho vazio</h1>
    </div>
    <div className="position-absolute end-0 top-100">
        <Image width={500} alt="marketboy" className="w-75 h-100 d-none d-lg-block" src={BoyMarketCar} />
        <Image width={500} alt="marketboy" className="w-100 h-25 d-lg-none" src={BoyMarketCar} /> 
    </div>
</div>
        : 
        MarketCarItens?.map((e: any) => (
            <form className="buy" onSubmit={Buy} >
            <li className="item m-3 d-flex flex-row align-items-top">
                <div className="d-flex flex-column">
                <div style={{width:'200px', position:'relative'}} className="text-center rounded-top bg-light">
                <Image width={200} height={200} className="p-3" alt="card" src={e.img} />
                </div>
                <div style={{width:'200px'}} className="rounded-bottom bg-dark bg-gradient">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-1 p-2 fw-semibold fs-5 text-light">R$ {e.price}</p>
                    <svg onClick={() => handleDeleteItem(e.nameshoe)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="m-3 bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                    </svg>
                </div>

                    <p className="m-3 text-light">Tamanho: {e.tamanho}</p>
                    <a className="m-2 text-danger" href={`/library/${e.nameshoe}`}>Ir pra página</a>
                </div>              
                </div>
                <div>
                    
                <h3 className="nameShoe m-5 text-light">{e.nameshoe}</h3>
                <div className="d-flex flex-column">
                    
                <button className="m-5 btn btn-danger bg-gradient" onClick={handleShow}>Comprar</button>

                    <Modal
                    className="bg-transparent bg-gradient"
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Insira o endereço de destino</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input className="w-100 border-0 border-bottom border-dark" placeholder="Insira colocando as siglas do País, Estado, coloque o nome inteiro da cidade, rua e número" onChange={SetLocal} required type="text" />
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn-secondary" onClick={handleClose}>
                            Fechar
                        </button>
                        <button onClick={Send} className="btn btn-danger">Enviar</button>
                        </Modal.Footer>
                    </Modal>
                                <label className="ms-5 pb-2 text-light" htmlFor="opcoes">Quantos?</label>
                                <select className='ms-5 w-25 rounded' id="opcoes" name="opcoes">
                                    <option value="opcao1" selected>1</option>
                                    {Array.from(Array(100).keys()).map((value, index) => (
                                        <option key={index+1} value={`opcao${value+2}`}>{value+2}</option>
                                    ))}
                                </select>
                                    </div>
                                </div>
                            </li>
                            </form>
                        ))}
                    </ul>
                        </>
                    )
                }