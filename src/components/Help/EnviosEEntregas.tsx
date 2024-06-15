//Animate
import 'animate.css'
export default function EnviosEEntregas(){
    const styeP = "text-dark fs-4"
    const styleDiv = "animate__slower	3s animate__infinite	infinite animate__animated animate__shakeY m-2 p-5 bg-light border border-danger"
    return (
        <div className="p-3 mx-auto">
            <div className={styleDiv}>
            <h2 className='text-center'>Envios</h2>
            <p className={styeP}>Os envios sempre são feitos apos a confirmação de compra que chega em nosso sistema de dados que possui a data do seu pedido.</p>
            </div>
            <div className={styleDiv}>
            <h2 className='text-center'>Entregas</h2>
            <p className={styeP}>As entregas sempre chegam a principal unidade de correios da sua cidade. </p>
            </div>
        </div>
    )
}