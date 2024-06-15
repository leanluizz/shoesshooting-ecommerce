import { useState } from 'react';
import Image from 'next/image';
import Speed from '@/img/Gallery/clique-images-hSB2HmJYaTo-unsplash (1).jpg'
import Strong from '@/img/Gallery/mob-alizadeh-93or5BgHobk-unsplash (1).jpg'
import Style from '@/img/Gallery/dom-hill-JqZlSnI2ctA-unsplash (1).jpg'
import Button from 'react-bootstrap/Button';

export default function () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
        <div className='text-center bg-danger p-5'>
      <h3 className='text-dark text-break'>Quer ver mais desses tênis?</h3>
      <h4 className='text-dark'>Clique abaixo para dar uma olhada nos nossos tênis!</h4>
      <Button href='/library/allShoes' className='bg-dark bg-gradient border-0'>Mais tênis</Button>
    </div>
    <div className='d-none p-5 m-5 justify-content-center d-lg-flex'>
      <div>
      <h2 className='text-light text-center'>Sport</h2>
      <Image src={Speed}  className='w-100' alt='Speed'/>
      </div>
      <div>
      <h2 className='text-light text-center'>Strong</h2>
      <Image src={Strong} className='w-100' alt='Strong' />
      </div>
      <div>
      <h2 className='text-light text-center'>Style</h2>
      <Image src={Style} className='w-100' alt='Style' />
      </div>
    </div>
    </>
  );
}
