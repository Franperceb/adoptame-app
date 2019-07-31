import React from 'react'
import { PetDetContainer,CustomInput,Btn} from '../../styles'

function PetEdit({ handleInput, updatePet, pet }) {
    return (
  <div >
   <PetDetContainer>
      <div>
       <p>
         <label>Nombre</label>
         <CustomInput type="text" name="name" placeholder="Nombre" onChange={handleInput} />
       </p>
       <p>
         <label>Raza</label>
         <CustomInput type="text" name="race" placeholder="Raza" onChange={handleInput} />
       </p>
       <p>
         <label>Genero</label>
         <CustomInput type="text" name="gender" placeholder="Genero" onChange={ handleInput} />
       </p>
       <p>
         <label>Edad</label>
         <CustomInput type="text" name="age" placeholder="Edad" onChange={handleInput} />
       </p> <p>
         <label>Descripcion del perro:</label>
         <CustomInput type="text" name="description" placeholder="Caracteristicas del perro" onChange={handleInput} />
       </p>
       <p>
         <label>Informacion adicional(vacunas, comportamiento,etc):</label>
         <CustomInput type="text" name="extraInfo" placeholder="Informacion adicional" onChange={handleInput} />
       </p>  
        </div>
           <Btn onClick={updatePet}>Guardar</Btn>
     </PetDetContainer>
       
   </div>
       
    )
  }
  
  export default PetEdit