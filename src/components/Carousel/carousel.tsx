import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import CarouselCSS from '@/styles/carousel.module.css'
import ShoesYellow from '@/img/Carousel/pexels-melvin-buezo-2529157.jpg'
import ShoesBrown from '@/img/Carousel/pexels-oziel-gómez-1755386.jpg'
import ShoesBlack from '@/img/Carousel/pexels-aditya-aiyar-1407354.jpg'

function UncontrolledExample() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item>
        <Image src={ShoesYellow} id='carousel-img'  className={CarouselCSS.carouselimg} alt="carousel" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ShoesBrown} id='carousel-img' className={CarouselCSS.carouselimg} alt="carousel" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ShoesBlack} id='carousel-img' className={CarouselCSS.carouselimg} alt="carousel" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;