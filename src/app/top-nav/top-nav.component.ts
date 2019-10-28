import { Component, OnInit, Inject } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  private menu ;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.menu = this.categoryService.getCategory();
  }

}
