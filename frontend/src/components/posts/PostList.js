import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../../services/post'
import AuthService from '../../services/auth'
import {PostContainer} from '../../styles'
import Navbar from '../Navbar'

const postService = new PostService()  
const authService = new AuthService()  

function PostList() {
  const rawUser = localStorage.getItem("loggedUser");
  const loggedUser = JSON.parse(rawUser)
  
  const [users, setUsers] = useState({})
  const [posts, setPosts] = useState([])


    useEffect(()=> {
        postService
        .getAllPosts()
        .then(({data}) => {

          setPosts(prevState => {
             return [...prevState, ...data.post.post]

           })

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
                      {posts.map(post=> {
                                
                        return (
                           
                          <div key={post._id}>
                           <img src={loggedUser.image} alt={loggedUser.firstName} />
                            <p>Yo soy:{loggedUser.firstName}</p>
                            <p>{post.title}</p>
                            <p>{post.content}</p>
                              
                            <Link to={`/posts/${post._id}`}>
                              <button>Editar</button>
                            </Link>
                          </div>
                        )
                  })}
         </section>
      </PostContainer> 
    </div>
  )
}

export default PostList