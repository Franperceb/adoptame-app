import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../../services/post'
import {PostContainer} from '../../styles'
import Navbar from '../Navbar'

const postService = new PostService()  

function PostList() {
  const rawUser = localStorage.getItem("loggedUser");
  const loggedUser = JSON.parse(rawUser)

  const [posts, setPosts] = useState([])


    useEffect(()=> {
        postService
        .getAllPosts()
        .then(({data}) => {
          setPosts(prevState => {
            return [...prevState, ...data.posts]

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

