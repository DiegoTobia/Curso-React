
import { Link } from "react-router-dom"
import React from 'react';

const Catalogo = ({ data }) => {
    return (
        <ul className="prod-ventas" id="prod-ventas">
            {data.map((pintura) => (
                <li key={pintura.id} className="imgs-productos">
                    <Link to={`/item/${pintura.id}`} className="nav-link active format-link"> <img src={pintura.img} className="radio" alt={pintura.alt} /> </Link>
                    {/* <img src={pintura.img} className="radio" alt={pintura.alt} /> */}
                    <p className="t-prod">{pintura.descripcion}</p>
                    <p className="t-prod precio">${pintura.precio}</p>
                    
                </li>
            ))}
        </ul>
    );
}

export default Catalogo;

//, agregar_compra
//<button className="boton-carrito" onClick={() => agregar_compra(pintura)}>
//Añadir al carrito
//</button>