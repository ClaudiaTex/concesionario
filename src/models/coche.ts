import { Schema, model, Document } from 'mongoose'

export interface ICoche extends Document {
    matricula: string,
    modelo: string,
    marca: string,
    color: string,
    kms: number,
}

const cocheSchema = new Schema<ICoche>({
    matricula: {
        type: String,
        required: true,
        unique: true
    },
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    kms: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Coche', cocheSchema)