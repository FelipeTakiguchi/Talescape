import axios from "axios";


const baseUrl = "http://localhost:8080";
class StoryService {
    static async getAll() {
        return await axios.get(`${baseUrl}/story`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async getByUser() {
        return await axios.get(`${baseUrl}/story/myPoems`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async getLoved() {
        return await axios.get(`${baseUrl}/story/loved`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async create( body ) {
        return await axios.post(`${baseUrl}/story`, body, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async like( storyId ) {
        return await axios.post(`${baseUrl}/story/like`, storyId, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async hasLike( likes ) {
        return await axios.post(`${baseUrl}/story/hasLike`, likes, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
    static async delete( id ) {
        return await axios.delete(`${baseUrl}/story/${id}`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    }
}

export default StoryService;