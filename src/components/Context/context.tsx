import { useState, createContext } from 'react';
import ErrorCSS from '@/styles/error.module.css';

export const Context = createContext({});

export function ContextProvider({children}: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errorType, seterrorType] = useState('')
  const [animationOn, setanimationOn] = useState(ErrorCSS.errorNull)
  const [favoritos, setFavoritos] = useState<any>([]);
  const header: any = {
    'Content-Type' : 'application/json',
    "Access-Control-Allow-Origin": "https://shoesshooting.vercel.app", //https://shoesshooting.vercel.app
  }


  return (
    <Context.Provider value={{ 
      errorType, seterrorType,
      animationOn, setanimationOn, header, favoritos, setFavoritos, handleClose, handleShow, show
        }}>
      {children}
    </Context.Provider>
  );
}

export default Context;