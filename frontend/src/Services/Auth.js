import axios from "axios";


const baseUrl = "http://localhost:8080";
class AuthService {
    
    static async login( body ) {
        return await axios.post(`${baseUrl}/auth/login`, body)
    }
    static async register( body ) {
        return await axios.post(`${baseUrl}/auth/register`, body)
    }
    static async sendToken( body ) {
        return await axios.post(`${baseUrl}/token/new`, body)
    }
    static async verifyToken( body ) {
        return await axios.post(`${baseUrl}/token/compare`, body)
    }
}

export default AuthService;