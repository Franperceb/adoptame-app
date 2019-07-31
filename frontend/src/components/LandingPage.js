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
              <h1>¡El cuidado de tu mejor amigo en las mejores manos!</h1>
            
              <div>
              <h2>Encuentra el cuidador ideal en  Puppy Care</h2>
           <Link to ='/search'><Btn>Buscar</Btn></Link>
              </div>
           </LandingContainerOne>
            
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
          
      </div>
    )
  }
  export default LandingPage