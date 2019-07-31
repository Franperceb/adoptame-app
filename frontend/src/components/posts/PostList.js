import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../../services/post'
import AuthService from '../../services/auth'
import {PostContainer} from '../../styles'
import Navbar from '../Navbar'

const postService = new PostService()  
const authService = new AuthService()  

function PostList() {
 
  
  const [users, setUsers] = useState({})
  const [posts, setPosts] = useState([])


    useEffect(()=> {
        postService
        .getAllPosts()
        .then(({data}) => {
           console.log(data)
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
          {posts.post ? posts.post.map((e,i )=>{
            console.log(e)
            return (
              <div>
                <h1>{posts.firstName}</h1>
                <h1>{posts.lastName}</h1>
                <p>{e.content}</p>
                    
                <Link to={`/posts/${e._id}`}>
                              <button>Editar</button>
                 </Link>
              </div>
            )

          }) : ''}
                     
         </section>
      </PostContainer> 
    </div>
  )
}

export default PostList