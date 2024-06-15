import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Política de Privacidade e Finalidade do Site</h4>
        <h5>Data da última atualização: 30-08-2023</h5>
        <p>Bem-vindo ao nosso site! Queremos garantir a você, nosso visitante, que este site tem como único propósito fins de demonstração e estudo. Não temos produtos à venda, e estamos dedicados a proteger a sua privacidade e os seus dados.</p>
        <h5>Propósito de Demonstração e Estudo</h5>
        <p>Este site foi criado com o objetivo exclusivo de demonstrar habilidades e conhecimentos em design, desenvolvimento e tecnologia da informação. Ele não é destinado a fins comerciais, vendas ou divulgação de produtos ou serviços.</p>
        <h5>Proteção de Dados Pessoais</h5>
        <p>Entendemos a importância da sua privacidade. Nenhum dado pessoal fornecido por você será compartilhado, vendido ou divulgado a terceiros. Quaisquer informações que você voluntariamente nos fornecer, como nome, e-mail ou outras informações pessoais, serão tratadas com o máximo cuidado e segurança.</p>
        <h5>Uso Limitado de Informações</h5>
        <p>Quaisquer informações fornecidas por você durante a sua interação com este site serão usadas apenas para fins de demonstração, estudo e eventual contato relacionado às questões que você possa ter. Não enviamos comunicações de marketing nem compartilhamos dados com terceiros.</p>
        <h5>Segurança dos Dados</h5>
        <p>Implementamos medidas de segurança para proteger as informações fornecidas por você contra acesso não autorizado ou uso indevido. Utilizamos tecnologias padrão do setor para garantir a integridade dos seus dados.</p>
        <h5>Aviso Legal</h5>
        <p>Esteja ciente de que, como este site é destinado a fins de demonstração e estudo, qualquer conteúdo apresentado aqui pode ser fictício ou simulado. Não representamos nenhuma entidade real nem oferecemos produtos ou serviços reais.</p>
        <h5>Contato</h5>
        <p>Se você tiver alguma dúvida sobre esta política de privacidade ou sobre o propósito deste site, sinta-se à vontade para entrar em contato conosco através luizzleandro827.</p>
        <p>Agradecemos por visitar o nosso site de demonstração e estudo. A sua privacidade é importante para nós, e estamos comprometidos em proporcionar uma experiência segura e informativa.</p>
        <p>Atenciosamente,
          <ul className='p-0'>
          <li>Leandro Gomes</li>
          <li>Desenvolvedor</li>
          <li>luizzleandro827@gmail.com</li>
          </ul>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-danger bg-gradient border-0' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    
    <p className='text-center'><Link href='' className='bg-transparent border-0 text-light ' onClick={() => setModalShow(true)}>
    Políticas de privacidade
      </Link>
      </p>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}