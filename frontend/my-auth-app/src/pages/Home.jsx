import React from 'react'
import Hero from '../components/Hero'
import Popular from "../components/Popular"
import Saisonal from '../components/Saisonal'
import Footer from "../components/Footer"
import Summer from '../components/Summer'
function Home() {
  return (
    <div>
   
      <Hero />
      <Popular />
      <Saisonal />
      <Summer />
      <Saisonal />
   
     <Footer />
    </div>
  )
}

export default Home