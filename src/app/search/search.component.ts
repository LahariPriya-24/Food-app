import { Component } from '@angular/core';
import { SearchService } from '../services/food/search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  search(): void {
    this.searchService.setSearchTerm(this.searchTerm);
  }
}
