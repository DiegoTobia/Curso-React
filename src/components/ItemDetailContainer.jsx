
import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

import data from "../data/data.json"

const Catalogo = () => {

    let { id } = useParams();
    let pintura = data.find(producto => producto.id === parseInt(id));
    console.log(pintura)

    return (
        <main id="inicio" className="main">
            <div>
                <div className="central">
                    <div className="formato-pin-art">
                        <div className="menu-imag">
                            <ul className="prod-ventas" id="prod-ventas">

                                <li key={pintura.id} className="imgs-productos">
                                    <img src={pintura.img} className="radio" alt={pintura.alt} />
                                    <p className="t-prod">{pintura.descripcion}</p>
                                    <p className="t-prod precio">${pintura.precio}</p>
                                    
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h4>PRODUCTO: </h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore ducimus ex omnis neque incidunt veniam excepturi sunt ipsam, architecto debitis rerum porro, nesciunt molestiae iure, aliquam officia sed? Ex!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Catalogo;