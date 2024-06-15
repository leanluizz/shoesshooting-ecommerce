import 'react-bootstrap';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { storage } from '@/pages/api/uploadImages';
import Image from 'next/image';
import Head from 'next/head';
import Cookies from '@/components/Features/cookies';
import Loading from '@/img/Features/loading....gif'
import Context from '@/components/Context/context';
import LogedDropDown from '@/components/Loged/dropmenu'
import Menu from '@/components/Menu/menu'
import MenuDropdown from '@/components/Menu/dropmenu'
import Search from '@/components/Menu/search'
import Butttons from '@/components/Menu/buttons'
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Offcanvas from 'react-bootstrap/Offcanvas';
import GifEye from '@/img/Gallery/eye-close-open.gif';
import axios from 'axios';
import 'animate.css'

export default function ({ teste, items }: any) {
  const [Logged, setLogged] = useState<String>('NoLogged');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dataUsers, setdataUsers] = useState()

  const [ArrowOne, setArrowOne] = useState<any>(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  );

  const [ArrowTwo, setArrowTwo] = useState<any>(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  );


  const [dadosDaAPI, setDadosDaAPI] = useState([]);
  const { header }: any = useContext(Context);

  let [MenuDD, setMenuDD] = useState(<Image width={100} src={Loading} alt='Loading...' />);
  let [Button, setButton] = useState(<Image width={100} src={Loading} alt='Loading...' />);

  useEffect(() => {
    if (process.browser) {
      fetch('/api/showData', header)
        .then(resp => resp.json())
        .then(resp => !resp.erro ? (setMenuDD(<LogedDropDown />), setButton(<></>)) : (setMenuDD(<MenuDropdown />), setButton(<Butttons />)))
    }
  }, []);


  useEffect(() => {
    fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(resp => resp.data == undefined ? setLogged('NoLogged') : setLogged('Logged'))
}, [])

  useEffect(() => {
    // Fazendo a solicitação Fetch para a API
    fetch('/api/shoes')
      .then(resp => resp.json())
      .then(data => {
        // Atualizando o estado com os dados da API
        setDadosDaAPI(data);

      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);

  function arrowDownOne() {
    const details: Element | any = process.browser ? document.querySelector("#detailsOne") : null;
    details?.open ?

      //Fechado

      setArrowOne(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      ) :

      //Aberto

      setArrowOne(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      );
  }

  function arrowDownTwo() {
    const details: Element | any = process.browser ? document.querySelector("#detailsTwo") : null;
    details?.open ?

      //Fechado

      setArrowTwo(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      ) :

      //Aberto

      setArrowTwo(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      );
  }
  const handleClick = (e: any, name: any) => {
    console.log('Nome do tênis: ', name);

    const heartSVG = e.currentTarget;
    heartSVG.setAttribute('fill', 'red'); // Define a cor do coração como vermelho
    heartSVG.classList.add('animate__animated', 'animate__bounce'); // Adiciona classes de animação

    // Remove as classes de animação após 3 segundos
    setTimeout(() => {
      heartSVG.classList.remove('animate__animated', 'animate__bounce');
      // Atualiza o SVG para o novo SVG
      heartSVG.innerHTML = '';
    }, 1200);
    fetch('/api/showData')
      .then(resp => resp.json())
      .then(user => {
        fetch('/api/shoes')
        .then(resp => resp.json())
        .then(resp => {
         let shoe = resp.filter((e: any) => {
            return e.name == name
          }) 
          axios.post('/api/Favorites', {
            shoe: name,
            idUser: user.data[0].id,
            name: user.data[0].users,
            isTrue: 'true',
            idShoe: shoe[0].id,
            imgShoe: shoe[0].img
          }, header)
        })
      })
  };
  useEffect(() => {
    const getFavorites = () => {
      fetch('/api/showData')
        .then(resp => resp.json())
        .then(user => {
          fetch('/api/getFavorites')
            .then(resp => resp.json())
            .then(fav => {
              const list = fav.filter((e: any) => {
                
                return e.iduser == user?.data[0]?.id;
              });
              if (process.browser) {
                const Hearts = document.querySelectorAll('.box');
                const nameshoes = list.map((e: any) => e.nameshoe);

                Hearts.forEach((div) => {
                  const paragraph = div.querySelector('p'); // Obtém o parágrafo dentro da div

                  // Verifica se o parágrafo existe e se seu texto está presente na lista nameshoes
                  if (paragraph && nameshoes.includes(paragraph.textContent)) {
                    // Seleciona os elementos <svg> com id='heart' dentro desta div e oculta-os
                    const heartSVGs = div.querySelectorAll('svg[id="heart"]');
                    heartSVGs.forEach((svg: any) => {
                      svg.style.display = 'none';
                    });
                  }
                });

              }
            })
        })
    }
    getFavorites()
  }, []);
    const FilterAllShoes = () => {
      
        // Fazendo a solicitação Fetch para a API
        fetch('/api/shoes')
          .then(resp => resp.json())
          .then(data => {
            // Atualizando o estado com os dados da API
            setDadosDaAPI(data);
    
          })
          .catch(error => console.error('Erro ao buscar dados da API:', error));
          setShow(false)
    }
    const Filter = (e: any) => {
      const idShoe = e.target.id
      const shoeSelected = dadosDaAPI.filter((shoe: any) => {
        return shoe.name == idShoe
      });
      e.target.checked == true ? 
      setDadosDaAPI(shoeSelected) 
      :  
      
        // Fazendo a solicitação Fetch para a API
        fetch('/api/shoes')
          .then(resp => resp.json())
          .then(data => {
            // Atualizando o estado com os dados da API
            setDadosDaAPI(data);
    
          })
          .catch(error => console.error('Erro ao buscar dados da API:', error));
    setShow(false)
    
    }
    const FilterPrice = (e: any) => {
      const idShoe = e.target.id
      const shoeSelected = dadosDaAPI.filter((shoe: any) => {
        return parseInt(shoe.price) <= parseInt(idShoe)
      });
      
      e.target.checked == true ? 
      setDadosDaAPI(shoeSelected) 
      :  
      
        // Fazendo a solicitação Fetch para a API
        fetch('/api/shoes')
          .then(resp => resp.json())
          .then(data => {
            // Atualizando o estado com os dados da API
            setDadosDaAPI(data);
    
          })
          .catch(error => console.error('Erro ao buscar dados da API:', error));
          setShow(false)
        }
        const TwoFunctions = () => {
          handleShow();
           // Fazendo a solicitação Fetch para a API
        fetch('/api/shoes')
        .then(resp => resp.json())
        .then(data => {
          // Atualizando o estado com os dados da API
          setDadosDaAPI(data);
  
        })
        .catch(error => console.error('Erro ao buscar dados da API:', error));
        };
        
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
        <title>ShoesShooting</title>
      </Head>
      <Cookies />
      <div className='d-flex flex-column'>
        {MenuDD}
        <Menu colortitle="text-light" />
        {Button}
        <Search />
      </div>

      <svg onClick={TwoFunctions} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="catalogo rounded-2 m-3 bg-danger bg-gradient bi bi-filter-left" viewBox="0 0 16 16">
        <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
      </svg>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ShoeShooting</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='p-5'>
            <h1 className='text-dark'>Categorias</h1>
            <label className='d-flex align-items-center' htmlFor="Todos">
              <input onChange={FilterAllShoes} checked={true} type="checkbox" id='Todos' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>Todos</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="ShoeShooter">
              <input onChange={Filter} type="checkbox" id='ShoeShooter' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>ShoeShooter</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="Tuks">
              <input onChange={Filter} type="checkbox" id='Tuks' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>Tuks</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="Shoeman">
              <input onChange={Filter} type="checkbox" id='Shoeman' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>Shoeman</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="Cutters">
              <input onChange={Filter} type="checkbox" id='Cutters' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>Cutters</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="RedShoe">
              <input onChange={Filter} type="checkbox" id='RedShoe' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>RedShoe</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="Numberr">
              <input onChange={Filter} type="checkbox" id='Numberr' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>Numberr</p>
            </label>
            <label className='shoe d-flex align-items-center' htmlFor="WhiteShoe">
              <input onChange={Filter} type="checkbox" id='WhiteShoe' className='m-3 text-dark' />
              <p className='mt-2 text-dark'>WhiteShoe</p>
            </label>
            <details onClick={arrowDownOne} id='detailsOne' className='mt-5'>
              <summary className='d-flex align-items-center'>
                {ArrowOne}
                Preço
              </summary>
              <input onChange={FilterPrice} type="checkbox" id='200' name="R$200" />
              <p className='text-dark'>R$200</p>
              <input onChange={FilterPrice} type="checkbox" id='400' name="R$400" />
              <p className='text-dark'>R$400</p>
              <input onChange={FilterPrice} type="checkbox" id='600' name="R$600" />
              <p className='text-dark'>R$600</p>
            </details>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className='d-flex flex-wrap justify-content-center p-3'>
        {dadosDaAPI.length > 0 && (
          <div className='row row-cols-1 row-cols-md-3 g-3'>
            {dadosDaAPI.map((item: any, index) => (
              <div key={index} className='col mb-3'>
                <div style={{width:'350px', margin:'auto'}} className='box border border-black bg-dark bg-gradient'>
                  {item.img && (
                    <div onClick={(e) => location.href = `/library/${item.name}`} className='moldureShoes w-100 p-3'>
                      <Image src={item.img} className='m-3 p-3' width={300} height={300} alt='item' />
                    </div>
                  )}
                  <p className='text-light m-3 fw-medium'>{item.name}</p>
                  <p className='text-light m-3 fw-medium'>R${item.price}</p>
                  <div className='d-flex justify-content-between w-100'>
                    <Image onClick={(e) => location.href = `/library/${item.name}`} className='hoverIMG pe-2 m-2' alt='gif Eye' src={GifEye} width={30} height={30} />
                    <svg
                      onClick={(e) => handleClick(e, item.name)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill='white'
                      className={`${Logged === 'Logged' ? '' : 'd-none'} heart p-3 bi bi-heart-fill`}
                      viewBox="0 0 16 16"
                      id='heart'>
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


    </>
  );
}
