import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import ShoeShooter from '@/img/Gallery/thibaut-burckel-n2V5MLDPE-k-unsplash-removebg-preview.png'
import ShoeMan from '@/img/Gallery/artem-bondarchuk-vbdIgnfzrdg-unsplash-removebg-preview.png'
import Cutters from '@/img/Gallery/trendest-studio-XZ3EmAIWuz0-unsplash-removebg-preview.png'
import Tuks from '@/img/Gallery/mojtaba-fahiminia-t4g1gctAaKk-unsplash-removebg-preview.png'
import Running from '@/img/Gallery/steven-lelham-atSaEOeE8Nk-unsplash.jpg'
import RunningCell from '@/img/Gallery/pexels-chiara-caldarola-1257245.jpg'
import { Button } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className='text-center'>
    <h2 className='text-light mt-5'>Promoções</h2>
    <h3 className='text-light mt-5'>Aproveite as promoções!</h3>
    <h3 className='text-danger text-opacity-75 mt-5'>Vendas com 50% de desconto</h3>  
      <div className='d-flex justify-content-center'>
      <Button href='/library/allShoes' className='btn-danger bg-gradient m-5'>Saiba mais</Button>
      <Button href='/library/allShoes' className='btn-danger bg-gradient m-5'>Ofertas</Button>
      </div>
      <div className='m-5 p-5 d-none d-lg-flex justify-content-center'>
      <div className='m-1 bg-dark w-25 h-25 mb-5'>
        <h3 className='text-light'>Tuks</h3>
        <a href="/library/Tuks"><Image className='w-75 h-75 text-center' src={Tuks} alt='Tuks'/></a>
        <p className='fs-5 fw-bold text-light'>R$100,00</p>
        </div>
        <div className='m-1 bg-dark w-25 h-25 mb-5'>
        <h3 className='text-light'>ShoeMan</h3>
        <a href="/library/Shoeman"><Image className='w-75 h-75 text-center' src={ShoeMan} alt='ShoeMan'/></a>
        <p className='fs-5 fw-bold text-light'>R$230,34</p>
        </div>
        <div className='m-1 bg-dark w-25 h-25 mb-5'>
        <h3 className='text-light'>ShoeShooter</h3>
        <a href="/library/ShoeShooter"><Image className='w-75 h-75 text-center' src={ShoeShooter} alt='ShoeShooter'/></a>
        <p className='fs-5 fw-bold text-light'>R$500,10</p>
        </div>
        <div className='m-1 bg-dark w-25 h-25 mb-5'>
        <h3 className='text-light'>Cutters</h3>
        <a href="/library/Cutters"><Image className='w-75 h-75 text-center' src={Cutters} alt='Cutters'/></a>
        <p className='fs-5 fw-bold text-light'>R$333,70</p>
        </div>
      </div>
    </div>
    <Carousel className='d-lg-none m-5' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='text-center'>
      <a href="/library/ShoeMan"><Image className='w-75 h-25 mb-5 pb-5 text-center' src={ShoeMan} alt='ShoeMan'/></a>
        <Carousel.Caption>
          <h3>ShoeMan</h3>
          <p className='fs-5 fw-bold'> R$100,00</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
      <a href="/library/ShoeShooter"><Image className='w-75 h-25 mb-5 pb-5 text-center' src={ShoeShooter} alt='ShoeShooter'/></a>
        <Carousel.Caption>
          <h3>ShoeShooter</h3>
          <p className='fs-5 fw-bold'> R$200,00</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
      <a href="/library/Cutters"><Image className='w-75 h-25 mb-5 pb-5 text-center' src={Cutters} alt='Cutters'/></a>
        <Carousel.Caption>
          <h3>Cutters</h3>
          <p className='fs-5 fw-bold'>R$300,00</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='text-center mb-5'>
      <h1 className='text-break text-light'>Exploda seu estilo com Shoeshooting!</h1>
      <p className='fs-4 text-break text-light'>Cada par é um tiro certeiro na moda.</p>
      <div className='Grid'>
      <a href="#"><Image src={Running} className='d-none d-lg-block w-100' alt='Running...' /></a>
      <a href="#"><Image src={RunningCell} className='d-lg-none w-100' alt='Running'/></a>
      </div>
    </div>
    </>
  );
}

export default ControlledCarousel;