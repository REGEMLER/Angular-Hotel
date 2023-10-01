import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-slider',
  templateUrl: './offer-slider.component.html',
  styleUrls: ['./offer-slider.component.scss']
})
export class OfferSliderComponent {

  isCoruselLeft = false;
  isCoruselRight = false;
  title = "We offer";
  slides = [
    {text: "Good offer",
    alt : "VIP Room",
    src:  "assets/gift1.jpg"
    }, 
    {text: "Big sale",
    alt : "VIP Room",
    src:  "assets/bonus1.jpg"
    },
    {text: "Happy birthday",
    alt : "VIP Room",
    src:  "assets/birthday1.jpg"
    },
  ]
}
