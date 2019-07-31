import React from 'react'
import useForm from '../../hooks/useForm'
import PostService from '../../services/post'
import NavBar from '../Navbar'
import {PetDetailContainer, CustomInput , Btn } from '../../styles'
function PostCreate(props) {
  const rawUser = localStorage.getItem("loggedUser");
  const loggedUser = JSON.parse(rawUser)
	const [form, handleInput] = useForm();
  
  const postService = new PostService();	

  const createPost =  ( ) =>{
    postService
    .createPost(form)
    .then(response => {
      console.log(response)
     
      props.history.push('/posts')
    })
    .catch(err =>{
      console.log(err.response)
    })
  }
		


  return (
    <div>
      <NavBar/>
      <PetDetailContainer>
          <h1>Publica tu anuncio </h1>
        <div>        
            <label>Yo soy:</label>
            <CustomInput type="text" name="firstName" placeholder="Escribe algo" onChange={handleInput}  defaultValue={loggedUser.firstName} />
           
            <label>Titulo del anuncio:</label>
            <CustomInput type="text" name="title" onChange={handleInput} placeholder="Escribe el titulo"/>
            
            <label>email:</label>
            <CustomInput type="text" name="email" onChange={handleInput}defaultValue={loggedUser.email}  />
          
            <label> Contacto:</label>
            <CustomInput type="text" name="phoneNumber" onChange={handleInput} defaultValue={loggedUser.phoneNumber} />
           
            <label>Escribe el asunto:</label>
            <CustomInput type="text" name="content" onChange={handleInput} placeholder= "Ejemplo: Busco un perro chico de raza labrador.." />
             

        </div>
      <Btn onClick={createPost} >Crear Anuncio</Btn>
        </PetDetailContainer>
 
    </div>
  )
}

export default PostCreate
