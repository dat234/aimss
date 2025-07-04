import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
    @Prop()
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop()
    age: number;
    
    @Prop()
    gender: string;

    @Prop()
    address: string;

    @Prop()
    role: string;

    @Prop()
    refreshToken: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    isDeleted: boolean;

    @Prop()
    deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
