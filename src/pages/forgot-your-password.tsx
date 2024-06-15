import React, { useRef, useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Error from '@/components/Alerts/error'
import ErrorCSS from '@/styles/error.module.css'
import Menu from '@/components/Menu/menu';
import axios from 'axios';
import Context from '@/components/Context/context';

 function FormTextExample() {
  const [Data, setData] = useState(
    {
      mail: process.browser ? localStorage.getItem('email') : null
    }
  )
  const { header, animationOn, setanimationOn, errorType, seterrorType }: any = useContext(Context)
  let input: any = undefined;
  const inputRefs = useRef<any>([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  function autoTab(index: any) {
    process.browser ? (input = document.querySelectorAll('input')) : null;
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  }

  // Função para concatenar os valores dos inputs quando o último input for digitado
  async function concatenateValues() {
    const allInputsFilled = inputRefs.current.every(
      (inputRef: any) => inputRef.current.value.length === 1
    );
    if (process.browser) {
      const btnXError: any = document.querySelector('.x')
      btnXError?.addEventListener('click', () => setanimationOn(ErrorCSS.errorOFF)) 
    }
    if (allInputsFilled) {
      const concatenatedValue = {
        codeinput: inputRefs.current
        .map((inputRef: any) => inputRef.current.value)
        .join('')}
        
        await axios.post('/api/verifyCode', concatenatedValue, header)
        .then(resp => resp.data == 200 ? location.replace('/changePasswd') : (setanimationOn(ErrorCSS.error), seterrorType('Wrong code')))
        .catch(() => (setanimationOn(ErrorCSS.error), seterrorType('Wrong code')))
    }
  }

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png"
        />
        <title>ShoesShooting</title>
      </Head>
      <Menu colortitle="text-light" />
      <Error 
      animation={animationOn}
      typeOfError={errorType}/> 
      <h1 className='text-center text-danger'>Se caso não encontrou o código olhe sua caixa de spam ou reenvie o codigo</h1>
      <form className="center w-25">
        <h1 className="text-light w-0">Insira o código enviado ao seu email</h1>
          <div className="d-flex flex-row align-items-center">
            {inputRefs.current.map((inputRef: any, index: any) => (
              <input
                key={index}
                type="number"
                className={`input-Hover shadow-none w-25 ms-1 text-center fs-4 rounded ${
                  index !== 0 ? '' : ''
                }`}
                ref={inputRef}
                onInput={() => {
                  const value = inputRef.current.value;
                  if (value.length > 1) {
                    inputRef.current.value = value.slice(0, 1);
                  }
                  autoTab(index);

                  // Chama a função para concatenar os valores apenas quando o último input for digitado
                  if (index === inputRefs.current.length - 1) {
                    concatenateValues();
                  }
                }}
                maxLength={1} // Limita a 1 dígito
              />
            ))}
          </div>
          <button onClick={
            async function ()
            { await axios.post('/api/forgotedPasswd', Data, header)
          .then(resp => console.log(resp))}
            } className='btn btn-danger btn-gradient mt-5'>Resend</button>
      </form>
    </>
  );
}

export default FormTextExample;
