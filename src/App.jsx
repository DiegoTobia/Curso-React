//import { useState } from 'react'
import './App.css'
import CartWidget from "./components/CartWidget"
import cart from "./assets/cart.svg" 

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <CartWidget dataImg={cart} tipoIcono={"carrito"}/>

    </>
  )
}

export default App
