//import { useState } from 'react'

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar />

      <ItemListContainer nombre={"Diego"}/>

    </>
  )
}

export default App
