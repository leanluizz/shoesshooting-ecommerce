import Image from 'next/image'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {storage} from '@/pages/api/uploadImages';
import Link from 'next/link';
import MenuCSS from '@/styles/menu.module.css';
import ShoeIcon from '@/img/Menu/Hopstarter-Van-Slip-Ons-Vans-Checkerboard-Dirty-White.256.png';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import PhotoProfile from '@/img/Profile/profile.png';
import List from '@/components/Menu/list'
import Search from '@/components/Menu/search';


function OffCanvasExample({ ...props }) {
  const [User, setUser] = useState<String>()
  const [show, setShow] = useState(false);
  const [ImgURL, setImgURL] = useState("")
  const [progress, setprogress] = useState(0)
  const imagepath = `profiles/${process.browser ? localStorage.getItem('id') : null}/profile.png`
  const ImageProfile = ref(storage, imagepath)
  const [Profile, setProfile] = useState<any>()
  getDownloadURL(ImageProfile)
  .then((url) => {
    setProfile(url);
  })
  .catch(err => setProfile(PhotoProfile))

const sendPhoto = (e: any) => {
  const file = e?.target?.files[0];
  
  if (!file) return console.log("Erro");
  const storageRef = ref(storage, `profiles/${process.browser ? localStorage.getItem('id') : null}/profile.png`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
    "state_changed",
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setprogress(progress)
    },
    error => {
      alert(error)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(url => {
        setImgURL(url)
      })
    }
  )
}

useEffect(() => {
fetch('/api/showData')
.then(resp => resp.json())
.then(resp => !resp.erro ? setUser(resp.data[0].users) : null)
}, [])


useEffect(() =>{
  fetch('/api/uploadImages')
  .then(resp => resp)
}, [])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const splitUser: string[] | undefined = User?.split(' ')
  let user = '';
  if (splitUser !== undefined) {
    user = splitUser[0];
  }
   const Logout = () => {
    fetch('/api/logout')
    .then(resp => resp.json())
    .then(resp => resp)
location.replace('/login')
   }
  return (
    <>
      <Button variant={`danger bg-gradient position-absolute end-0`} onClick={handleShow} className="me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <div className='d-flex justify-content-between'>
      <Button href='/settings/config' className='w-25 rounded-2 pb-2 pt-0 m-1 position-relative top-0 bg-danger bg-gradient border-0'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
      </svg>
      </Button>
      <Button href='/settings/marketcart' className='w-25 rounded-2 pb-2 pt-0 m-1 position-relative top-0 bg-danger bg-gradient border-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg>
        </Button>
        </div>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <div className=' flex-start d-md-flex align-items-center'>
           <Link href='/'><Image width={100} className={ MenuCSS.icon } src={ShoeIcon} alt='iconMenu'/></Link>
            <Link className='link-offset-2 link-underline link-underline-opacity-0' href={'/'}>
            <h2 id='titleSS' className={`fs-4 text-dark fw-lighter`}>
                ShoesShooting
            </h2>
            </Link>
            </div>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='width'>
          <form className='w-75'>
          <label htmlFor="file">
          <Image loading="eager" priority={true} src={Profile} width={200} height={200} className='ms-5 rounded-circle' id='profile' alt='profile'/>
          </label>
          <input max-size="2MB" accept="image/jpeg, image/png" type="file" onChange={sendPhoto} className='d-none' id='file'/>
          </form>
        <h2 className='text-center w-25 p-3 text-danger fw-light'>Bem vindo, {user}</h2>
        <Search 
        disp='d-lg-none'
        />
        <List 
        
        />
        <Button href='/Favorites' className='d-flex mb-2 w-100 text-start bg-danger bg-gradient border-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="m-1 bi bi-bag-heart-fill" viewBox="0 0 16 16">
        <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg>
         <p className='mt-2'>Favoritos</p>
          </Button>
        <Button onClick={Logout} className='d-flex w-100 text-start bg-danger bg-gradient border-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
          <p className='mt-2 ms-1'>Logout</p>
          </Button>
          <a href="/services/trabalhe-conosco" className='link-offset-2 link-underline link-underline-opacity-0'><p className='m-5 text-danger'>Trabalhe Conosco</p></a>
        </Offcanvas.Body>
      </Offcanvas>
      
    </>
  );
}

export default function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
