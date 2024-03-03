import React from 'react'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
// import Footer from './Component/Footer/Footer.jsx'
import Footer from './Components/Footer/Footer.jsx'
import {Routes , Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
   <>
   <Header/>
   <BrowserRouter>

   <Routes>

    <Route path='/home' element={<Home />} />
   
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App