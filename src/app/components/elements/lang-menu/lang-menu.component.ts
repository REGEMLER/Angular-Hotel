import { Component } from '@angular/core';
import ILanguage from 'src/app/interfaces/ILanguage';

@Component({
  selector: 'app-lang-menu',
  templateUrl: './lang-menu.component.html',
  styleUrls: ['./lang-menu.component.scss']
})
export class LangMenuComponent {
  isActive: boolean = false;
  selectedFlag : string = "assets/us-flag.png";
  selectedAlt : string = "us flag";
  languages :ILanguage[] = [
    {
      link : "assets/bel-flag.png",
      alt : "belarus flag",
      text : "Беларуская"
    },
    {
      link : "assets/rus-flag.png",
      alt : "russian flag",
      text : "Русский"
    },
    {
      link : "assets/us-flag.png",
      alt : "us flag",
      text : "English"
    },
  ]

  selectColor(){
    this.isActive = !this.isActive; 
  }
  selectLanguage(flag: string, alt: string): void{
    this.selectedFlag = flag;
    this.selectedAlt = alt;
    this.isActive = false;
  }
}
