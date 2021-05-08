import User, {IUser} from '../models/user'
import {Request, Response} from 'express'

const signin = async (req:Request,res:Response) =>{
    
    const {
        email,
        password
    } = req.body


    if(!email || !password){
        return res.status(400).json({msg: 'Faltan datados'})
    }

    const user:IUser = await User.findOne({email})

    if(!user){
        return res.status(400).json({msg: 'Usuario no existe'})
    }

    const match:Boolean = await user.comparePassword(password)
    if(!match){
        return res.status(400).json({msg: 'Los credenciales no son válidos'})
    }

    res.status(200).json('TOKEN')

}

const signup = (req:Request,res:Response) =>{

}

export default {
    signin,
    signup
}