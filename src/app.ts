import express from 'express'
import { Request, Response } from 'express'

const app = express()


//Settings
app.set('port', process.env.PORT || 3000)



//Server




//Middleware





//Endpoints
app.get('/', (req:Request, res:Response)=>{
    res.send('Hellor world!')
})




export default app