import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { stateObject } from './dto_object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {
  }
  ngOnInit() {
    this.appService.getStateData();
  }
  title = 'Covid19Analysis';
}
