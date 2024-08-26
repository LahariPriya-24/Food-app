import { Component, OnInit,Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import { TagService } from '../services/food/tag.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FoodPageComponent } from '../food-page/food-page.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone:true,
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  imports:[NgIf,NgFor,FoodPageComponent,RouterLink,RouterModule]
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:Tag[];

  @Input()
  justifyContent:string='center';
  
  tags?: Tag[];

  constructor(private foodService: FoodService, private tagService: TagService) {}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }

  selectTag(tagName: string): void {
    this.tagService.setTag(tagName);
  }
  
}
