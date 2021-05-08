import {Router} from 'express'
import controllers from '../controllers'
import passport from 'passport'

const {coche} = controllers


const router = Router()


router.post('/coche', passport.authenticate("jwt",{session: false}), coche.add)


export default router