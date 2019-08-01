import axios from 'axios'
const baseURL = 'http://localhost:3000'

class PetService {
      constructor() {
        this.service = axios.create({
          baseURL,
          withCredentials: true
        })
      }
    
      getAllPets() {
        return this.service.get('/pets')
      }

      
      createPet(data) {
        return this.service.post('/pets',data)
      }
    
    
      getOnePet(id) {
   
        return this.service.get(`/pets/${id}`)
      }
    
    
      updatePet(id, data) {
        return this.service.patch(`/pets/${id}`, data)
      }
    
      deletePet(id) {
        return this.service.delete(`/pets/${id}`)
      }
      upload(data) {
        return this.service.post("/pets/upload", data);
      }
    }
    

export default PetService
