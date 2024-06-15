import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import 'animate.css';


//Firebase
import {storage} from '@/pages/api/uploadImages';
import { getDownloadURL, ref, uploadBytesResumable, listAll, getStorage } from 'firebase/storage';

// Components
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '@/components/Menu/menu';
import Image from 'next/image';
import Head from 'next/head';
import Cookies from '@/components/Features/cookies';
import Loading from '@/img/Features/loading....gif';
import MenuDropdown from '@/components/Menu/dropmenu';
import LogedDropDown from '@/components/Loged/dropmenu';
import Buttons from '@/components/Menu/buttons';
import Context from '@/components/Context/context';



export async function getStaticPaths() {
    try {
        // Faça uma solicitação para obter os dados dos sapatos
        const response = await axios.get('https://shoesshooting.vercel.app/api/shoes');
        const shoesData = response.data;
        
        // Mapeie os dados dos sapatos para criar os paths dinâmicos
        const paths = shoesData.map((shoe: any) => ({
            params: { shoe: shoe.name } // Supondo que "name" seja o parâmetro necessário para construir as páginas
        }));

        return {
            paths,
            fallback: false // Define o fallback como false para retornar 404 se a página não for encontrada
        };
    } catch (error) {
        console.error('Erro ao buscar dados de sapatos:', error);
        return {
            paths: [],
            fallback: false
        };
    }
}

    
export async function getStaticProps(context: any) {
    const { shoe } = context.params;
    
    try {
        // Faça uma solicitação para buscar os dados do sapato correspondente
        const response = await axios.post('/api/shoeSelected', { shoe });
        const shoeData = response.data[0]; // Supondo que os dados do sapato estão na primeira posição do array
        
        return {
            props: {
                shoe: shoeData
            }
        };
    } catch (error) {
        console.error('Erro ao buscar dados do sapato:', error);
        return {
            props: {
                shoe: null
            }
        };
    }
}


export default function Shoe({shoe}: any) {
    
    const [ImgURL, setImgURL] = useState("")
    const [progress, setprogress] = useState(0)
    const router = useRouter();
    const shoePath = router.asPath.substring(9);
    const data = { shoe: shoePath };
    const { header }: any = useContext(Context);
    const [imageShoe, setImageShoe] = useState<any>();
    const [nameShoe, setNameShoe] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [IdShoe, setIdShoe] = useState<any>();
    const [material, setMaterial] = useState<any>();
    const [menuComponent, setMenuComponent] = useState(<Image width={100} src={Loading} alt='Loading...' />);
    const [buttonComponent, setButtonComponent] = useState(<Image width={100} src={Loading} alt='Loading...' />);
    const [Coments, setComents] = useState<Array<String>>();
    const [Logged, setLogged] = useState<String>('NoLogged');
    const [Comented, setComented] = useState<any>('');
    let ComentsArrayId: any = [];

    useEffect(() => {
        if (process.browser) {
            fetchMenuData();
        }
        getShoe();
    }, []);

    const fetchMenuData = () => {
        fetch('/api/showData', header)
            .then(resp => resp.json())
            .then(resp => {
                if (!resp.error) {
                    setMenuComponent(<LogedDropDown />);
                    setButtonComponent(<></>);
                } else {
                    setMenuComponent(<MenuDropdown />);
                    setButtonComponent(<Buttons />);
                }
            });
    };
    const getShoe = async () => {
        const response = await axios.post('/api/shoeSelected', data, header);
        setIdShoe(response.data[0]?.id)
        setImageShoe(response.data[0]?.img);
        setNameShoe(response.data[0]?.name);
        setPrice(response.data[0]?.price);
        setMaterial(response.data[0]?.material);
    };
    useEffect(() => {
        getShoe();
    });
    const [rating, setRating] = useState(0);

    const handleClick = (value: any) => {
        setRating(value);
    };
      //If logged account
  let [MenuDD, setMenuDD] = useState(<Image width={10} src={Loading} alt='Loading...'/>)
  let [Button, setButton] = useState(<Image width={10} src={Loading} alt='Loading...'/>)
if (process.browser) {
 const { header }: any = useContext(Context)
  useEffect(() => {
    fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(resp => !resp.erro ? ( setMenuDD(<LogedDropDown/ >), setButton(<></>)):(setMenuDD(<MenuDropdown />), setButton(<Buttons />)))
}, [])
}

useEffect(() => {
    fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(resp => resp.data == undefined ? setLogged('NoLogged') : setLogged('Logged'))
}, [])

useEffect(() => {
    axios.get('/api/getDataComents')
    .then(resp => setComents(resp.data))
},[]) 
ComentsArrayId = Coments?.filter((e: any) => e.idshoe == IdShoe)

const Submit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/showData', header);
    const data = await response.json();
    if (!data.error) {
        ComentsArrayId.push({
            iduser: `${data.data[0].id}`,
            comentario: Comented,
            idshoe: `${IdShoe}`,
            nameuser: data.data[0].users
        });
        setComents([...ComentsArrayId]); // Atualiza o estado com os novos comentários
        setComented(''); // Limpa o campo de entrada
    } else {
        console.error('Erro ao adicionar comentário');
    }
 const ultimoItem = {data: ComentsArrayId[ComentsArrayId.length - 1]};
    await axios.post('/api/sendComents',ultimoItem, header)
    .then(resp => console.log(resp))
};
const findAndDeleteComment = (user: any,commentText: string) => {
    const index = ComentsArrayId?.findIndex((comment: any) => comment.comentario === commentText);
    fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(resp => {
        if(resp.data[0].id == user.iduser){
            if (index !== -1) {
                const updatedComments = [...ComentsArrayId];
                updatedComments.splice(index, 1); // Remove o comentário da posição identificada
                setComents(updatedComments); // Atualiza o estado dos comentários
            }
        axios.post('/api/deleteComent', {delete: commentText}, header)
        .then(resp => console.log(resp)) 
        }
    })
    
};

