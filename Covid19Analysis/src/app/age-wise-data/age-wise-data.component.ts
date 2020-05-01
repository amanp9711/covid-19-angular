import { Component, OnInit } from '@angular/core';
import { AgeWiseService } from './age-wise.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AgeWiseDataDTO, stateObject } from '../dto_object';
import { AppService } from '../app.service';
@Component({
  selector: 'app-age-wise-data',
  templateUrl: './age-wise-data.component.html',
  styleUrls: ['./age-wise-data.component.scss']
})
export class AgeWiseDataComponent implements OnInit {
  selectedState: number;
  statesOptions: stateObject[] = [];
  constructor(private ageService: AgeWiseService, private appService: AppService) { }
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [{ data: [], label: 'Hospitalized' },
  { data: [], label: 'Recovered' },
  { data: [], label: 'Deceased' }];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  async ngOnInit() {
    this.selectedState = 1;
    this.getStatesData();
    this.getData(1);
  }
  getStatesData() {
    this.appService.getStateData().subscribe((res: any) => {
      if (res && res.length > 0) {
        this.statesOptions = res as stateObject[];
      }
    });
  }
  getData(stateId: number) {
    this.ageService.getAgeWiseData(stateId).subscribe((res: any) => {
      if (res && res.labels && res.labels.length > 0) {
        this.barChartLabels = res.labels;
      }
      if (res && res.data && res.data.length > 0) {
        this.setData(res.data);
      }
    });
  }
  setData(data: AgeWiseDataDTO[]) {
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
