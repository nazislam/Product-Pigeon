import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  myChart: any;
  userId: any;
  reviewList=[];
  reviewIdList=[];
  reviewRatingList=[];
  reviewDislikeList=[1, 4];
  timestamp = [];

  constructor(
    private reviewService:ReviewService,
    private registerService:RegisterService
  ) { }

  ngOnInit() {
    this.userId = this.registerService.getUserId();
    console.log(this.userId);
    this.reviewService.getReviewByUserId(this.userId)
      .subscribe(
        (result) => {
            let q = result['message'];
            for (let i = 0; i < q.length; i++) {
              this.reviewIdList.push(q[i].id);
              this.reviewRatingList.push(q[i].reviewrating);
            }
          console.log(this.reviewIdList);
          console.log(this.reviewRatingList);

    this.myChart = new Chart("cc", {
    type: 'line',
    data: {
        labels: this.reviewIdList,
      datasets: [
        {
            label: '# of Likes',
            data: this.reviewRatingList,
            backgroundColor: [
                'rgba(60, 235, 141, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(0,135,63,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
          borderWidth: 3
        },
        {
            label: '# of Dislikes',
            data: this.reviewDislikeList,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });




        }
      );




  }

}
