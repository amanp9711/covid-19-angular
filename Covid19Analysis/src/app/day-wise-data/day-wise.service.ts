import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DayWiseService {

  readonly root = require('config.json');

  constructor(private http: HttpClient) {
  }

  getDayWiseData(date: string, stateId: number) {
    return this.http.get(this.root.URL.PATH + 'day' + '/' + date + '/' + stateId, {
    });
  }

}
