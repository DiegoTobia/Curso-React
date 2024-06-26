
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import cart from "../assets/cart.svg"

import data from '../data/data.json';

const NavBar = () => {

    const atributos = [...new Set(data.map(producto => producto.tipo))];

    const capitalizeFirstLetter = (string) => {
        return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
      };

    return(
        <header>
            <nav className="encabezado navbar navbar-expand-md container-fluid">
                <div className="encabezado_abajo  container-fluid">
                    <div className="nav">
                        <Link className="navbar-brand format-link" to="/">
                            <i className="icon-empresa bi bi-paint-bucket"></i>
                            <h1 className="logo logo-tit"> PROPIOS </h1>
                        </Link>
                        <button className="nav navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="cabeza collapse navbar-collapse" id="navbarSupportedContent">  
                        <div className="nav">
                            <ul className="menu">
                                
                                {atributos.map((attr, index) => (
                                    <li className="nav-item menu-item" key={index}>
                                        <Link to={`/categoria/${attr}`} className="nav-link active format-link"> {capitalizeFirstLetter(attr)} </Link>
                                    </li>
                                ))}

                                {/*<li className="nav-item menu-item"><Link to="/categoria/pinturas" className="nav-link active format-link">Pinturas</Link></li>
                                <li className="nav-item menu-item"><Link to="/categoria/accesorios" className="nav-link active format-link">Accesorios</Link></li>*/}
                                <li className="nav-item menu-item"><Link to="/" className="nav-link active format-link">Sucursal</Link></li>
                                <li className="nav-item menu-item"><Link to="/" className="nav-link active format-link">Contacto</Link></li>
                            </ul>
                        </div>
                        <div className="nav">
                            <ul className="menu">
                                <li className="nav-item menu-item"><a to="/" className="nav-link active format-link">Buscar</a></li>
                                <li className="nav-item menu-item">
                                    <Link to="/" className="nav-link active format-link">
                                        <CartWidget dataImg={cart} tipoIcono={"carrito"}/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default NavBar;