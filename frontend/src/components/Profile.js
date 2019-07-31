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
						<h1> Tu perfil</h1>
			<ProfileContainer>
					<div>
						<p>Nombre:</p>
						<h4>{loggedUser.firstName}</h4>
						<p>Apellido:</p>
						<h4>{loggedUser.lastName}</h4>
						<p>email:</p>
						<h4>{loggedUser.email}</h4>
						<p> Numero:</p>
						<h4>{loggedUser.phoneNumber}</h4>
						<Link to="/edit"><Btn>Editar</Btn> </Link>

					</div>
					<div>
						<img src={loggedUser.image} alt={loggedUser.firstName} />
						<input type="file" name="photo" id="file" onChange={selectPhoto} />
						<label htmlFor="file" id="fileLabel" >Cambiar Foto</label>

			    		<Link to='/add-post'><Btn>Anuncia </Btn></Link>	
					</div>
			
			</ProfileContainer>
	</div>
	);
}

