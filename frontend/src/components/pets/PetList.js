import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PetService from '../../services/pet'
import Navbar from '../Navbar'
import {PetsContainer, Btn} from '../../styles'

const petService = new PetService()  


function PetList() {
 const [pets, setPets] = useState([])

  useEffect(()=> {
    petService
    .getAllPets()
    .then(({data}) => {
      console.log(data)
      setPets(prevState => {
        return [...prevState, ...data.pets.puppy]
      })

      })
      .catch(err => {
        console.log(err)
      })
  },[])




      
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
                    <Btn>Ver detalles</Btn>
                  </Link>
               </div>
          )})}
        </section>

        <Link to={`/add-pet`}>
                    <Btn>añadir mascota</Btn>
                  </Link>
   </PetsContainer>
    </div>
  )
}

export default PetList