if (process.browser) {
    
        fetch('/api/showData', header)
            .then(resp => resp.json())
            .then(resp => {
                if (resp && resp.data && resp.data.length > 0) {
                    const liElements = document.querySelectorAll('#comentario');
                    const ComentTrue = ComentsArrayId?.filter((e: any) => e.iduser == resp.data[0].id);
                    
                    if (liElements && ComentTrue) {
                        liElements.forEach((element: any) => {
                            ComentTrue.forEach((comment: any) => {
                                if (element.innerText.replace(/"/g, '') === comment.comentario) {
                                    const svgElement = element.parentElement.querySelector('svg'); // Obtém o elemento SVG associado
                                    if (svgElement) {
                                        svgElement.style.display = 'block';
                                    }
                                }
                            });
                        });
                    }
                }
            })
            .catch(error => console.error(error));
}

const MarketCar = async (e: any) => {
    e.preventDefault()
    const Tamanho = e.target[0].value.replace(/opcao/g, "")    
    await fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(async user => {
        const idUser = user.data[0].id
        const data = {
            iduser: idUser,
            img: imageShoe,
            preco: price,
            nameshoe: nameShoe,
            tamanho: Tamanho
        }
      await axios.post('/api/sendMarketCar', data, header)
      .then(resp  => resp)
      .catch(err => console.log('Erro' + err))
    })
}
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
                <title>ShoesShooting</title>
            </Head>
            <Cookies />
            <div className='d-flex flex-column'>
                
                {MenuDD}
      <Menu 
      colortitle="text-light"
      />
      {Button}
                {buttonComponent}
            </div>

            <h1 className='animate__animated animate__backInLeft m-3 text-start text-light'>{shoePath}</h1>
            <div className='d-lg-flex justify-content-evenly'>
                <Image alt='shoeIMG' className='d-none d-lg-block ' src={imageShoe} width={500} height={500} />
                <Image alt='shoeIMG' className='d-lg-none ms-5 rounded-circle' src={imageShoe} width={300} height={300} />
                <div className='m-3 d-flex flex-column '>
                    <h2 className='text-light'>{nameShoe}</h2>
                    <ul className='d-flex p-1'>

                    <ul className='d-flex p-1'>
            {[...Array(5)].map((_, index) => (
                <li key={index} onClick={() => handleClick(index + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={index < rating ? 'yellow' : 'white'} className="bi bi-star" viewBox="0 0 16 16">
                        <path d={index < rating ? "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" : "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" }/>
                    </svg>
                </li>
            ))}
        </ul>
        </ul>
                    <h3 className='text-light ms-2'>R$ {price}</h3>

                    <h4 className='mt-5 pt-5 text-light'>Detalhes</h4>
                    <p className='text-danger'>Material: {material}</p>
                    <form onSubmit={MarketCar} className='d-flex flex-column' action="">
                    <label className='mt-5 pt-5 text-light outline-0' htmlFor="opcoes">Tamanho:</label>
                    <select className='w-25 rounded' id="opcoes" name="opcoes">
                        {Array.from(Array(8), (_, index) => (
                            <option key={index} value={`opcao${index + 33}`}>{index + 33}</option>
                        ))}
                    </select>
                    {Logged == 'Logged' ? <button className='m-5 btn btn-danger bg-gradient'>Jogar no carrinho</button> : <button disabled className='m-5 btn btn-danger bg-gradient'>Logue para poder comprar</button> }
                    </form>
                </div>
            </div>
            <h3 className='m-5 text-light'>Avaliações</h3>
            <div className='bg-dark bg-gradient mb-2'>
            <ul className=' overflow-auto' style={{ maxHeight: '800px' }}>
            {ComentsArrayId?.map((e: any, index: number) => 
  <li className='comentario p-3 text-light' key={index}>
    <div className='me-5'>
    <svg onClick={() => findAndDeleteComment(e ,e.comentario)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" style={{'display' : 'none'}} className="rounded-circle bg-gradient bg-danger p-2 position-relative start-100 bi bi-trash3-fill trash" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>  
</div>
    <div className='d-flex flex-column'>
     <Image alt='photo' className='m-3 rounded-circle' width={100} height={100} src={`https://firebasestorage.googleapis.com/v0/b/shoes-shooting-v3.appspot.com/o/profiles%2F${e.iduser}%2Fprofile.png?alt=media&token=bebb579a-6dcc-4f1c-b581-02a7e11196f8`} />
      <div className='d-flex align-items-center'>
      <p className='p-2 fst-italic'>{e.nameuser}</p>
      <p className='text-secondary fst-italic'>comentou:</p>
      </div>
    </div>
    <p id='comentario' className='mt-2 ms-5'>"{e.comentario}"</p>
    <hr />
  </li>
)}
    </ul>
    <form onSubmit={Submit} className='d-flex justify-content-center'>
    <input 
        disabled={Logged === 'Logged' ? false : true} 
        onChange={(e) => setComented(e.target.value)} 
        value={Comented} // Adicione esta linha para vincular o valor do input ao estado Comented
        placeholder={Logged === 'Logged' ? 'Deixe aqui seu feedback . . .' : 'Logue pra comentar. . .'} 
        className='fst-italic w-75 d-block bg-transparent outline-0 border-0 border-bottom border-danger text-light' 
        type="text" 
    />
    <button disabled={Logged === 'Logged' ? false : true} className='ms-3 btn btn-danger'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="d-flex align-items-center bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
        </svg>
    </button>
</form>

            </div>
        </>
    );
}