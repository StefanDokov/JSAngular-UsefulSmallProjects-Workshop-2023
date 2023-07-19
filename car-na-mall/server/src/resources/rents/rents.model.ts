import { Schema, model } from "mongoose";
import {Rent} from "./rents.interface";

const reserveInfo = new Schema(
    {
        resOwner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    
        dateFrom: {
            type: String,
            required: true,
        },
        dateDays: {
            type: String,
            required: true,
        },
        cardN: {
            type: String,
            required: true,
        }
}
)


const RentSchema = new Schema(
    {
        model: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        doors: {
            type: Number,
            required: true,
        },
        seats: {
            type: Number,
            required: true
        },
        transmission: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        ownerId: {
            type: String,
            required: true,
        },
        reserve: {
            type: [reserveInfo],
            required: false,
        }
    },
    {
        timestamps: true
    }
)
export default model<Rent>('Rent', RentSchema); 