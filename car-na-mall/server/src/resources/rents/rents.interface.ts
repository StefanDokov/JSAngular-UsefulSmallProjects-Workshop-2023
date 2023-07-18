import { Document, RefType } from "mongoose";

export interface Reserve extends Document {
    resOwner: RefType;
    dateFrom: string;
    dateDays: number;
    cardN: string;
}

export interface Rent extends Document {
    model: string;
    image: string;
    doors: number;
    seats: number;
    transmission: string;
    price: number;
    ownerId: string;
    reserves: Reserve[];
}