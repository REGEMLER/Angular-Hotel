import { Component, OnInit } from '@angular/core';
import { ReviewServiceService, Ireview } from 'src/app/services/review-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  title: string = "Reviews";
  subtitle: string = "Read and Send review!" 

  reviews: Ireview[] = []

  constructor(private reviewServiceService: ReviewServiceService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewServiceService.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }
}
