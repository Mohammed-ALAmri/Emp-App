import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  private barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  private barChartLabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  private barChartType = 'bar';
  private barChartLegend = true;
  private barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'B'}
  ];



  private doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  private doughnutChartData = [120, 150, 180, 90];
  private doughnutChartType = 'doughnut';



  private pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  private pieChartData = [120, 150, 180, 90];
  private pieChartType = 'pie';



  private radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  private radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  private radarChartType = 'radar';


  
  private bar = false;
  private doughnut = true;
  private pie = true;
  private radar = true;

  constructor() { }

  ngOnInit() {
  }

  sbar(){
    this.bar = false;
    this.doughnut = true;
    this.pie = true;
    this.radar = true;
  }

  sdoughnut(){
    this.bar = true;
    this.doughnut = false;
    this.pie = true;
    this.radar = true;
  }

  spie(){
    this.bar = true;
    this.doughnut = true;
    this.pie = false;
    this.radar = true;
  }

  sradar(){
    this.bar = true;
    this.doughnut = true;
    this.pie = true;
    this.radar = false;
  }

}