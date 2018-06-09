import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StartComponent implements OnChanges {
  starWidth: number;
  rating: number = 4;

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
}
