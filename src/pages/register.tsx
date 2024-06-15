import Modal from '@/components/Features/policies'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Shoes from '@/img/Login-Register/shoes.png'
import Register from '@/components/Menu/register'
import Menu from '@/components/Menu/menu'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
      <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
      <title>ShoesShooting</title>
      </Head>
        <Menu 
        colortitle="text-light"
        />
        <div className="d-flex justify-content-evenly">
        <Image src={Shoes} id='shoeWhite' alt="home"/>
        <Register />
      </div>
      <Modal />
    </main>
  )
}
