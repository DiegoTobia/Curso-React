const CartWidget = ({dataImg, tipoIcono}) => {

    return(
        <div>
            <img src={dataImg} alt={`imagen de ${tipoIcono}`} />
            <span>1</span>
        </div>
    )

}

export default CartWidget;