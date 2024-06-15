//Animate
import 'animate.css'
export default function OndeEstaMeuPedido (){
    const styeP = "text-dark fs-4"
    const styleDiv = "animate__slower	3s animate__infinite	infinite animate__animated animate__shakeY m-2 p-5 bg-light border border-danger"
    return (
        <div className="p-3 mx-auto">
            <div className={styleDiv}>
            <h2 className='text-center'>Pedidos</h2>
            <p className={styeP}>Você pode olhar nas configurações o <a target="_blank" className="text-danger" href="/settings/config">STATUS</a> do seu pedido (Lembrando que você precisa possuir uma conta).</p>
            </div>
            <div className={styleDiv}>
            <h2 className='text-center'>Rastreio</h2>
            <p className={styeP}>Você pode solicitar código de rastreio do correios com nossas atendentes.</p>
            </div>
        </div>
    )
}