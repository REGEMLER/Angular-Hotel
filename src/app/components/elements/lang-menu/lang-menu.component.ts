import { Component, OnInit } from '@angular/core';
import { LangServiceService, Ilanguage } from 'src/app/services/lang-service.service';

@Component({
  selector: 'app-lang-menu',
  templateUrl: './lang-menu.component.html',
  styleUrls: ['./lang-menu.component.scss']
})
export class LangMenuComponent implements OnInit {
  isActive: boolean = false;
  selectedFlag : string = "assets/us-flag.png";
  selectedAlt : string = "us flag";
  languages : Ilanguage[] = []

  selectColor(){
    this.isActive = !this.isActive; 
  }
  selectLanguage(flag: string, alt: string): void{
    this.selectedFlag = flag;
    this.selectedAlt = alt;
    this.isActive = false;
  }
  constructor(private langServiceService: LangServiceService) { }

  ngOnInit(): void {
    this.getLangs();
  }

  getLangs(): void {
    this.langServiceService.getLangs()
        .subscribe(languages => this.languages = languages);
  }
}
