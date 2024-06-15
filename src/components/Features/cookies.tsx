import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }: any) {
  const [show, setShow] = useState(false);
    const [cookiesModal, setCookiesModal] = useState(!show)
  const handleClose = () => setShow(false);
    const cookies = process.browser ? localStorage.getItem('cookies') : null
    useEffect(() => {
        cookies == 'true' ? setCookiesModal(show) :  setCookiesModal(!show)
    }, [])
  return (
    <>
    
      <Offcanvas show={cookiesModal} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>Permissão de cookies</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className='d-flex flex-column'>

            Ao visitar o nosso site, você concede permissão para o uso de cookies. Cookies são pequenos arquivos de texto que são armazenados no seu navegador e nos ajudam a melhorar sua experiência online. Estes cookies podem incluir informações sobre as suas preferências e interações passadas, tornando a sua próxima visita mais eficiente e personalizada.

Tipos de Cookies Utilizados:

Cookies necessários:
Essencial para o funcionamento básico do site. Eles garantem que funções essenciais, como navegação em páginas e acesso a áreas seguras, estejam operacionais.

Cookies de desempenho:
Ajudam-nos a compreender como os visitantes interagem com o site, fornecendo informações sobre as áreas visitadas, o tempo de permanência no site e quaisquer problemas encontrados, permitindo-nos melhorar continuamente a experiência do utilizador.

Cookies de funcionalidade:
Eles melhoram a funcionalidade do site lembrando suas escolhas, como nome de usuário, idioma ou região, proporcionando uma experiência mais personalizada.

Cookies publicitários:
Eles são usados ​​para fornecer anúncios que são mais relevantes para você. Eles também limitam o número de vezes que você vê um anúncio, ajudando na eficácia das campanhas publicitárias.

Controle de Cookies:

Você tem o direito de controlar as permissões de cookies. Você pode ajustar suas preferências a qualquer momento através das configurações do seu navegador. Se preferir não receber cookies, você pode configurar seu navegador para recusá-los. No entanto, tenha em atenção que recusar cookies pode afetar a funcionalidade do site e a sua experiência de utilização.

Ao continuar a utilizar o nosso site sem ajustar as configurações do seu navegador, você aceita o uso de cookies de acordo com esta política.

Para obter mais informações sobre como utilizamos cookies e protegemos a sua privacidade, consulte a nossa Política de Privacidade.

Obrigado por escolher nosso site. Estamos empenhados em fornecer uma experiência online positiva e transparente.
<Button onClick={() => (setCookiesModal(show), localStorage.setItem('cookies', 'true'))} className='btn-danger w-25'>Ok</Button>
</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}