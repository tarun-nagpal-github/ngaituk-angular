import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiContractorService {
  apiURL: string = "http://localhost/ngaituk-php/";
  // apiURL: string = "http://api.ngaituk.online/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    responseType: "text" as "json"
  };
  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getContarctors(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/contractors/getContractors.php`);
  }

  deleteContractor(id = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/contractors/deleteContractor.php?id=${id}`,
      {}
    );
  }

  createContractor(body): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/contractors/createContractor.php`,
      body,
      this.httpOptions
    );
  }
}
