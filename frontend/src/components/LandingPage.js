import React from 'react'
import NavBar from  './Navbar'
import DogButton from '../images/DogLanding.png'
import {LandingContainerOne, Btn} from '../styles'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (  
        <div className="home-container">
             <NavBar/>
            <LandingContainerOne>
              <img src={DogButton} alt="DogMain"/> 
              <h1>¡Encuentra el dueño ideal para tu perro !</h1>
            
              <div>
              <h2>Anuncia para encontrar o buscar un amigo</h2>
           <Link to ='/add-post'><Btn>Anuncia</Btn></Link>
              </div>
           </LandingContainerOne>
            
      </div>
    )
  }
  export default LandingPage