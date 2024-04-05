import React, { useState } from 'react'
import AllNews from './pages/AllNews'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [category,setCategory]=useState('general')
  const [country,setCountry]=useState('us')
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <AllNews category={category} country={country}/>
      <Footer />
    </div>
  )
}

export default App
