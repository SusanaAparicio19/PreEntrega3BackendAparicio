import { Schema,model } from 'mongoose';

const cartsSchema = new Schema({
    _id: { type: String, required: true },
    products: [ {type: String, ref: 'products'} ]
},{
    strict:'throw',
    versionKey: false,
});

export const dbCarts= model('carts', cartsSchema)