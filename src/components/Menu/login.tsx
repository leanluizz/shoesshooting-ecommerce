import axios from "axios"
import Link from "next/link"
import Error from '@/components/Alerts/error'
import { Context } from "../Context/context"
import { useState, useContext } from "react"

export default function Login(){
  const header: any = {
    'Content-Type' : 'application/json',
    "Access-Control-Allow-Origin": "https://shoesshooting.vercel.app", //https://shoesshooting.vercel.app
  }
  const [Data, setData] = useState<any>({
    mail: '',
    passwd: '',
  })
  const {handleShow, errorType, seterrorType} : any = useContext(Context)

  const handleInput = (e: any) => {
    setData({...Data, [e.target.name] : e.target.value})
  }

  const Submit = async (e: any) => {
    e.preventDefault()
    if (process.browser) {
    let allInputsFilled = true
    const input: any = document.querySelectorAll('input')
    input.forEach(function(input: any) {
      if (input.value == '') {
          allInputsFilled = false;
      }
  });
    if(!allInputsFilled){
      handleShow()
      seterrorType('Verifique se as entradas estão vazias...')
  }else{
    await axios.post('api/authentication', Data, header) // https://shoesshooting.vercel.app/api/authentication
    .then(resp => {
      if(resp.data == 'PASSWORD NOT FOUND'){
        handleShow()
        seterrorType('Erro na autenticação da senha, caso tenha esquecido sua senha clique em "Esqueceu sua senha?"')    
      }else{
        localStorage.setItem('email', resp.data.mail)
        localStorage.setItem('id', resp.data.id)
        location.replace('/')     
      }
    })
      .catch(err => {
        handleShow()
        seterrorType(`${err}`)   
        console.log(err)
    })
}
}
  }
  const Forgoted = async (e: any) => {
    e.preventDefault()
    if (process.browser) {
      const EmailInput: any = document.querySelector(".Email")
      EmailInput?.value == '' ? (handleShow(),seterrorType('Insira seu email na entrada de email por favor...')) : 
      ( localStorage.setItem('email', EmailInput?.value)
        ,await axios.post('/api/forgotedPasswd', Data, header)
      .then(rowCounted => rowCounted.data >= 1 ? (localStorage.setItem('info', rowCounted.data),location.replace('/forgot-your-password')) : console.log('erro'))
      )
    }
  }
    return(
      <div>
         <Error 
          typeOfError={errorType}
          /> 

<form onSubmit={Submit}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email</label>
    <input placeholder="Email" onChange={handleInput} name="mail" type="email" className="form-control Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Senha</label>
    <input placeholder="Password" onChange={handleInput} name="passwd" type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className='d-flex flex-column'>
  <button type="submit" className="btn btn-danger bg-gradient">Enviar</button>
  <button type="submit" className='mt-2 bg-transparent border-0 text-primary' onClick={Forgoted}>Esqueceu sua senha?</button>
  <Link className='mt-2 text-center' href='/register'>Não tem uma conta ainda?</Link>
  </div>
</form> 
</div>
    )
}