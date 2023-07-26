import { Injectable } from '@angular/core';
import {Fundraising} from "./fundraising";
import {delay, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FundraisingService {

  tmp: Fundraising = {
    dateStart: new Date("2023-07-27"),
    dateClose: new Date("2023-08-01"),
    goal: 89345,
  }
  constructor() { }

  findOne() {
    return of(this.tmp).pipe(delay(0))
  }
}
