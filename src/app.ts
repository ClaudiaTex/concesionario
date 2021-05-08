import express from 'express'
import { Request, Response } from 'express'
import router from './routes'

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.get('/', (req:Request, res:Response)=>{
    res.send('Wololo world!')
})

app.use('/api', router.user)

export default app
