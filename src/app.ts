import express from 'express'
import { Request, Response } from 'express'
import router from './routes'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(passport.initialize())
passport.use(passportMiddleware)
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//Routes
app.get('/', (req:Request, res:Response)=>{
    res.send('Wololo world!')
})

app.use('/api', router.user)
app.use('/special', router.special)


export default app
