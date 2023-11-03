import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() alt: string = "";
  btn = "Buy"
}
