import { fastify } from "fastify";
import { DataBaseMemory } from './database-memory.js'


const server = fastify()

const database = new DataBaseMemory()

server.post('/videos', (req, reply) => {
    database.create({
        title: 'Video 01',
        descripton: 'Esse é o video 01',
        duration: 100,
    })
    
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/videos', () => {
    
})

server.put('/videos/:id', () => {
    
})

server.delete('/videos/:id', () => {
    
})

server.listen({
    port:3333,
})