import {model, Schema, Document} from "mongoose";
import bcrypt from 'bcrypt'


export interface IUser extends Document {
    email: string,
    password: string

    comparePassword: (password:string) => Promise<boolean>
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
        versionKey: false
    })

userSchema.pre<IUser>('save', async function (next) {
    if(!this.isModified('password')) {
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    const encrypt = await bcrypt.hash(this.password, salt)
    this.password = encrypt
})

userSchema.methods.comparePassword = function (password:string):Promise<boolean> {
    return bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema)
