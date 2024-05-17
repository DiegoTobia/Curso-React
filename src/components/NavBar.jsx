import CartWidget from "./CartWidget"
import cart from "../assets/cart.svg"

const NavBar = () => {

    return(
        <header>
            <nav className="encabezado navbar navbar-expand-md container-fluid">
                <div className="encabezado_abajo  container-fluid">
                    <div className="nav">
                        <a className="navbar-brand format-link" href="#inicio">
                            <i className="icon-empresa bi bi-paint-bucket"></i>
                            <h1 className="logo logo-tit"> PROPIOS </h1>

                        </a>
                        <button className="nav navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="cabeza collapse navbar-collapse" id="navbarSupportedContent">  
                        <div className="nav">
                            <ul className="menu">
                                <li className="nav-item menu-item"><a href="#inicio" className="nav-link active format-link">Pinturas</a></li>
                                <li className="nav-item menu-item"><a href="#inicio" className="nav-link active format-link">Accesorios</a></li>
                                <li className="nav-item menu-item"><a href="#inicio" className="nav-link active format-link">Sucursal</a></li>
                                <li className="nav-item menu-item"><a href="#inicio" className="nav-link active format-link">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="nav">
                            <ul className="menu">
                                <li className="nav-item menu-item"><a href="#inicio" className="nav-link active format-link">Buscar</a></li>
                                <li className="nav-item menu-item">
                                    <a href="#inicio" className="nav-link active format-link">
                                        <CartWidget dataImg={cart} tipoIcono={"carrito"}/>
                                    </a>
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