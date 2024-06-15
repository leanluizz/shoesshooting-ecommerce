import DropdownCSS from '@/styles/dropdown.module.css'
import Shoe from '@/img/Menu/tenis.png'
import Boot from '@/img/Menu/dr-mateen-boot.png'
import Image from 'next/image';

function BasicExample() {
  return (
    <>
<div className={DropdownCSS.dropdown}>
    <div className='d-flex align-items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
</svg>
  <button className={`${DropdownCSS.dropbtn} bg-transparent  `}>Promoções</button>
  </div>
  <div className={DropdownCSS.dropdowncontent}>
    <a className='bg-danger bg-gradient text-center rounded-top' href="/library/Shoeman">Shoeman</a>
    <a className='bg-danger bg-gradient text-center' href="/library/ShoeShooter">ShoeShooter</a>
    <a className='bg-danger bg-gradient text-center' href="/library/Cutters">Cutters</a>
    <a className='bg-danger bg-gradient text-center rounded-bottom' href="/library/Tuks">Tuks</a>
  </div>
</div>

<div className={DropdownCSS.dropdown}>
    <Image src={Shoe} alt='icon-schoes'/>
  <button className={`${DropdownCSS.dropbtn} bg-transparent `}>Tênis</button>
  <div className={DropdownCSS.dropdowncontent}>
    <a className='bg-danger bg-gradient rounded-top' href="/library/allShoes">Masculino</a>
    <a className='bg-danger bg-gradient' href="/library/allShoes">Feminino</a>
    <a className='bg-danger bg-gradient rounded-bottom' href="/library/allShoes">Infantil</a>
  </div>
</div>

<div className={DropdownCSS.dropdown}>
    <Image src={Boot} alt="boot-icon"/>
  <button className={`${DropdownCSS.dropbtn} bg-transparent`}>Botas</button>
  <div className={DropdownCSS.dropdowncontent}>
    <a className='bg-danger bg-gradient rounded-top' href="/library/allShoes">Masculino</a>
    <a className='bg-danger bg-gradient' href="/library/allShoes">Feminino</a>
    <a className='bg-danger bg-gradient rounded-bottom' href="/library/allShoes">Infantil</a>
  </div>
</div>

<div className={DropdownCSS.dropdown}>
    <div className='d-flex align-items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg>
  <button className={`${DropdownCSS.dropbtn} bg-transparent  `}>Serviços</button>
  </div>
  <div className={DropdownCSS.dropdowncontent}>
    <a className='bg-danger bg-gradient rounded-top' href="/services/suport">Support</a>
    <a className='bg-danger bg-gradient' href="/services/reembolso">Reembolso</a>
    <a onClick={() => window.scrollTo(0, document.body.scrollHeight)} className='bg-danger bg-gradient rounded-bottom' href="#">Endereço</a>
  </div>
</div>
    </>
    
  );
}

export default BasicExample;