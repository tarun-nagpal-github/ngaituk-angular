import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs";
import { map } from "rxjs-compat/operator/map";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "http://localhost/angular-project/";
  constructor(private httpClient: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getWorkers(): Observable<any> {
    // return this.httpClient
    //   .get(`${this.apiURL}/workers/getWorkers.php`)
    //   .pipe(map(this.extractData));

    return this.httpClient.get(`${this.apiURL}/workers/getWorkers.php`);
  }
}

// http://localhost/angular-project/
