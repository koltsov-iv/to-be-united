import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {DonationRequest} from "./donation-request";
import {DonationResponse} from "./donation-response";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  sendRequest(data: DonationRequest): Observable<DonationResponse> {
    return this.http.post<DonationResponse>("http://tobeunited.co.uk:8383/donation-request", data)
  }
}
