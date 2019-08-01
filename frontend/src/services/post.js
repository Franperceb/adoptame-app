import axios from 'axios'
const baseURL =   'https://adoptame-app.herokuapp.com'

class PostService {
      constructor() {
        this.service = axios.create({
          baseURL,
          withCredentials: true
        })
      }
    
      getAllPosts() {
        return this.service.get('/posts')
      }

      getAllPostsUser() {
        return this.service.get('/all-posts')
      }

      
      createPost(data) {
        return this.service.post('/posts',data)
      }
    
    
      getOnePost(id) {
   
        return this.service.get(`/posts/${id}`)
      }
    
    
      updatePost(id, data) {
        return this.service.patch(`/posts/${id}`, data)
      }
    
      deletePost(id) {
        return this.service.delete(`/posts/${id}`)
      }
    }
    

export default PostService
