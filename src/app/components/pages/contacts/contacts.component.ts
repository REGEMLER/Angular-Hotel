import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  title: string = "Our contacts";
  subtitle: string = "Dont hasitate, call us!" 
}
