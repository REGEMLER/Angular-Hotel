import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Iroom {
  link : string,
  alt : string,
  text : string
}

const ROOMS: Iroom[] = [
  {
    text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    link:  "assets/room1.jpg"
  }, 
  {
    text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    link:  "assets/room2.jpg"
  },
  {
    text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    link:  "assets/room3.jpg"
  },
]

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }
  getRooms(): Observable<Iroom[]> {
    const rooms = of(ROOMS);
    return rooms;
  }
}
