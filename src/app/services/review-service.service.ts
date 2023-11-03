import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ireview {
  date : string,
  text : string,
  title : string
}

const REVIEWS: Ireview[] = [
  {
    text: "The room was nice and comfy. bathroom with bathtub, comfortable bed",
    title : "Maria",
    date:  new Date().toLocaleString()
  }, 
  {
    text: "The room was nice and comfy. bathroom with bathtub, comfortable bed",
    title : "Maria",
    date:  new Date().toLocaleString()
  },
  {
    text: "The room was nice and comfy. bathroom with bathtub, comfortable bed",
    title : "Maria",
    date:  new Date().toLocaleString()
  },
  {
    text: "The room was nice and comfy. bathroom with bathtub, comfortable bed",
    title : "Maria",
    date:  new Date().toLocaleString()
  },
  {
    text: "The room was nice and comfy. bathroom with bathtub, comfortable bed",
    title : "Maria",
    date:  new Date().toLocaleString()
  },
]

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  constructor() { }
  getReviews(): Observable<Ireview[]> {
    const reviews = of(REVIEWS);
    return reviews;
  }
}
