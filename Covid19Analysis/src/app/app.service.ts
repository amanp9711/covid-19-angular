import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { stateObject } from './dto_object';
@Injectable({
    providedIn: 'root'
})
export class AppService {

    public static StatesData: stateObject[] = [];
    constructor(private http: HttpClient) {
    }

    getStateData() {
        return this.http.get('http://localhost:3000/api/statedata', {
        });
    }

}
