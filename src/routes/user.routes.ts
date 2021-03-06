import {Router} from 'express'
import controllers from '../controllers'

const {user} = controllers

const router = Router()

router.post('/signin', user.signin)

router.post('/signup', user.signup)

export default router

