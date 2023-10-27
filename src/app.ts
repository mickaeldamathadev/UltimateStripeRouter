import express from 'express'
import http from 'http'
import router from './router'
const app = express()
const server = http.createServer(app)

app.use(router)

server.listen(4444, () => console.log('Stripe Dev Server listening on 4444...'))
