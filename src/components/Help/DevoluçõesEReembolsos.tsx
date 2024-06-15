export default function DevolucoesEReembolsos(){
    const styeP = "text-dark fs-4"
    const styleDiv = "animate__slower	3s animate__infinite	infinite animate__animated animate__shakeY m-2 p-5 bg-light border border-danger"
    return(
        <div className="p-3 mx-auto">
        <div className={styleDiv}>
        <h2 className='text-center'>Devolução</h2>
        <p className={styeP}>Pedido pode ser devolvido em casos de:</p>
        <ul style={{listStyleType: "disc"}}>
            <li>Envio danificado.</li>
            <li>Produto não identificado em suas compras.</li>
            <li>Troca de produto durante os 3 dias apos o envio.</li>
            <li>Caso de reembolso autorizado.</li>
        </ul>
        </div>

        <div className={styleDiv}>
        <h2 className='text-center'>Reembolso</h2>
        <p className={styeP}>Você pode pedir uma analise de reembolso dos seus produtos aqui em <a target="_blank" href="/services/reembolso" className="text-danger">REEMBOLSO</a></p>
        <p className={styeP}>(Lembrando que você precisa estar logado).</p>
        </div>
    </div>
    )
}