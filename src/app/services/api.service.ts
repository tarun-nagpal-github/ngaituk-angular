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
    return this.httpClient.get(`${this.apiURL}/workers/getWorkers.php`);
  }

  addWorker(body): Observable<any> {
    console.log("Before Submit ddd");
    console.log(body);
    console.log("Before Submit");
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.httpClient.post(
      `${this.apiURL}/workers/createWorker.php`,
      body,
      options
    );
  }
}

// http://localhost/angular-project/
