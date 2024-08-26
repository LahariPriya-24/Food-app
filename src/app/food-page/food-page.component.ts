import { Component ,OnInit} from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [NgFor,TagsComponent,CommonModule,RouterOutlet,NgIf,NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
food!:Food;
constructor(private activatedRoute:ActivatedRoute,
  private foodService:FoodService,
private cartService: CartService,
private router:Router){
activatedRoute.params.subscribe((params)=>{
if (params['id'])
  this.food=foodService.getFoodById(params['id']);
})
  }
  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}