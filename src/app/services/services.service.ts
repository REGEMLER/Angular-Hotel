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
    text: "Casino",
    alt : "Casino",
    src:  "assets/rus-flag.png"
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
