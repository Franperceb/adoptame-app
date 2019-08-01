import React from 'react'
import useForm from '../../hooks/useForm'
import PetService from '../../services/pet'
import {PetDetailContainer,CustomInput, Btn} from '../../styles'
import NavBar from '../../components/Navbar'
import Doggie from '../../images/doggieAdd.jpg'
function PetCreate(props) {
    
	const [form, handleInput] = useForm();
  
  const petService = new PetService();	

  const createPet =  ( ) =>{
    petService
    .createPet(form)
    .then(response => {
      console.log(response)
      props.history.push('/pets')
    })
    .catch(err =>{
      console.log(err.response)
    })
  }


  return (
     <div>
          <NavBar/>
       <PetDetailContainer>
                        <h1>Añade a tu perro</h1>
                    <div>
                        <label>Nombre:</label>
                        <CustomInput type="text" name="name" placeholder="Nombre" onChange={handleInput} />
                     
                      
                        <label>Raza:</label>
                        <CustomInput type="text" name="race" placeholder="Raza" onChange={handleInput} />
                      
                    
                        <label>Genero:</label>
                        <CustomInput type="text" name="gender" placeholder="Genero" onChange={ handleInput} />
                      
                      
                        <label>Edad:</label>
                        <CustomInput type="text" name="age" placeholder="Edad" onChange={handleInput} />
                      
                        <label>Descripcion del perro:</label>
                        <CustomInput type="text" name="description" placeholder="Caracteristicas del perro" onChange={handleInput} />
                      
                        <label>Informacion adicional(vacunas, comportamiento,etc):</label>
                        <CustomInput type="text" name="extraInfo" placeholder="Informacion adicional" onChange={handleInput} />
                   </div>   
                     
                      <Btn onClick={createPet}> Create </Btn>
                     <img src={Doggie} alt="doggy"/>     
                        
      </PetDetailContainer>
    </div>
  )
}

export default PetCreate
