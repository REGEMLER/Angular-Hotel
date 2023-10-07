import { Component, OnInit } from '@angular/core';
import { OfferServiceService, Ioffer } from 'src/app/services/offer-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  title = "Offers";
  subtitle = "";

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
