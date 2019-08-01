import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../../services/post'
import {PostContainer, Btn} from '../../styles'
import Navbar from '../Navbar'

const postService = new PostService()  

function PostList() {
 
  
  const [posts, setPosts] = useState([])


    useEffect(()=> {
        postService
        .getAllPosts()
        .then(({data}) => {
          setPosts(data.post)

          })
          .catch(err => {
            console.log(err)
          })
      },[])


  return (
    <div>
       <Navbar/>
    <PostContainer> 
        <h1>Anuncios</h1>
           {/* <div id="overlay"> */}
        <section id="list-container">
          {posts.post ? posts.post.map((e,i )=>{
    
            return (
              <div key={i}>
                <b><p>Yo soy:{posts.firstName}</p></b>
               <b> <p>Titulo del anuncio:</p></b>              
                <p>{e.content}</p>
               <b><p>Contacto:</p></b>
                <p>{posts.email}</p>
               <b> <p>Telefono</p></b>
                <p>{posts.phoneNumber}</p>
                <hr/>
                <Link to={`/posts/${e._id}`}>
                              <Btn>Editar</Btn>
                 </Link>
               
              </div>
            )
          }) :''}
         </section>
        
      </PostContainer> 
      
    </div>
  )
}

export default PostList