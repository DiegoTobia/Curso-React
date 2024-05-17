import CartWidget from "./CartWidget"
import cart from "../assets/cart.svg"

const NavBar = () => {

    return(
        <nav class="encabezado navbar navbar-expand-md container-fluid">
            <div class="encabezado_abajo  container-fluid">
                <div class="nav">
                    <a class="navbar-brand format-link" href="#inicio">
                        <i class="icon-empresa bi bi-paint-bucket"></i>
                        <h1 class="logo logo-tit"> PROPIOS </h1>

                    </a>
                    <button class="nav navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="cabeza collapse navbar-collapse" id="navbarSupportedContent">  
                    <div class="nav">
                        <ul class="menu">
                            <li class="nav-item menu-item"><a href="#inicio" class="nav-link active format-link">Pinturas</a></li>
                            <li class="nav-item menu-item"><a href="#inicio" class="nav-link active format-link">Accesorios</a></li>
                            <li class="nav-item menu-item"><a href="#inicio" class="nav-link active format-link">Sucursal</a></li>
                            <li class="nav-item menu-item"><a href="#inicio" class="nav-link active format-link">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="nav">
                        <ul class="menu">
                            <li class="nav-item menu-item"><a href="#inicio" class="nav-link active format-link">Buscar</a></li>
                            <li class="nav-item menu-item">
                                <a href="#inicio" class="nav-link active format-link">
                                    <CartWidget dataImg={cart} tipoIcono={"carrito"}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;