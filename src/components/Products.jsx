const Products = () => {
    return(
        <main id="inicio" className="main">
            <div>
                <div className="central">
                    <div className="ordenar">
                        <h2 className="h2-pin-art">PINTURAS</h2>
                        <form>
                            <div>
                                <select id="ordenar_select" defaultValue="recomendados">
                                    <option value="recomendados">Ordenar: Recomendados</option>
                                    <option value="categoria">Ordenar: Categoria</option>
                                    <option value="menor_p">Ordenar: Menor precio</option>
                                    <option value="mayor_p">Ordenar: Mayor precio</option>
                                    <option value="descuento">Ordenar: Descuento</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="formato-pin-art">
                        <div className="menu-compra">
                            <h3 className="pad_button">Categorias</h3>
                            <form> <input name="Agua" id="form_Agua" type="checkbox" /> Al agua</form>
                            <form> <input name="Exterior" id="form_Exterior" type="checkbox" /> Exterior</form>
                            <form> <input name="Pisos" id="form_Pisos" type="checkbox" /> Pisos</form>
                            <h3 className="pad_button">Marcas</h3>
                            <form> <input name="Inca" id="form_Inca" type="checkbox" /> Inca</form>
                            <form> <input name="Pintelux" id="form_Pintelux" type="checkbox" /> Pintelux</form>
                            <h3 className="pad_button">Precio</h3>
                            {/*<input className="input-n" id="form_precio" type="number" min="0" />*/}
                            <form className="inline-inputs">  
                                <input className="input-n" id="form_precio_min" type="number" min="0" defaultValue="0" /> 
                                <p>-</p>
                                <input className="input-n" id="form_precio_max" type="number" min="0" /> 
                            </form>
                        </div>
                        <div className="menu-imag">
                            <ul className="prod-ventas" id="prod-ventas">
                                {/* Ejemplo de un producto
                                <li className="imgs-productos">
                                    <img src="../img/cielo_raso.png" className="radio" alt="pintura para cielo raso" /> 
                                    <p className="t-prod">CIELOS RASOS INCA - 5.0LT</p>
                                    <p className="t-prod precio">$5099</p>
                                    <button className="boton-carrito">Añadir al carrito</button>
                                </li>
                                */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products;