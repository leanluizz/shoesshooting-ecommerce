import ErrorCSS from '@/styles/error.module.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import Context from '../Context/context';

export default function Error({animation, typeOfError}: any){
const {show, handleClose} = useContext<any>(Context)
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-danger bg-gradient' closeButton>
          <Modal.Title className='text-light'>Oops ocorreu um erro!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-danger bg-gradient text-light'>{typeOfError}</Modal.Body>
        <Modal.Footer className='bg-danger bg-gradient'>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}