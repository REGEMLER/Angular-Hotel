import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  title = "Rooms and prices";
  subtitle = "Hotel Angle offers 228 different types of rooms for your comfortable stay. The territory of the hotel is a non-smoking area.";
  rooms = [
    {text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    src:  "assets/room1.jpg"
    }, 
    {text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    src:  "assets/room2.jpg"
    },
    {text: "VIP Suite meets the requirements of the guests demanding excellence in every little detail.",
    alt : "VIP Room",
    src:  "assets/room3.jpg"
    },
  ]

}
