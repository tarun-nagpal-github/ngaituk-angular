import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "http://localhost/ngaituk-php/";
  // apiURL: string = "http://api.ngaituk.online/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    responseType: "text" as "json"
  };
  constructor(private httpClient: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getWorkers(id = null): Observable<any> {
    let apiUrl = `${this.apiURL}/workers/getWorkers.php`;
    apiUrl = id ? apiUrl + `?id=${id}` : apiUrl;

    return this.httpClient.get(apiUrl);
  }

  getWorkersByContractor(id = null): Observable<any> {
    let contractorId = localStorage.getItem("timesheet-data-contractor");
    let apiUrl = `${this.apiURL}/workers/getWorkersByContractor.php?id=${contractorId}`;
    return this.httpClient.get(apiUrl);
  }

  geContractors(id = null): Observable<any> {
    // console.log("GET CONTRACTORS");
    return this.httpClient.get(`${this.apiURL}/contractors/getContractors.php`);
  }

  getJobs(id = null): Observable<any> {
    let apiUrl = `${this.apiURL}/jobs/getJobs.php`;
    apiUrl = id ? apiUrl + `?id=${id}` : apiUrl;

    console.log("ID");
    console.log(apiUrl);
    console.log("ID");

    return this.httpClient.get(apiUrl);
  }

  getTimesheet(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/timesheet/getTimesheet.php`);
  }

  deleteWorker(id = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/workers/deleteWorker.php?id=${id}`,
      {}
    );
  }

  deleteContractor(id = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/contractors/deleteContractor.php?id=${id}`,
      {}
    );
  }

  deleteJob(s_no = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/jobs/deleteJob.php?s_no=${s_no}`,
      {}
    );
  }

  addWorker(body): Observable<any> {
    console.log("WORKER DATA");
    console.log(body);
    console.log("WORKER DATA");
    // debugger;

    return this.httpClient.put(
      `${this.apiURL}/workers/createWorker.php`,
      body,
      this.httpOptions
    );
  }

  addContractor(body): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/contractors/createContractor.php`,
      body,
      this.httpOptions
    );
  }

  addJob(body): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/jobs/createjob.php`,
      body,
      this.httpOptions
    );
  }
}
