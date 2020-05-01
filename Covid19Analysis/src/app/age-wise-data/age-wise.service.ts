import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgeWiseService {

  readonly root = require('config.json');

  constructor(private http: HttpClient) {
  }

  getAgeWiseData(stateId: number) {
    return this.http.get(this.root.URL.PATH + 'age/' + stateId, {
    });
  }
}
