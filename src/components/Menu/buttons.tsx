import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuCSS from '@/styles/menu.module.css'
import Link from "next/link"
export default function Buttons (){

    return(
        <div id={MenuCSS.divButton} className={` d-none mt-3 d-lg-flex me-3 h-25 float-end`}>

        <Button className='me-2 bg-danger bg-gradient border-0 w-50' href='/register'>Register</Button>
        <Button className='bg-danger bg-gradient border-0 w-50' href='/login'>Login</Button>
        </div>
    )
}