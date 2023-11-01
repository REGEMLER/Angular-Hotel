import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() alt: string = "";
  @Input() title: string = "";
  @Input() date: string = "";
  btn = "Read more"
}
