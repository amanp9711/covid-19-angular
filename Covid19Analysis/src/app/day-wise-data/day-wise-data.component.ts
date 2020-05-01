import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DayWiseService } from './day-wise.service';
import * as moment from 'moment';
import { stateObject, DayWiseDataDTO } from '../dto_object';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AppService } from '../app.service';

@Component({
  selector: 'app-day-wise-data',
  templateUrl: './day-wise-data.component.html',
  styleUrls: ['./day-wise-data.component.scss']
})
export class DayWiseDataComponent implements OnInit {

  constructor(private dayWiseService: DayWiseService, private appService: AppService) { }
  selectedDate: Date;
  selectedState: number;
  statesOptions: stateObject[] = [];

  public barChartLabels: Label[] = [];
  // options: {
  //   maintainAspectRatio: false,
  //   responsive: true,
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true,
  //       }
  //     }]
  //   }
  // }
  // plugins: {
  //   datalabels: {
  //     anchor: 'end',
  //     align: 'top',
  //     formatter: Math["round"],
  //     font: {
  //       weight: 'bold'
  //     }
  //   }
  // }

  public barChartData: ChartDataSets[] = [{ data: [], label: 'Hospitalized' },
  { data: [], label: 'Recovered' },
  { data: [], label: 'Deceased' }];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  ngOnInit() {
    this.getStatesData();
    this.selectedDate = new Date();
    this.selectedState = 1;
    this.getData(this.selectedDate, 1);
  }
  getStatesData() {
    this.appService.getStateData().subscribe((res: any) => {
      if (res && res.length > 0) {
        this.statesOptions = res as stateObject[];
      }
    });
  }
  getData(date, stateId: number) {
    date = moment(date).format('YYYY-MM-DD');
    this.dayWiseService.getDayWiseData(date, stateId).subscribe((res: any) => {
      if (res && res.labels && res.labels.length > 0) {
        this.barChartLabels = res.labels;
      }
      if (res && res.data && res.data.length > 0) {
        this.setData(res.data);
      }
    });
  }

  setData(data: DayWiseDataDTO[]) {
    const hospitalizedPatients = [];
    const recoveredPatients = [];
    const deceasedPatients = [];

    for (let i = 0; i < data.length; i++) {
      hospitalizedPatients.push(data[i].hospitalized);
      recoveredPatients.push(data[i].recovered);
      deceasedPatients.push(data[i].deceased);
    }
    this.barChartData.find(x => x.label == 'Recovered').data = recoveredPatients;
    this.barChartData.find(x => x.label == 'Deceased').data = deceasedPatients;
    this.barChartData.find(x => x.label == 'Hospitalized').data = hospitalizedPatients;

  }
}
