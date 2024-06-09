//import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css'
//import Home from "./components/Home"
import Productos from "./components/Productos"
//import Pinturas from "./components/Pinturas"
//import Accesorios from "./components/Accesorios"
import Error from "./components/Error"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer nombre={"Diego"}/>}/> 
          <Route path='/categoria/:id' element={<Productos />}/> 
          <Route path='/item/:id' element={<ItemDetailContainer />}/> 
          {/* //tipo={":id"}  <Route path='/categoria/pinturas' element={<Productos tipo={"pinturas"} />}/>
          <Route path='/categoria/accesorios' element={<Productos tipo={"accesorios"} />}/>*/}
          {/*<Route path='/item/:id' element={<ItemDetailContainer />}/>*/}
          <Route path='/*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
      {/*<ItemListContainer nombre={"Diego"}/>*/}
    </>
  )
}

export default App
