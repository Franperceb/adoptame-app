import React, { useState, useEffect } from 'react'
import PostService from '../../services/post'
import {PostContainer} from '../../styles'
import Navbar from '../Navbar'

const postService = new PostService()  

function PostList() {
 
  
  const [posts, setPosts] = useState([])


    useEffect(()=> {
        postService
        .getAllPostsUser()
        .then(({data}) => {
          console.log(data.post)
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
                {e.authorId ? <h1>{e.authorId.email}</h1>:  "" }
              
                <h1>{e.title}</h1>
                <h1>{e.content}</h1>
              </div>
            )

          }) : <h1>'no hay anuncios aun'</h1>}
                     
         </section>
      </PostContainer> 
    </div>
  )
}

export default PostList