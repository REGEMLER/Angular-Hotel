import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LangMenuComponent } from '../lang-menu/lang-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isDark = true; 
  changeTheme(): void {
    this.isDark = !this.isDark
  }

}
