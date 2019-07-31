import axios from 'axios'
const baseURL =  'https://adoptame-app.herokuapp.com'

class AuthService {
 constructor(){
    this.service = axios.create({
        baseURL,
        withCredentials: true
    })
}
    signup(data){
        return this.service.post('/signup',data)
    }
    login(data){
        return this.service.post('/login',data)
    }
    edit(data) {
		return this.service.post("/edit", data);
    }
    logout(){
        return this.service.get('/logout')
    }
    upload(data) {
		return this.service.post("/upload", data);
	}

}

export default AuthService 
