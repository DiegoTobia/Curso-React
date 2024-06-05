const MostrarCarrito = () => {
    return(
        <>
        <div className="carrito" id="carrito-seccion">
            <div className="carrito-titulo">
                <h2 className="carrito-nombre">Carrito </h2>
                <button className="carrito-cerrar" onClick={ocultarCarrito}>Cerrar</button>
            </div>
            <div >
                <div id="carrito-vacio">
                    <h4 className="h1-nombre">El carrito se encuentra Vacio</h4>
                </div>
                <div id="final-compra">
                    <h4 className="h1-nombre">Gracias por su Compra!</h4>
                </div>
                <div className="carrito-productos" id="carrito-productos">
                    
                </div>
                <div className="carrito-total" id="carrito-total-div">
                    <h2 className="h1-nombre">Total: <span id="carrito-total">$0</span></h2>
                </div>
                <button className="input finalizar-compra" id="finalizar-compra">Finalizar compra</button>
            </div>
        </div> 
        </>
    )
}

export default MostrarCarrito;