import axios from "axios"

const api = axios.create({
    baseURL: CONFIG.api.baseUrl,
})

export default api