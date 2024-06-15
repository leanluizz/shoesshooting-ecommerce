import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Geolocator from '@/img/Sponsors/geolocator.ico'
import QrCoder from '@/img/Sponsors/qr-coder.ico'
import Github from '@/img/Sponsors/Limav-Flat-Gradient-Social-Github.512.png'
import Dog from '@/img/Sponsors/Microsoft-Fluentui-Emoji-3d-Dog-Face-3d.1024.png'
import Money from '@/img/Sponsors/Custom-Icon-Design-Pretty-Office-11-Coin-us-dollar.512.png'
import RoBlue from '@/img/Sponsors/Iconarchive-Robot-Avatar-Blue-1-Robot-Avatar.512.png'
import FastFood from '@/img/Sponsors/Sonya-Swarm-Mayor-Fast-Food.256.png'
import Cat from '@/img/Sponsors/Iconka-Meow-2-Cat-sleep.256.png'

export default function (){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
      setIndex(selectedIndex);
    };
    return(
        <>
    <div className='m-5'>
      <h1 className='text-light'>Patrocinadores</h1>
      <Carousel className='d-none d-lg-block m-5 p-5' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='text-center'>
      <div className='d-flex justify-content-around'>
        <a target='_blank' href="https://geolocator-ip-coords.vercel.app/">
        <Image src={Geolocator} width={200}  alt='Geolocator' />
        </a>
        <a target='_blank' href="https://qr-code-vert-pi.vercel.app/">
        <Image src={QrCoder} width={200}  alt='QrCoder' />
        </a>
        <a target='_blank' href="https://github.com/leanluizz">
        <Image src={Github} width={200}  alt='leanluizz' />
        </a>
        <a target='_blank' href="https://github.com/leanluizz">
        <Image src={Dog} width={200}  alt='Dog' />
        </a>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
      <div className='d-flex justify-content-around'>
        <a target='_blank' href="https://github.com/leanluizz">
        <Image src={Money} width={200}  alt='Money' />
        </a>
        <a target='_blank' href="https://github.com/leanluizz">
        <Image src={RoBlue} width={200}  alt='RoBlue' />
        </a>
        <a target='_blank' href="https://github.com/leanluizz">
        <Image src={FastFood} width={200}  alt='FastFood' />
        </a>
        <a target='_blank' href="https://github.com/leanluizz">
        <Image src={Cat} width={200}  alt='Cat' />
        </a>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Carousel className='d-lg-none m-5' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='text-center'>
        <a href="https://geolocator-ip-coords.vercel.app/">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={Geolocator} alt='Geolocator'/>
        </a>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://qr-code-vert-pi.vercel.app/">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={QrCoder} alt='QrCoder'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://github.com/leanluizz">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={Github} alt='Github'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://github.com/leanluizz">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={Dog} alt='Dog'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://github.com/leanluizz">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={Money} alt='Money'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://github.com/leanluizz">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={RoBlue} alt='RoBlue'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://github.com/leanluizz">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={FastFood} alt='FastFood'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='text-center'>
        <a href="https://github.com/leanluizz">
        <Image className='w-75 h-25 mb-5 pb-5 text-center' src={Cat} alt='Cat'/>
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}