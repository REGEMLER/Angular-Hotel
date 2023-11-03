import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() text: string = "";
  @Input() title: string = "";
  @Input() date: string = "";
}
