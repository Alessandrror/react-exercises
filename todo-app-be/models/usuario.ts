import { DataTypes } from "sequelize"
import db from "../db/connection"

const User = db.define('User', {

  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  status: {
    // In this case, sequelize will transform the boolean to a tinyint
    type: DataTypes.BOOLEAN
  }

})

export default User
