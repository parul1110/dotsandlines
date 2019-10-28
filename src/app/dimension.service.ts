import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DimensionService {
  private dimension = [ { "size" :"12\"X12\"" },
  { "size" :"12\"X12\"" },
  { "size" :"12\"X12\"" },
  { "size" :"12\"X12\"" },
  { "size" :"12\"X12\"" },
  { "size" :"12\"X12\"" },
  { "size" :"12\"X12\"" }];
  constructor() { }

  public getDimensions(){
    return this.dimension;
  }

}
