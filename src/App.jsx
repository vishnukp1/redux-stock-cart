import CartPage from "./pages/CartPage"
import Home from "./pages/Home"


import { Route,Routes } from "react-router-dom"


function App() {

  return (
  <div>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<CartPage/>} />

    </Routes>
  </div>
  )
}

export default App
