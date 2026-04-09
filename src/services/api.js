import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1'
})

export const getConflicts = () => api.get('/conflicts')
export const getConflictById = (id) => api.get(`/conflicts/${id}`)
export const createConflict = (conflict) => api.post('/conflicts', conflict)
export const deleteConflict = (id) => api.delete(`/conflicts/${id}`)

export const getCountries = () => api.get('/countries')
export const getFactions = () => api.get('/factions')
export const getEvents = () => api.get('/events')