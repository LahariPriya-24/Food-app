import { Component,OnInit } from '@angular/core';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
cart!:Cart;
constructor(private cartService: CartService,){

  this.setCart();
}
ngOnInit(): void {
  
}
removeFromCart(cartItem:CartItem){
  this.cartService.removefromCart(cartItem.food.id);
  this.setCart();

}
changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id,quantity)
}
setCart(){
  this.cart=this.cartService.getCart();
}

}
