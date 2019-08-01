import React, { useEffect } from 'react'
import NavBar from './Navbar'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'
import {SignupContainer, CustomInput, Btn} from '../styles'
import validate from "./ValidationLogin";
import Swal from "sweetalert2";



const Login = (props) => {
  const [form, handleInput , handleSubmit, errors] = useForm(
    submit,
    validate
  )


  function submit() {
    console.log("Submitted Succesfully");
  }


  const authService = new AuthService()

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser')
    // const cookies = document.cookie

    if(loggedUser) return props.history.push('/profile')
  }, [props.history])

  const handleLogin = () => {
    authService.login(form)
      .then(response => {
        Swal.fire({
          position: "center",
          type: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 2500
        });        console.log(response)
        localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
        props.history.push('/')
      })
      .catch(err => console.log(err.response.user))
  }

  return (
    <div>
      <NavBar/> 
      <SignupContainer>
             <div>
              <h2>Log in</h2>
               <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="email">Email</label>
              <CustomInput type="email" name="email" id="email"placeholder="Email"  onChange={handleInput} />
              {errors.email && <p>{errors.email}</p>}
              <label htmlFor="password">Password</label>
              <CustomInput type="password" name="password" id="password"  placeholder="Password"  onChange={handleInput} />
              {errors.password && <p>{errors.password}</p>}
              <Btn onClick={handleLogin}>Log in</Btn>
              </form>
              </div>

      </SignupContainer>
    </div>
  )
}

export default Login
