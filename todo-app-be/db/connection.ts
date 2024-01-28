import 'node:process'
import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT } = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  // logging: false
})

export default db
