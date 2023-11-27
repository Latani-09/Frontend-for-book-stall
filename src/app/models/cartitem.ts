import { Book } from "./Book"

export class Cartitem {

    itemId!:string
    cartId!:string
    quantity!:number
    dateCreated!:Date
    bookId!:number
    title!:string
    price!:number
    product!:Book
}
