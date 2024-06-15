import { ButtonGroup } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ImgTest from '@/img/Features/three-dots-vertical.svg'
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Context from '../Context/context';

function DropDirectionExample(props: any) {
  const { header, setFavoritos }: any = useContext(Context)


    const Delete = (favs: any, shoe: any) => {
      const Dados = favs.filter((e: any) => {
          return e.nameshoe == shoe
      })
      
     const index = favs.findIndex((item: any) => item.nameshoe === shoe);
     if (index !== -1) {
      favs.splice(index, 1);
      console.log(favs); // Verifique se o item foi removido do array
      setFavoritos([...favs]); // Atualize o estado diretamente com o novo array
    }
      
      axios.post('/api/DeleteShoeFav', {
        iduser: Dados[0].iduser,
        nameshoe: Dados[0].nameshoe
      },header)
      .then(resp => console.log(resp))      
    }

  return (
    <>
      <div>
        {['start'].map(
          (direction) => (
            
            <DropdownButton
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                zIndex: '999',
              }}
              as={ButtonGroup}
              key={direction}
              id={``}
              drop={direction as any}
              variant="outline-light"
              title={<>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
              </>}
            >
              <Dropdown.Item href={props.link} target="_blank" className='bg-danger text-light' eventKey="1">Página</Dropdown.Item>
              <Dropdown.Item onClick={() => Delete(props.fav, props.shoe)} className='bg-dark text-light' eventKey="2">Delete</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
    </>
  );
}

export default DropDirectionExample;

