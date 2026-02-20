import React from 'react'
import  {Navbar}  from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testmonials from './Components/Testmonials/Testmonials'
import Contact from './Components/Contact/Contact'
import Fooder from './Components/Fooder/Fooder'
import ViodePlay from './Components/ViodePlayer/ViodePlay'


const App = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
     <div className="container">
           <Title subTitle='Our PROGRAM' title='What we Offer'/>
           <Program/>
           <About/>
           <Title subTitle='Gallery' title='Campus Photos'/>
           <Campus/>
           <Title subTitle='TESTMONIALS' title='What Student Says'/>
            <Testmonials/>

            <Title subTitle='Contact Us' title='Get in touch'/>
            <Contact/>
            <Fooder/>
            
     </div>
          <ViodePlay/>
    </div>
  )
}

export default App

