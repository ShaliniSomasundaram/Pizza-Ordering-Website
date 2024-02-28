import React, { useState } from 'react'
import Home from './components/Home'
import "./App.css"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() { 
  let [cart,setCart] = useState([])
  let [warning,setWarning] = useState(false)


  let handle = (item)=>{
    let ispresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id){
        ispresent = true
      }
    })
    if (ispresent){
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 1000);
      return;
    }
    setCart([...cart,item])

  }


  return (
    <div>
      <BrowserRouter>
      <Nav count={cart.length}/>
      {warning && <div className='warning'><section>Item already exists</section></div>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu handle={handle}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart = {setCart}/>}></Route>
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  )
}

export default App