
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';


import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
 cartItems: any=[]; 
 
   cartTotal= 0
  

  constructor(private msg: MessengerService,
    private cartService:CartService) { 
    
  }

  ngOnInit() {
    this.cartItems = new Array <any>()
    this.handleSubscription();
    this.loadCartItems();
    
     }
    

    handleSubscription(){
      
      this.msg.getMsg().subscribe((product: Product) => {
       
        this.loadCartItems();
      })
    }

    loadCartItems(){
      this.cartService.getCartItems().subscribe((items: CartItem[])=>{
        console.log(items)
        this.cartItems=items;
        this.calcCartTotal();
      })
    }
           
      calcCartTotal(){
       this.cartTotal=0
        this.cartItems.forEach((items: { qty: number; price: number; }) => {
         this.cartTotal += (items.qty * items.price)
       })
       }
      }
    
        
        
      
  
      
      
      
    
    
    
  
   
  





