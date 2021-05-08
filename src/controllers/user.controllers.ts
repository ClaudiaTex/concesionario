import User, {IUser} from '../models/user'
import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import config from "../config";

const createToken = (user: IUser) => {
    return jwt.sign(
        {
            email: user.email
        },
        config.jwt.secret
        ,{
            expiresIn: 1_000*60*60
        }
    )
}

const signin = async (req:Request,res:Response) =>{
    
    const {
        email,
        password
    } = req.body


    if(!email || !password){
        return res.status(400).json({msg: 'Faltan datados'})
    }

    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({msg: 'Usuario no existe'})
    }

    const match:Boolean = await user.comparePassword(password)
    if(!match){
        return res.status(400).json({msg: 'Los credenciales no son válidos'})
    }

    res.status(200).json({ token: createToken(user)})

}

const signup = async (req:Request,res:Response) =>{
    const {email, password} = req.body
    try{
        if (!email || !password) {
            return res.status(400).json({msg: 'Datos incompletos'})
        }

        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({msg: 'Usuario existente'})
        }

        const newUser = new User(req.body)
        await newUser.save()

        res.status(200).json({data: newUser})
    }catch(error){
        res.status(400).json({msg: error?.message })
    }

}

export default {
    signin,
    signup
}
