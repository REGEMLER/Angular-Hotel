import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() alt: string = "";
  btn = "Book now"
}
