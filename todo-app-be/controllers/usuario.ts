import { Request, Response } from "express"
import User from "../models/usuario"

export const getUser = async (req: Request, res: Response) => {

  const { id } = req.params

  const user = await User.findByPk(id)

  if(!user) return res.status(404).json({ msg: `No existe un usuario con el id ${id}` })

  res.json({
    msg: 'getUser',
    user
  })

}

export const getUsers = async (req: Request, res: Response) => {

  const users = await User.findAll()

  res.json({
    msg: 'getUsers',
    users
  })

}

export const postUser = async (req: Request, res: Response) => {

  const { body } = req

  try {

    const userEmail = await User.findOne({ where: { email: body.email } })

    if(userEmail) return res.status(400).json({ msg: `Ya existe el email ${body.email}` })

    const user = User.build(body)
    await user.save()

    res.json({
      msg: 'postUser',
      user
    })

  } catch(err) {
    console.log(err)
    res.status(500).json({ msg: 'Server error has ocurred!' })
  }

}

export const putUser = async (req: Request, res: Response) => {

  const { id } = req.params
  const { body } = req

  try {

    const user = await User.findByPk(id)

    if(!user) return res.status(400).json({ msg: `No se encontró usuario con el id ${id}` })

    if(body.hasOwnProperty('email')) {

      const userEmail = await User.findOne({ where: { email: body.email } })

      if(userEmail) return res.status(400).json({ msg: `Ya existe el email ${body.email}` })
    }

    await user.update(body)

    res.json({
      msg: 'putUser',
      user
    })

  } catch(error) {
    console.log(error)
    res.status(500).json({ msg: 'Server error has ocurred!' })
  }

}

export const deleteUser = async (req: Request, res: Response) => {

  const { id } = req.params

  const user = await User.findByPk(id)

  if(!user) return res.status(404).json({ msg: `No existe usuario con el id ${id}` })

  // Elimina el registro de manera física
  // await user.destroy()

  // Elimina el registro de manera lógica
  await user.update({ status: false })

  res.json({
    msg: 'deleteUser',
    user
  })

}

