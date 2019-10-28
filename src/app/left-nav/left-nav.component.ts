import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DimensionService } from '../dimension.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  private dimension;
  constructor(private dimensionServce : DimensionService) { }

  ngOnInit() {
    this.dimension = this.dimensionServce.getDimensions();
  }

}
