import SucessCSS from '@/styles/sucess.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Head from 'next/head'
export default function Success(){

  if (process.browser) {
    const success = localStorage.getItem('success')
      success != 'yes' ? window.location.assign('/') : null
      window.addEventListener('beforeunload', () => {
      localStorage.removeItem('success')
  });
  }
  
    return(
      <>
      <Head>
      <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
      <title>ShoesShooting</title>
      </Head>
  <div>
    <div className='overflow-hidden h-75 w-75 d-flex flex-column align-items-center mx-auto position-absolute top-50 start-50 translate-middle bg-danger bg-gradient rounded'>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="m-5 bi bi-check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      <h1 id={SucessCSS.title} className='ps-5 pe-5 text-light text-center'>Bem vindo ao ShoesShooting</h1>
      <h2 id={SucessCSS.pg} className='text-center text-light p-5'>Você já foi registrado!</h2>
      <div className='w-50 d-flex justify-content-between'>
      <Link href='/' id={SucessCSS.link} className='text-dark fw-bolder'>Voltar a loja</Link>
      <Link href='/login' id={SucessCSS.link} className='text-dark fw-bolder'>Login</Link>
      </div>
    </div>
  </div>
  </>
    )
}