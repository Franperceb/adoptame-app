import React from "react";
import AuthService from "../services/auth";
import useForm from "../hooks/useForm";
import NavBar from "./Navbar"
import {PetDetailContainer, CustomInput, Btn	} from "../styles"

export default function EditProfile(props) {   
    const rawUser = localStorage.getItem("loggedUser");
    const loggedUser = JSON.parse(rawUser)
	const [form, handleInput] = useForm();
	const authService = new AuthService();	

    const handleEdit = () => {
		authService
			.edit(form)
			.then(response => {
                console.log(response);
                localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
				props.history.push("/profile");
			})
			.catch(err => {
				console.log(err);
			});
	};
    

	return (
		<div>
		<NavBar/>
					<h1>Profile</h1>
		<PetDetailContainer>
				<div>
					<p>Nombre:</p>
					<CustomInput type="text" name="firstName" onChange={handleInput} defaultValue={loggedUser.firstName} />
					<p>Apellido:</p>
					<CustomInput type="text" name="lastName" onChange={handleInput} defaultValue={loggedUser.lastName} />
					<p>email:</p>
					<CustomInput type="text" name="email" onChange={handleInput} defaultValue={loggedUser.email} />
					<p> Numero:</p>
					<CustomInput type="text" name="phoneNumber" onChange={handleInput} defaultValue={loggedUser.phoneNumber} />
					<Btn onClick={handleEdit}>Guardar</Btn>
				</div>

		</PetDetailContainer>
</div>
    )
}