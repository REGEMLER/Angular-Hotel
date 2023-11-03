import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ioffer {
  link : string,
  alt : string,
  text : string,
  decsription : string
}

const OFFERS: Ioffer[] = [
  {
    text: "Have a nice gift",
    alt : "A present to a child",
    link:  "assets/gift1.jpg",
    decsription : "A nice gift will make you children feel happy"
  }, 
  {
    text: "Big sale",
    alt : "sale 30%",
    link:  "assets/bonus1.jpg",
    decsription : "A 30% discount is provided for accommodation at the Hotel for guests with check-in and check-out on the same date and stays up to 12 hours from 06:00 to 24:00."
  },
  {
    text: "Happy birthday",
    alt : "beautiful birthday cake",
    link:  "assets/birthday1.jpg",
    decsription : "It’s a special rate with a discount up to 35% for anyone celebrating their birthday."
  },
  {
    text: "3 = 2",
    alt : "pick 3 = 2",
    link:  "assets/sale1.jpg",
    decsription : "t’s a special rate! Buy 2 rooms and get extra one"
  },
  {
    text: "Rate «Wedding»",
    alt : "wedding rings",
    link:  "assets/wedding1.jpg",
    decsription : "It’s a special rate for a newly married couple with a discount up to 40%."
  },
]

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor() { }
  getOffers(): Observable<Ioffer[]> {
    const offers = of(OFFERS);
    return offers;
  }
}
