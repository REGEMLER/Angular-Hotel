import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  title = "Gallery";
  subtitle = "OUR GALLERY STORE";
  items = [
    {
      alt: "room with bad",
      text : "Our beautiful room",
      src : "assets/hotel1.jpg"
    },
    {
      alt: "Banquet hall",
      text : "Banquet hall",
      src : "assets/banket2.jpg"
    },
    {
      alt: "Big beautiful table",
      text : "Meeting room",
      src : "assets/banket.jpg"
    },
    {
      alt: "room with bad",
      text : "Our beautiful room",
      src : "assets/hotel1.jpg"
    },
    {
      alt: "Conference hall",
      text : "Conference hall",
      src : "assets/conference.jpg"
    },
    {
      alt: "casino",
      text : "Casino Royal",
      src : "assets/casino.jpg"
    },
    {
      alt: "restaurant with piano",
      text : "Our restaurant",
      src : "assets/restaurant.jpg"
    },
    {
      alt: "luxe excpensive room",
      text : "Luxe room",
      src : "assets/room4.jpg"
    },
    {
      alt: "Standard excpensive room",
      text : "Standard room",
      src : "assets/room5.jpg"
    },
    {
      alt: "sauna",
      text : "Sauna, spa, beauty salon",
      src : "assets/sauna.jpg"
    }
  ]
}
