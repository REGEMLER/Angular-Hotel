import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IService {
  link : string,
  alt : string,
  text : string,
  src : string
}

const SERVICES: IService[] = [
  {
    link : "/gallery",
    text: "Laundry",
    alt : "laundry",
    src:  "assets/laundry.png"
  }, 
  {
    link : "/gallery",
    text: "Parking place",
    alt : "parking-sign",
    src:  "assets/parking-sign.png"
  },
  {
    link : "/gallery",
    text: "24-hours support",
    alt : "support",
    src:  "assets/24-hours.png"
  },
  {
    link : "/gallery",
    text: "Happy meal",
    alt : "cutlery",
    src:  "assets/cutlery.png"
  },
  {
    link : "/gallery",
    text: "Cocktail-drinks",
    alt : "cocktail-drink",
    src:  "assets/cocktail-drink.png"
  },
  {
    link : "/gallery",
    text: "Sauna and spa",
    alt : "bathtub",
    src:  "assets/bathtub.png"
  },
]

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  getServices(): Observable<IService[]> {
    const services = of(SERVICES);
    return services;
  }
}
