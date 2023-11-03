import { Component, OnInit } from '@angular/core';
import { OfferServiceService, Ioffer } from 'src/app/services/offer-service.service';

@Component({
  selector: 'app-offer-slider',
  templateUrl: './offer-slider.component.html',
  styleUrls: ['./offer-slider.component.scss']
})
export class OfferSliderComponent implements OnInit {

  isCoruselLeft = false;
  isCoruselRight = false;
  title = "We offer";
  offers: Ioffer[] = []

  constructor(private offerServiceService: OfferServiceService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.offerServiceService.getOffers()
        .subscribe(offers => this.offers = offers);
  }
}
