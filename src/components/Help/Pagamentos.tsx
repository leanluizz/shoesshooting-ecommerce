//Animate
import 'animate.css'
export default function Pagamentos(){
    const styeP = "text-dark fs-4"
    const styleDiv = "animate__slower	3s animate__infinite	infinite animate__animated animate__shakeY m-2 p-5 bg-light border border-danger"
    return (
        <div className="p-3 mx-auto">
            <div className={styleDiv}>
            <h2 className='text-center'>Pagamentos</h2>
            <p className={styeP}>Os pagamentos podem ser feitos vias crédito, débito, pix ou boleto.</p>
            <p className={styeP}>Em casos de cobranças a mais, por favor contatar com uma de nossas atendentes.</p>
            </div>
        </div>
    )
}