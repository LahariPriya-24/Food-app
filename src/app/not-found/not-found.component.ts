import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink,RouterModule,NgIf],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
@Input() visible:boolean=false;
@Input() notFoundMessage:string="Nothing Found!";
@Input() resetLinkText:string="Reset";
@Input() resetLinkRoute:string="/";
ngOnInit(): void {
  
}
}
