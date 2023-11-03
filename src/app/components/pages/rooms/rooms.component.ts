import { Component, OnInit } from '@angular/core';
import { RoomServiceService, Iroom } from 'src/app/services/room-service.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  title = "Rooms and prices";
  subtitle = "Hotel Angle offers 228 different types of rooms for your comfortable stay. The territory of the hotel is a non-smoking area.";
  rooms: Iroom[] = []

  constructor(private roomServiceService: RoomServiceService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomServiceService.getRooms()
        .subscribe(rooms => this.rooms = rooms);
  }
}
