import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  btn = "Learn more";
  @Input() title: string = "";
  @Input() link: string = "";
  @Input() alt: string = "";
}
