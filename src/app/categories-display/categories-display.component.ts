import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../categories';
@Component({
  selector: 'app-categories-display',
  templateUrl: './categories-display.component.html',
  styleUrls: ['./categories-display.component.css']
})
export class CategoriesDisplayComponent implements OnInit {
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
