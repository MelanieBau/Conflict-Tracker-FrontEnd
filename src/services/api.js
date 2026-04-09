import axios from 'axios'

//Conexión con la api de Spring Boot (localhost 8080)
//Tiene funciones simples como obtener, crear y eliminar 


const api = axios.create({
    baseURL: 'http://localhost:8080'
})


// Ver los conflictos 

export const getConflicts = () => api.get('/conflicts')
export const getConflictById = (id) => api.get(`/conflicts/${id}`)
export const createConflict = (conflict) => api.post('/conflicts', conflict)
export const deleteConflict = (id) => api.delete(`/conflicts/${id}`)

//Conflictos por Paises 

export const getCountries = () => api.get('/countries')

//Facciones 

export const getFactions = () => api.get('/factions')

//Eventos 

export const getEvents = () => api.get('/events')