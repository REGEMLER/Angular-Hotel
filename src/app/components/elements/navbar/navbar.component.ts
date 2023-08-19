import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items  = [
    {text :"Rooms", link : "/rooms"},
    {text :"Services", link : "/services"},
    {text :"Offers", link : "/offers"},
    {text :"Gallery", link : "/gallery"},
    {text :"News", link : "/news"},
    {text :"Reviews", link : "/reviews"},
    {text :"Contacts", link : "/contacts"}
  ]

  isVisible = false; 
  showMenu(){
    this.isVisible = !this.isVisible
  }

}
