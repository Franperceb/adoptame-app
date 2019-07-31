import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PetService from '../../services/pet'
import Navbar from '../Navbar'
import {PetsContainer} from '../../styles'
const petService = new PetService()  


function PetList() {

  useEffect(()=> {
    petService
    .getAllPets()
    .then(({data}) => {
      setPets(prevState => {
        return [...prevState, ...data.pets]
      })

      })
      .catch(err => {
        console.log(err)
      })
  },[])

  const [pets, setPets] = useState([])



      
console.log(pets)

  return (
    <div>
      <Navbar/>
    <PetsContainer> 

      <h1>Mis mascotas</h1>
    

         <section id="list-container">
      
     {pets.map((pet, i)=> {          
        return (
                <div key={i}>
                        <p>{pet.name}</p>
                  
                  <Link to={`/pet-detail/${pet._id}`}>
                    <button>Ver detalles</button>
                  </Link>
               </div>
          )})}
        </section>
   </PetsContainer>
    </div>
  )
}

export default PetList
