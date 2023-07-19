import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {DonationResponseMock} from "./donation-response.mock";
import {DonationRequest} from "./donation-request";
import {DonationResponse} from "./donation-response";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor() { }

  sendRequest(data: DonationRequest): Observable<DonationResponse> {
    return of(DonationResponseMock)
  }
}
