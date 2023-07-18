import { Document, RefType } from "mongoose";

export interface Ureserve extends Document {
    date: string;
    forDays: number;
    cardNum: string;
    costPrice: number;
    clientId: RefType;
}

export default interface User extends Document {
    email: string;
    username: string;
    password: string;
    isValidPassword(password: string): Promise<Error | boolean>
}