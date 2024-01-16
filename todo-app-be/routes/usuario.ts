import { Router } from 'express'
import { deleteUser, getUser, getUsers, postUser, putUser } from '../controllers/usuario'

const router = Router()

router.get('/', getUser)
router.get('/:id', getUsers)
router.post('/', postUser)
router.put('/:id', putUser)
router.delete('/:id', deleteUser)

export default router
