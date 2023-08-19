import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bgslider',
  templateUrl: './bgslider.component.html',
  styleUrls: ['./bgslider.component.scss']
})
export class BgsliderComponent implements OnInit {

  currentLink: number = 0; 
  timerId: any; 
  
  setBg(){
     this.timerId = setInterval(()=>{
      if(this.currentLink >=2){
        this.currentLink = 0;
      } else {
        this.currentLink++;
      }
    },2000)
  }

  ngOnInit(): void {
    this.setBg()
  }
  ngOnDestroy(): void{
    clearInterval(this.timerId)
  }

}
