
const CartWidget = ({dataImg, tipoIcono}) => {

    return(
        <div className="icono-carrito">
            <img src={dataImg} alt={`imagen de ${tipoIcono}`} className="imgs-productos" />
            <span className="cant-prod-carrito">1</span>
        </div>
    )

}

export default CartWidget;