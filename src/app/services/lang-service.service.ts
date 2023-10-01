import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ilanguage {
  link : string,
  alt : string,
  text : string
}

const LANGUAGES: Ilanguage[] = [
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

@Injectable({
  providedIn: 'root'
})
export class LangServiceService {

  constructor() { }
  getLangs(): Observable<Ilanguage[]> {
    const langs = of(LANGUAGES);
    return langs;
  }
}
