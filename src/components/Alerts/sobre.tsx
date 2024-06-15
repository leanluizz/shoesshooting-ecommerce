import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
    const [show, setshow] = useState<any>('block')
    const handleClose = () => setshow('none')
  return (
    <div
      className="modal show"
      style={{ display: show, position: 'absolute' }}
    >
      <Modal.Dialog>
        <Modal.Header className='bg-danger bg-gradient' closeButton>
          <Modal.Title className='text-light'>Sobre o site</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-danger bg-gradient'>
          <p className='text-light'>Este site foi feito com objetivo de estudo e prática front-end e back-end,nada nele está a venda ou sendo utilizado pra receber algum lucro ao desenvolvedor ou alguma instituição. </p>
          <p className='text-light'>Site pode ter erros em envios de email ou em algumas imagens de perfil pois é utilizado Firebase como armazenamento gratuito de storage.</p>
          <p className='text-light'>E SendGrid como envio de email, a chave de api pode ter sido invalidada pelo tempo de uso.</p>
          <p className='text-light'>O uso desses serviços é por tempo limitado.</p>
          <p className='text-light'>Caso haja algum erro ou crítica, por favor me contatar pelo email</p>
          <p className='text-light'>Email: <a href='https://mail.google.com' className='text-light' target='_blank'>luizzleandro827@gmail.com</a></p>
          
        </Modal.Body>

        <Modal.Footer className='bg-danger bg-gradient'>
          <Button variant="dark" onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;