import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs";
// import  { Headers, RequestOptions}  from "@angular/common/http";

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

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    // let headers = new Headers({ "Content-Type": "application/json" });
    // let options = new RequestOptions({ headers: headers });
    return this.httpClient.post(
      `${this.apiURL}/workers/createWorker.php`,
      body,
      httpOptions
    );
  }
}

// http://localhost/angular-project/
