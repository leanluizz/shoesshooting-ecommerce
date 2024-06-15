import Image from "next/image";
import 'react-bootstrap';
import Button from "react-bootstrap/Button";
import LanceReis from '@/img/Gallery/lance-Reis.png'
import { useState, useContext } from "react";
import axios from "axios";
import Context from "../Context/context";

export default function (){
    const[value, setvalue] = useState('')
    const { header }: any = useContext(Context)
const [display, setdisplay] = useState({
    display: 'none'
})
    if(process.browser){
        const textEmail = document.querySelectorAll(".text-email")
        textEmail.forEach(function(e){
            setInterval(() => {
                e.classList.add("animate__animated")
                e.classList.add("animate__swing")
            }, 5000)
            setInterval(() => {
                e.classList.remove("animate__animated")
                e.classList.remove("animate__swing")
            }, 6000)
        })
    }
    const BeModel = (e: any) => {
        e.preventDefault();
        if (process.browser) {
            const email: any = document.querySelector('.email');
            if (email?.value) {
                setdisplay({
                    display: 'block'
                });
    
                // Define um timeout para voltar ao estado normal após 5 segundos
                setTimeout(() => {
                    setdisplay({
                        display: 'none' // ou 'none', dependendo do estado desejado
                    });
                }, 5000); // 5000 milissegundos = 5 segundos
            axios.post('/api/BeModel', {mail:value}, header)
            .then(resp => console.log('ok', resp))
            setvalue('')
            }
        }
    };
    
    return(
        <>
        <form onSubmit={BeModel} className="d-flex flex-column flex-lg-row justify-content-around align-items-center text-center">
        <Image className="w-50 h-25 rounded-5" alt="Model" src={LanceReis}/>
        <div className="mt-5 pt-5">
        <h3 className="text-email text-light text-center mb-5">Estamos precisando de modelo pras demonstrações dos nossos tênis</h3>
        <h4 className="text-email text-light text-center mb-5">Se interessou?</h4>
        <h4 className="text-email text-light text-center mb-5">Envie seu email pra conversarmos</h4>
        <input onChange={(e) => setvalue(e.target.value) } value={value} required type="email" className="email rounded-2 border-0 mt-5" />
        <Button onClick={BeModel} className="bg-danger bg-gradient border-0 m-2">Submit</Button>
        <p style={display} className="text-danger">Obrigado, verifique seu email!</p>
            </div>
        </form>
        </>
    )
}