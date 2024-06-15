import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

// Components
import LogedDropDown from '@/components/Loged/dropmenu';
import MenuDropdown from '@/components/Menu/dropmenu';
import Buttons from '@/components/Menu/buttons'
import Cookies from '@/components/Features/cookies';
import Menu from '@/components/Menu/menu';
import Context from "@/components/Context/context";
import DropDownOpt from "@/components/Features/dropdownOpt";

// AnimateCss
import 'animate.css'

// Image
import Loading from '@/img/Features/loading....gif';

export default function Home() {
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
  const { header, favoritos, setFavoritos }: any = useContext(Context);

  //If logged account
  let [MenuDD, setMenuDD] = useState(<Image width={100} src={Loading} alt='Loading...'/>);
  let [Button, setButton] = useState(<Image width={100} src={Loading} alt='Loading...'/>);

  if (process.browser) {
    useEffect(() => {
      fetch('/api/showData', header)
        .then(resp => resp.json())
        .then(resp => !resp.erro ? (setMenuDD(<LogedDropDown/ >), setButton(<></>)) : (setMenuDD(<MenuDropdown />), setButton(<Buttons />)));
    }, []);
  }


  useEffect(() => {
    fetch('/api/showData')
      .then(resp => resp.json())
      .then(user => {
        fetch('/api/getFavorites')
          .then(resp => resp.json())
          .then(fav => {
            const list = fav.filter((e: any) => {
              return e.iduser == user.data[0].id;
            });
            setFavoritos(list);
          });
      });
  }, []);

  const Reset = (e: any) => {
    if (process.browser) {
      const Title = document.querySelector('#title-favorite');
      const Btn: any = document.querySelector('#button-Reset');

      if (Btn) { // Verifica se Btn é uma referência válida
        Title?.classList.remove('animate__animated');
        Btn.style.display += 'none'; // Atribui 'none' à propriedade style.display de Btn
      }
    }
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
        <Menu colortitle="text-light" />
        {Button}
      </div>
      <div style={{ position: 'relative' }} className="w-100 d-lg-flex text-center justify-content-between align-items-center bg-danger rounded-1">
        <div className="d-lg-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="white" className="animate__delay-3s	3s animate__animated animate__wobble animate__infinite	infinite animate__slow	3s p-5 bi bi-box2-heart-fill" viewBox="0 0 16 16">
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
          </svg>
          <h1 id="title-favorite" className="text-light text-center ms-3 animate__animated animate__hinge">Favoritos</h1>
        </div>
        <button id="button-Reset" onClick={Reset} style={{ position: 'absolute', top: '0', right: '0', transform: 'translate(50%, -50%)' }} className="d-flex align-items-center animate__animated animate__delay-3s	3s animate__jackInTheBox rounded-circle m-5 btn btn-dark bg-gradient">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="white" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
          </svg>
        </button>
      </div>
      <ul className="d-none d-lg-block p-5 pt-5 mt-5 m-0">
        {favoritos.length === 0 ? (
          <div className="d-flex align-items-center p-5 m-5 flex-column">
            <h2 className="text-center text-danger">Favor algum item</h2>
            <button onClick={() => location.replace('/library/allShoes')} className="d-none d-lg-block text-center w-25 btn btn-danger"><a className="text-light" href="/library/allShoes">Tênis</a></button>
            <button onClick={() => location.replace('/library/allShoes')} className="d-lg-none text-center w-50 btn btn-danger"><a className="text-light" href="/library/allShoes">Tênis</a></button>
          </div>
        ) : (
          favoritos.map((e: any) => (
            <li style={{ position: 'relative' }} key={e.iduser} className="bg-light-subtle bg-gradient d-flex justify-content-between align-items-center border border-subtle w-100">
              <a target="_blank" href={`/library/${e.nameshoe}`}>
                <Image alt="favoriteShoe" className=" bg-danger bg-gradient" width={200} height={200} src={`${e.img}`}/>
              </a>

              <div className="h-100 p-5 m-0">
                <h2 className="text-center text-danger animate__animated animate__rollIn">{e.nameshoe}</h2>
              </div>
              <DropDownOpt
                link={`/library/${e.nameshoe}`}
                fav={favoritos}
                shoe={e.nameshoe}
              />
            </li>
          ))
        )}
      </ul>
      <ul className="d-lg-none p-5 pt-5 mt-5 m-0">
        {favoritos.length === 0 ? (
          <div className="d-flex align-items-center p-5 m-5 flex-column">
            <h2 className="text-center text-danger">Favor algum item</h2>
            <button onClick={() => location.replace('/library/allShoes')} className="d-none d-lg-block text-center w-25 btn btn-danger"><a className="text-light" href="/library/allShoes">Tênis</a></button>
            <button onClick={() => location.replace('/library/allShoes')} className="d-lg-none text-center w-50 btn btn-danger"><a className="text-light" href="/library/allShoes">Tênis</a></button>
          </div>
        ) : (
          favoritos.map((e: any) => (
            <li style={{ position: 'relative' }} key={e.iduser} className="bg-light-subtle bg-gradient flex-column d-flex justify-content-between align-items-center border border-subtle w-75 mx-auto">
              <div className="w-100">
              <a target="_blank" href={`/library/${e.nameshoe}`}>
                <Image alt="favoriteShoe" className="w-100 bg-danger bg-gradient" width={200} height={200} src={`${e.img}`}/>
              </a>
              </div>
              <div className="d-flex">
              <div className="h-100 p-5 m-0">
                <p className="text-break text-center text-danger animate__animated animate__rollIn">{e.nameshoe}</p>
              </div>
              <DropDownOpt
                link={`/library/${e.nameshoe}`}
                fav={favoritos}
                shoe={e.nameshoe}
              />
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
