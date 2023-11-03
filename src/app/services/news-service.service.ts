import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Inews {
  link : string,
  alt : string,
  text : string,
  title : string,
  date : string
}

const NEWS: Inews[] = [
  {
    text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    link:  "assets/room1.jpg",
    title: "Royal wedding",
    date : new Date().toLocaleString()
  }, 
  {
    text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    link:  "assets/room2.jpg",
    title: "Royal wedding",
    date : new Date().toLocaleString()
  },
  {
    text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    link:  "assets/room3.jpg",
    title: "Royal wedding",
    date : new Date().toLocaleString()
  },
]

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor() { }
  getNews(): Observable<Inews[]> {
    const news = of(NEWS);
    return news;
  }
}
