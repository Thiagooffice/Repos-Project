import axios from 'axios'

// http://api.github.com

const api = axios.create({
    baseURL: 'http://api.github.com',
})
export default api