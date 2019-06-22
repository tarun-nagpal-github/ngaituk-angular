import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs";
// import  { Headers, RequestOptions}  from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "http://localhost/angular-project/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    responseType: "text" as "json"
  };
  // apiURL: string = "http://api.ngaituk.online/";
  constructor(private httpClient: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getWorkers(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/workers/getWorkers.php`);
  }

  deleteWorker(id = null): Observable<any> {
    // let httpParams = new HttpParams();
    // httpParams.set("id", id);
    // let options = { params: httpParams };
    return this.httpClient.delete(`${this.apiURL}/workers/deleteWorker.php`, {
      body: { id: id }
    });
  }

  addWorker(body): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/workers/createWorker.php`,
      body,
      this.httpOptions
    );
  }
}
