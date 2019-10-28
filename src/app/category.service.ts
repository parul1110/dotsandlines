import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category = [ { "name" :"Home" },
  { "name" :"Acrylic Painting" },
  { "name" :"Dot Painting" },
  { "name" :"Microns" },
  { "name" :"Oil Painting" },
  { "name" :"Oil Pastels" },
  { "name" :"Sketches" }];
  constructor() { }

  public getCategory(){
    return this.category;
  }
}
