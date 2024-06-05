//import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css'
//import Home from "./components/Home"
import Products from "./components/Products"
import Error from "./components/Error"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='products' element={<Products />}/>
          <Route path='/products/:category' element={<Products />}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
      {/*<ItemListContainer nombre={"Diego"}/>*/}
    </>
  )
}

export default App
