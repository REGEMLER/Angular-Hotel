import { Component, OnInit } from '@angular/core';
import { ServicesService, IService } from 'src/app/services/services.service'; 

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  title = "Services";
  subtitle = "Our Services";
  services: IService[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.servicesService.getServices()
        .subscribe(services => this.services = services);
  }
}
