import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Coin from './Pages/Coins/Coin.jsx'
import Footer from './Components/Footer/Footer.jsx'



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
