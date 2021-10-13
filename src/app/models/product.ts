export class Product {
 id: number;
 name: string;
 description: string;
 price: number;
 imageUrl: string;
  
 
   
 
 constructor(id: number, name: string, description = '', price = 0, imageUrl = ""){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
 }

}
