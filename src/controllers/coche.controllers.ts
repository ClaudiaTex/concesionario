import Coche from '../models/coche'
import {Request, Response} from 'express'

const add = (req:Request, res:Response) => { 
    res.send('Coche')
}


export default {
    add
}