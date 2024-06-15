import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext} from 'react'
import Error from '@/components/Alerts/error'
import ErrorCSS from '@/styles/error.module.css'
import Menu from '@/components/Menu/menu';
import { Button } from 'react-bootstrap';
import Context from '@/components/Context/context';
import axios from 'axios';

export default () => {
    const {header ,animationOn, setanimationOn, errorType, seterrorType} : any = useContext(Context)
    let [email, setemail] = useState()
    let storage: any = undefined
    process.browser ? storage = localStorage.getItem('email') : null
    useEffect(() => setemail(storage), [])
    const [displayFlex, setdisplayFlex] = useState('d-flex')
    const [Form, setForm] = useState<JSX.Element>()

    const Submit = async (e: any) => {
        e.preventDefault()
        const data = {
            email: email,
            passwordReset: e.target[0]?.value
        }
        await axios.post('/api/changepasswd', data, header)
        .then(resp => resp.data ? location.replace('/login') : null)
        .catch(() => setanimationOn(ErrorCSS.error))
    }
    if (process.browser) {
        const btnXError: any = document.querySelector('.x')
        btnXError?.addEventListener('click', () => setanimationOn(ErrorCSS.errorOFF)) 
      }
    const ChangeEmail = (e: any) => {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (regexEmail.test(e.target[0]?.value)) {
            localStorage.setItem('email', e.target[0]?.value)
        }else{
            e.preventDefault()
            setanimationOn(ErrorCSS.error)
            seterrorType('Write a email')
        }
        
    }
    const componentYes =
    <form id='Yes' onSubmit={Submit} className={'d-flex flex-column'}>
    <h3 className='text-light ms-5'>Write your new password</h3>
    <input type="password" placeholder='Whats your new password ?' className='w-25 p-2 m-5 rounded-2 outline-0 border-0 inputchngPasswd' />
    <Button type='submit' className='w-25 ms-5 border-0 bg-danger'>Submit</Button>
    </form>

    const componentNo =
    <form id='No' onSubmit={ChangeEmail} className={'d-flex flex-column'}>
    <h3 className='text-light ms-5'>Change the email</h3>
    <input type="text" placeholder='Whats your email?' className='w-25 p-2 m-5 rounded-2 outline-0 border-0 inputchngPasswd' />
    <Button type='submit' className='w-25 ms-5 border-0 bg-danger'>Submit</Button>
    </form>
    
  return (
    <>
    <Head>
        <link
          rel="shortcut icon"
          href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png"
        />
        <title>ShoesShooting</title>
      </Head>
    <div className='d-flex flex-column'>
      <Menu colortitle="text-light" />
      <Error 
      animation={animationOn}
      typeOfError={errorType}/> 
      <h1 className='text-light p-5'>Este é seu email?</h1>
      <h2 className='text-light p-5'>{email}</h2>
      <div className={displayFlex}>
      <Button className='m-5 border-0 bg-danger' onClick={(e: any) => {
        if (process.browser) {
            const input = document.querySelectorAll('.inputchngPasswd')
            input.forEach(function(e: any){
                e.value = ''
            })
        }
        setForm(componentYes)}
        }>Yes</Button>
      <Button className='m-5 border-0 bg-danger' onClick={(e: any) => {
       if (process.browser) {
        const input = document.querySelectorAll('.inputchngPasswd')
        input.forEach(function(e: any){
                e.value = ''
            })
        }
        setForm(componentNo)
    }}>No</Button>
      </div>
      {Form}
    </div>
    </>
  );
};
