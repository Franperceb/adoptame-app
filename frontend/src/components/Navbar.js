import React ,  {useState} from 'react'
import {Link} from 'react-router-dom'
import IconLogo from '../images/logo.svg'
import {Nav} from '../styles'
import AuthService from "../services/auth";

const Navbar = (props) => {
  const rawUser = localStorage.getItem("loggedUser");
	const [loggedUser] = useState(JSON.parse(rawUser)) 
  const authService = new AuthService();

  const handleLogout = () => {
		authService
			.logout()
			.then(() => {
				localStorage.removeItem("loggedUser");
				props.history.push("/");
			})
			.catch(err => console.log(err));
  };
  

  return (
    <Nav>
      <header >
      <nav>
      <div></div>
      <div>
      <img src={IconLogo} width= "35"  alt="pawIcon"/>
      <b><p> Adogtame </p> </b>
      </div>
      <div></div>
       <div>
       {!loggedUser ?    
        <ul>
          <li>
          <Link to='/'><p>Home</p></Link>
          </li>
          <li>
            <Link to='/login'><p>Login</p></Link>
          </li>
          <li>
          <Link to='/signup'><p>Signup</p></Link>
          </li>
          
        </ul> : 
        <ul>
          <li>
          <Link to='/'><p >Home</p></Link>
          </li>
          <li>
         <Link to='/profile'><p>Profile</p></Link>
          </li>
          <li>
         <Link to='/pets'><p>Mis perros</p></Link>
          </li>
          <li>
          <a  href="/" onClick={handleLogout}><p >Logout</p></a>
          </li>
        </ul> 
        }
      </div>
      </nav>
    </header>
      </Nav>
  )
}

export default Navbar
