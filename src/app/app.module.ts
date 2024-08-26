import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from "./tags/tags.component";
import { FoodService } from "./services/food/food.service"; // Ensure FoodService import is correct
import { SearchService } from "./services/food/search.service"; // Ensure SearchService import is correct
import { TagService } from "./services/food/tag.service";
import { FoodPageComponent } from "./food-page/food-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    NotFoundComponent
  ],
  providers: [FoodService, SearchService,TagService], // Ensure services are provided
  bootstrap: []
})
export class AppModule { }