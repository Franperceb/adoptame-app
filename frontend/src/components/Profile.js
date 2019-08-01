import React, {useState} from "react";
import AuthService from "../services/auth";
import NavBar from "./Navbar"
import {ProfileContainer} from "../styles"
import {Link} from 'react-router-dom'
import { Btn} from '../styles'



export default function Profile(props) {
	const rawUser = localStorage.getItem("loggedUser");
	const [loggedUser, setLoggedUser] = useState(JSON.parse(rawUser)) 

	const authService = new AuthService();

	const selectPhoto = async e => {
		try {
			const photo = new FormData();
			photo.append("photo", e.target.files[0]);
			const response = await authService.upload(photo);
			setLoggedUser(
				{...loggedUser,
				image: response.data.user.image}
			)
			localStorage.setItem("loggedUser", JSON.stringify(response.data.user));

		} catch (error) {
			console.log(error);
		}
	};


	return (
		<div className="profMainContainer">
			<NavBar/>
						<h1 id= "prof-title"> Tu perfil</h1>
			<ProfileContainer>
					<div>
						<p>Nombre:</p>
				      <b><p>{loggedUser.firstName}</p></b>
						<p>Apellido:</p>
					  <b><p>{loggedUser.lastName}</p></b>
						<p>email:</p>
					  <b><p>{loggedUser.email}</p></b>
						<p> Numero:</p>
					  <b><p>{loggedUser.phoneNumber}</p></b>
						<Link to="/edit"><Btn>Editar</Btn> </Link>
						
					</div>
					<div>
						<img src={loggedUser.image} alt={loggedUser.firstName} />
						<input type="file" name="photo" id="file" onChange={selectPhoto} />
						<label htmlFor="file" id="fileLabel" >Cambiar Foto</label>
						<Link to="/all-posts"><Btn>Ver anuncios</Btn> </Link>
					</div>
			
			</ProfileContainer>
	</div>
	);
}

