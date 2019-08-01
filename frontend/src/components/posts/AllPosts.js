import React, { useState, useEffect } from 'react'
import PostService from '../../services/post'
import {PostContainer} from '../../styles'
import Navbar from '../Navbar'

const postService = new PostService()  

function AllPosts() {
 
  
  const [posts, setPosts] = useState([])


    useEffect(()=> {
        postService
        .getAllPostsUser()
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
        <section id="list-container">
          {posts ? posts.map((e,i )=>{
            return (
              <div>
                {e.authorId ? <p>Yo soy: {e.authorId.firstName}</p> :  "" }
                <p>Contacto:</p>
                {e.authorId ? <p>{e.authorId.email}</p> :  "" }
                <p>Telefono:</p>
                {e.authorId ? <p>Yo soy: {e.authorId.phoneNumber}</p> :  "" }
                
                <p>Titulo:{e.title}</p>
                <p>Contenido:{e.content}</p>
              </div>
            )

          }) : <h1>'no hay anuncios aun'</h1>}
                     
         </section>
      </PostContainer> 
    </div>
  )
}

export default AllPosts