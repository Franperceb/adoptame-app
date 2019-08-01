import React from 'react'
import NavBar from './Navbar'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'
import {SignContainer, CustomInput, Btn} from '../styles'
import validate from "./ValidationSignup";
import DoggySignup from "../images/DoggieSignup.png"

const Signup = (props) => {

  const[form, handleInput, handleSubmit, errors] = useForm(
    submit,
    validate
  )

  function submit() {
    console.log("Submitted Succesfully");
  }


  const authService = new AuthService()

  const handleSignup = () => {
    authService
    .signup(form)
    .then(response => {
      console.log(response)
      props.history.push('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <NavBar/>
        <SignContainer>
            <div>   
              <h1>Sign up</h1>
            
           <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="firstName">Nombre:  </label>            
              <CustomInput type="firstName" name="firstName" id="firstName"placeholder="Nombre" onChange={handleInput}/>
              {errors.firstName && <p>{errors.firstName}</p>}
              <label htmlFor="lastName">Apellido:  </label>            
              <CustomInput type="lastName" name="lasttName" id="lastName"placeholder="Apellido" onChange={handleInput}/>
              {errors.lastName && <p>{errors.lastName}</p>}
              <label htmlFor="email">Email:  </label>            
              <CustomInput type="email" name="email" id="email" placeholder="Email" onChange={handleInput}/>
              {errors.email && <p>{errors.email}</p>}
              <label htmlFor="password">Contraseña:  </label>            
              <CustomInput type="password" name="password" id="password"  placeholder ="password" onChange={handleInput}/>
              {errors.password && <p>{errors.password}</p>}
            
              <Btn onClick={handleSignup}>Sign up</Btn>
            </form>
            </div>
            <img src={DoggySignup} alt="DoggySignup" id="doggy"/>
      </SignContainer>
    </div>
  )
}

export default Signup