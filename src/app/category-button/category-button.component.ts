import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})

export class CategoryButtonComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
