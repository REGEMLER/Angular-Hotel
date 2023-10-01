import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ioffer {
  link : string,
  alt : string,
  text : string
}

const OFFERS: Ioffer[] = [
  {
    text: "Good offer",
    alt : "VIP Room",
    link:  "assets/gift1.jpg"
  }, 
  {
    text: "Big sale",
    alt : "VIP Room",
    link:  "assets/bonus1.jpg"
  },
  {
    text: "Happy birthday",
    alt : "VIP Room",
    link:  "assets/birthday1.jpg"
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
