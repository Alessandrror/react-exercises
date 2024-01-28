import 'node:process'
import express, { Application } from 'express'
import userRoutes from '../routes/usuario'
import  cors from 'cors'
import db from '../db/connection'
import dotenv from "dotenv"

dotenv.config()

class Server {

  private app: Application
  private port: number
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8000

    // Initial methods
    this.dbConnection()
    this.middlewares()
    this.routes()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port: ${this.port}`)
    })
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes)
  }

  middlewares() {

    // CORS
    this.app.use(cors())

    // Body
    this.app.use(express.json())

    // Public folder
    this.app.use(express.static('public'))

  }

  async dbConnection() {
    try {

      await db.authenticate()
      console.log('Database online...')

    } catch(error) {

      throw new Error('Database error')

    }
  }

}

export default Server
