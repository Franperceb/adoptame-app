import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import PetService from '../../services/pet'
import PetEdit from './PetEdit'
import {PetDetContainer, Btn} from '../../styles'
import NavBar from '../../components/Navbar'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'



const petService = new PetService()
let editClick = false;


function PetDetail(props) {
  const [pet, setPet] = useState({})
  const [form, handleInput] = useForm()

  
  useEffect(() => {
     petService
      .getOnePet(props.match.params.id)
      .then(({ data }) => {
        setPet(prevState => {
          return {
            ...prevState,
            ...data.pet
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.match.params.id])


const deletePet = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        petService
        .deletePet(props.match.params.id)
          .then(({ data }) => {
            Swal.fire('Deleted!', data.msg, 'success')
            props.history.push('/pets')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        return
      }
    })
  }

  const updatePet = () => {
      petService
      .updatePet(props.match.params.id, form)
      .then(({ data }) => {
        setPet(prevState => {
          return {
            ...prevState,
            ...data.pets
          }
        })
        props.history.push('/pets')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <NavBar/>
   <PetDetContainer>
            <h1>Tu mascota</h1> 
            <h2>{pet.name}</h2>
          <div>
            <p>Raza:{pet.race}</p>
            <p>Genero:{pet.gender}</p>
            <p>Edad:{pet.age} años</p>
            <p>Descripcion:{pet.description}</p>
            <p>Informacion adicional{pet.extraInfo}</p>
            </div>
              <Btn onClick={deletePet}>Delete</Btn>
            <Link to ='/pets' >  <Btn >Regresar</Btn> </Link>

    </PetDetContainer>
        { editClick=== true ? <PetEdit pet={pet} handleInput={handleInput} updatePet={updatePet} />
            :  console.log(editClick)}
            </div>
  )
}

export default PetDetail






