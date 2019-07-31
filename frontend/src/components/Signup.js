import React from 'react'
import NavBar from './Navbar'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'
import {SignupContainer, CustomInput, Btn} from '../styles'
import validate from "./ValidationSignup";


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
     //notufucations
      console.log(response)
      props.history.push('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <NavBar/>
        <SignupContainer>
              <h2>Sign up</h2>
           <form onSubmit={handleSubmit} noValidate>
              <CustomInput type="firstName" name="firstName" id="firstName"placeholder="Nombre" onChange={handleInput}/>
              {errors.firstName && <p>{errors.firstName}</p>}
              <CustomInput type="lastName" name="lasttName" id="lastName"placeholder="Apellido" onChange={handleInput}/>
              {errors.lastName && <p>{errors.lastName}</p>}
              <CustomInput type="email" name="email" id="email" placeholder="Email" onChange={handleInput}/>
              {errors.email && <p>{errors.email}</p>}
              <CustomInput type="password" name="password" id="password"  placeholder ="password" onChange={handleInput}/>
              {errors.password && <p>{errors.password}</p>}
            
              <Btn onClick={handleSignup}>Sign up</Btn>
            </form>
      </SignupContainer>
    </div>
  )
}

export default Signup