import React , {useEffect,useState}from "react";
import PostService from "../../services/post";
import useForm from "../../hooks/useForm";
import Swal from 'sweetalert2'
import NavBar from '../Navbar'
import { PetDetailContainer,CustomInput,Btn} from '../../styles'
const postService = new PostService();	


export default function PostEdit(props) {   
	const rawUser = localStorage.getItem("loggedUser");
  	const loggedUser = JSON.parse(rawUser)
    const [form, handleInput] = useForm();
	const [post, setPost] = useState({})


	useEffect(() => {
		postService
		.getOnePost(props.match.params.id)
		.then(({ data }) => {
		
		  setPost(prevState => {
			return {...prevState,...data.post}
		})
	})
		.catch(err => {
		  console.log(err)
		})
	 }, [props.match.params.id])


    const handleEdit = () => {
		postService
			.updatePost(props.match.params.id,form)
			.then(response => {
                console.log(response);
				props.history.push("/posts");	
			})
			.catch(err => {
				console.log(err);
			});
		};
	
	
	const deletePost = () => {
		Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!'
		}).then(result => {
		  if (result.value) {
			postService
			.deletePost(props.match.params.id)
			  .then(({ data }) => {
				Swal.fire('Deleted!', data.msg, 'success')
				props.history.push('/posts')
			  })
			  .catch(err => {
				console.log(err)
			  })
		  } else {
			return
		  }
		})
	  }

	return (
		<div>
			<NavBar/>
		     <PetDetailContainer>
          <h1>Tu anuncio </h1>
        <div>        
            <label>Yo soy:</label>
            <CustomInput type="text" name="firstName" placeholder="Escribe algo" onChange={handleInput}  defaultValue={loggedUser.firstName} />
           
            <label>Titulo del anuncio:</label>
            <CustomInput type="text" name="title" onChange={handleInput} defaultValue={post.title}/>
            
            <label>email:</label>
            <CustomInput type="text" name="email" onChange={handleInput}defaultValue={loggedUser.email}  />
          
            <label> Contacto:</label>
            <CustomInput type="text" name="phoneNumber" onChange={handleInput} defaultValue={loggedUser.phoneNumber} />
           
            <label>Escribe el asunto:</label>
            <CustomInput type="text" name="content" onChange={handleInput} defaultValue = {post.content} />
             

        </div>
				
					<Btn onClick={handleEdit}>Guardar</Btn>
					<Btn onClick={deletePost}>Eliminar</Btn>
		</PetDetailContainer>
</div>
    )
}