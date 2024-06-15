import Image from "next/image";
import 'react-bootstrap';
import RedShoe from '@/img/Gallery/wengang-zhai-_fOL6ebfECQ-unsplash-removebg-preview.png'
import Tuks from '@/img/Gallery/mojtaba-fahiminia-t4g1gctAaKk-unsplash-removebg-preview.png'
import WhiteShoe from '@/img/Gallery/pexels-montage-art-media-6705219-removebg-preview.png'
import ShoesWhite from '@/img/Gallery/pexels-terrance-barksdale-11820507-removebg-preview.png'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function () {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
      setIndex(selectedIndex);
    };

    return(
        <>
        <h1 className="text-light m-4 p-4">Mais vendidos</h1>
        <div className="d-none d-lg-flex text-center m-5 p-5 justify-content-center">

        <div className='m-1 bg-dark  h-25 mb-5'>
        <h3 className='text-light'>RedShoe</h3>
        <a href="/library/RedShoe"><Image className='w-50 h-50 text-center' src={RedShoe} alt='ShoeShooter'/></a>
        <p className='fs-5 fw-bold text-light'>R$80,75</p>
        </div>
        <div className='m-1 bg-dark  h-25 mb-5'>
        <h3 className='text-light'>Tuks</h3>
        <a href="/library/Tuks"><Image className='w-50 h-50 text-center' src={Tuks} alt='ShoeShooter'/></a>
        <p className='fs-5 fw-bold text-light'>R$100,00</p>
        </div>
        <div className='m-1 bg-dark  h-25 mb-5'>
        <h3 className='text-light'>WhiteShoe</h3>
        <a href="/library/WhiteShoe"><Image className='w-50 h-50 text-center' src={WhiteShoe} alt='ShoeShooter'/></a>
        <p className='fs-5 fw-bold text-light'>R$25,99</p>
        </div>
        <div className='m-1 bg-dark  h-25 mb-5'>
        <h3 className='text-light'>Numberr</h3>
        <a href="/library/Numberr"><Image className='w-50 h-50 text-center' src={ShoesWhite} alt='ShoeShooter'/></a>
        <p className='fs-5 fw-bold text-light'>R$120,10</p>
        </div>

        </div>
        <Carousel className='d-lg-none m-5' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="text-center">
      <a href="/library/RedShoe"><Image className='w-50 h-50 text-center w-75 h-25 mb-5 pb-5' src={RedShoe} alt='ShoeShooter'/></a>
        <Carousel.Caption>
        <h3 className='text-light'>RedShoe</h3>
        <p className='fs-5 fw-bold text-light'>R$80,75</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center">
      <a href="/library/Tuks"><Image className='w-50 h-50 text-center w-75 h-25 mb-5 pb-5' src={Tuks} alt='ShoeShooter'/></a>
        <Carousel.Caption>
        <h3 className='text-light'>Tuks</h3>
        <p className='fs-5 fw-bold text-light'>R$100,00</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="text-center">
      <a href="/library/WhiteShoe"><Image className='w-50 h-50 text-center w-75 h-25 mb-5 pb-5' src={WhiteShoe} alt='ShoeShooter'/></a>
        <Carousel.Caption>
        <h3 className='text-light'>WhiteShoe</h3>
        <p className='fs-5 fw-bold text-light'>R$25,99</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="text-center">
      <a href="/library/Numberr"><Image className='w-50 h-50 text-center w-75 h-25 mb-5 pb-5' src={ShoesWhite} alt='ShoeShooter'/></a>
        <Carousel.Caption>
        <h3 className='text-light'>Numberr</h3>
        <p className='fs-5 fw-bold text-light'>R$120,10</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}