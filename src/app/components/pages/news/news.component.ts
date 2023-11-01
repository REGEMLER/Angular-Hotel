import { Component, OnInit } from '@angular/core';
import { NewsServiceService, Inews } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title = "Bracking news";
  subtitle = "Latest news";

  news: Inews[] = []

  constructor(private newsServiceService: NewsServiceService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsServiceService.getNews()
        .subscribe(news => this.news = news);
  }

}
