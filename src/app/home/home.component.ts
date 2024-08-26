import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { TagService } from '../services/food/tag.service'; // Import TagService
import { SearchService } from '../services/food/search.service';
import { NgFor } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FoodPageComponent } from '../food-page/food-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SearchComponent, CommonModule, TagsComponent, NgIf, RouterOutlet,RouterLink,FoodPageComponent,NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private searchService: SearchService,
    private tagService: TagService, // Inject TagService
  ) {}

  ngOnInit(): void {
    this.tagService.tag$.subscribe(tag => {
      this.foods = this.foodService.getAllFoodsByTag(tag);
    });

    this.searchService.searchTerm$.subscribe((searchTerm: string) => {
      this.foods = this.foodService.getAllFoodsBySearchTerm(searchTerm);
    })}
    
}
