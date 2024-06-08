import Catalogo from "./Catalogo";
import data from "../data/data.json"
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react'

const Pinturas = () => {

    const [precioMIN, setprecioMIN] = useState(0);
    const [ORDEN, setORDEN] = useState("recomendados");

    const [productosFiltrados, setProductosFiltrados] = useState(data.filter(pintura => pintura.tipo === "pinturas"));
    const [productosOrdenados, setProductosOrdenados] = useState(data.filter(pintura => pintura.tipo === "pinturas"));

    const [filtros, setFiltros] = useState({
        categorias: [],
        marcas: [],
        precioMin: 0,
        precioMax: Infinity
    });

    useEffect(() => {

        setprecioMIN(filtros.precioMin) 

        let filtrados = data.filter(producto => producto.tipo === "pinturas");

        // Filtrar por precio
        filtrados = filtrados.filter(producto => producto.precio >= filtros.precioMin && producto.precio <= filtros.precioMax);

        // Filtrar por categorías
        if (filtros.categorias.length > 0) {
            filtrados = filtrados.filter(producto => filtros.categorias.includes(producto.atributo.toLowerCase()));
        }

        // Filtrar por marcas
        if (filtros.marcas.length > 0) {
            filtrados = filtrados.filter(producto => filtros.marcas.includes(producto.marca.toLowerCase()));
        }

        setProductosFiltrados(filtrados);
    }, [filtros]);

    useEffect(() => {
        ordenarProductos(ORDEN);
    }, [productosFiltrados, ORDEN]);

    const ordenarProductos = (orden) => {
        const copiaArray = [...productosFiltrados];
        if (orden === "menor_p" || orden === "descuento") {
            copiaArray.sort((a, b) => a.precio - b.precio);
        } else if (orden === "mayor_p") {
            copiaArray.sort((a, b) => b.precio - a.precio);
        }
        setProductosOrdenados(copiaArray);
    };

    const handleOrdenChange = (event) => {
        ordenarProductos(event.target.value);
        setORDEN(event.target.value)
    };

    const getNumericValue = (value, defaultValue) => {
        // Convierte el valor a número y usa defaultValue si es `NaN`
        const numericValue = parseFloat(value);
        return isNaN(numericValue) ? defaultValue : numericValue;
    };

    const handleFiltroChange = (event) => {
        const { name, checked, value } = event.target;
        console.log(name,checked,value)

        let filtros_nuevos = {...filtros};

        if (name === "precioMin") {
            let precio_min = getNumericValue(value, 0) 
            setprecioMIN(precio_min) 
            filtros_nuevos.precioMin = precio_min          
        }else if (name === "precioMax"){
            let precio_max = getNumericValue(value, Infinity)
            if (precio_max >= filtros_nuevos.precioMin) {
                filtros_nuevos.precioMax = precio_max
            } else {
                // Si el precio máximo es menor que el precio mínimo, establecerlo como igual al precio mínimo
                filtros_nuevos.precioMax = filtros_nuevos.precioMin;
                // También puedes mostrar un mensaje de error o realizar alguna otra acción aquí
    
                // Actualizar el precio máximo al precio mínimo después de 1 segundo
                //setprecioMAX(precio_min);
    
            }
        }else if (name === "categorias"){
            let filtroActual = filtros.categorias
            if (checked) {
                filtroActual.push(value.toLowerCase());
            } else {
                filtroActual = filtroActual.filter(filtro => filtro !== value.toLowerCase());
            }
            filtros_nuevos.categorias = filtroActual 
        }else if (name === "marcas"){
            let filtroActual = filtros.marcas
            if (checked) {
                filtroActual.push(value.toLowerCase());
            } else {
                filtroActual = filtroActual.filter(filtro => filtro !== value.toLowerCase());
            }
            filtros_nuevos.marcas = filtroActual 
        }

        setFiltros(filtros_nuevos);
    };
    
    return(
        <main id="inicio" className="main">
            <div>
                <div className="central">
                    <div className="ordenar">
                        <h2 className="h2-pin-art">PINTURAS</h2>
                        <form>
                            <div>
                                <select id="ordenar_select" defaultValue="recomendados" onChange={handleOrdenChange}>
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
                            <form> <input name="categorias" value="Agua" id="form_Agua" type="checkbox" onChange={handleFiltroChange}/> Al agua</form>
                            <form> <input name="categorias" value="Exterior" id="form_Exterior" type="checkbox" onChange={handleFiltroChange}/> Exterior</form>
                            <form> <input name="categorias" value="Pisos" id="form_Pisos" type="checkbox" onChange={handleFiltroChange}/> Pisos</form>
                            <h3 className="pad_button">Marcas</h3>
                            <form> <input name="marcas" value="Inca" id="form_Inca" type="checkbox" onChange={handleFiltroChange}/> Inca</form>
                            <form> <input name="marcas" value="Pintelux" id="form_Pintelux" type="checkbox" onChange={handleFiltroChange}/> Pintelux</form>
                            <h3 className="pad_button">Precio</h3>
                            {/*<input className="input-n" id="form_precio" type="number" min="0" />*/}
                            <form className="inline-inputs">  
                                <input className="input-n" name="precioMin" id="form_precio_min" type="number" defaultValue="0" min="0" onChange={handleFiltroChange}/> 
                                <p>-</p>
                                <input className="input-n" name="precioMax" id="form_precio_max" type="number" min={precioMIN} onChange={handleFiltroChange}/> 
                            </form>
                        </div>
                        <div className="menu-imag">
                            <Catalogo data={productosOrdenados}/>
                            {/*//Ejemplo de un producto
                            <ul className="prod-ventas" id="prod-ventas">
                                <li className="imgs-productos">
                                    <img src="../img/cielo_raso.png" className="radio" alt="pintura para cielo raso" /> 
                                    <p className="t-prod">CIELOS RASOS INCA - 5.0LT</p>
                                    <p className="t-prod precio">$5099</p>
                                    <button className="boton-carrito">Añadir al carrito</button>
                                </li>                                
                            </ul>*/}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Pinturas;