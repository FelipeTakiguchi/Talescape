import axios from "axios";


const baseUrl = "http://localhost:8080";
class StoryService {
    
    static async getAll() {
        return await axios.get(`${baseUrl}/story`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async getByUser() {
        return await axios.get(`${baseUrl}/story/myPoems`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async create( body ) {
        return await axios.post(`${baseUrl}/story`, body, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
}

export default StoryService;