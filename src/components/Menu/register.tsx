import Error from '@/components/Alerts/error'
import Link from "next/link"
import { useState, useContext } from "react"
import axios from 'axios'
import Context from '../Context/context'


export default function Register(){
  const {handleShow, errorType, seterrorType, header} : any = useContext(Context)
const [Data, setData] = useState<any>({
  name: '',
  password: '',
  email: '',
})

const handleInput = (e: any) => {
  setData({...Data, [e.target.name] : e.target.value})
}
if (process.browser) {
  localStorage.setItem('email', Data.email) 
}
 const Submit = async (e: any) =>{
  e.preventDefault()
  if (process.browser) {
    const passwd: any = document.querySelector('.passwd')
    const passwdV: any = document.querySelector('.passwdConfirm')
    const inputs: any = document.querySelectorAll('.input-register')
    const input: any = document.querySelectorAll('input')

    let allInputsFilled = true

    inputs.forEach(function(input: any) {

      if (input.value == '') {
          allInputsFilled = false;
      }
  });

    if (passwd?.value !== passwdV?.value) {
      handleShow()
      seterrorType('Verifique se as senhas coincidem.')
  }
    else if(!allInputsFilled){
      handleShow()
      seterrorType('Verifique se alguma das entradas estão vazias...')
  }
    else{
      input.forEach(function(input: any) {
        input.value = ''
     }) 
      await axios.post('/api/sql', Data, header) //  https://shoesshooting.vercel.app/api/sql
      .then(response => response.data == 'err in credentials' ? (handleShow(),seterrorType('Email já registrado...')) : (
       // uploadBytesResumable(ref(storage, `profiles/${process.browser ? localStorage.getItem('email') : null}/profile.png`), blobImage),
        localStorage.setItem('success', 'yes'),
        window.open('/registered')))
    }
  }
 }

    return(   
      <>
      <Error 
      typeOfError={errorType}/> 

<form action={'/api/sql'} onSubmit={Submit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label text-light">Name</label>
    <input placeholder='Name' maxLength={10} onChange={handleInput} type="text" className="input-register form-control" name="name" id="name" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label text-light">Email</label>
    <input placeholder='Email' onChange={handleInput} type="email" className="input-register form-control" name="email" id="email" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="passwd" className="form-label text-light">Password</label>
    <input placeholder='Password' onChange={handleInput} type="password" className="input-register passwd form-control" name="password" id="passwd" />
  </div>
  <div className="mb-3">
    <label htmlFor="passwdConfirm" className="form-label text-light">Confirm Password</label>
    <input placeholder='Confirm your password' type="password" className="passwdConfirm form-control" id="input-register passwdConfirm" />
  </div>
  <div className="d-flex flex-column">
  <button onSubmit={(e) => e.preventDefault()} type="submit" className="btn btn-danger bg-gradient">Enviar</button>
  <Link className="mt-2" href='/login'>Já tem uma conta?</Link>
  </div>
</form> 
</>
    )
    
}