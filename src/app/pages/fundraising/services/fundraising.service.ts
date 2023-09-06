import {Injectable} from '@angular/core';
import {Fundraising, FundraisingStatus} from "./fundraising";
import {delay, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FundraisingService {

  tmp: Fundraising = {
    id: 1,
    dateStart: new Date("2023-07-27"),
    dateClose: new Date("2023-08-31"),
    goal: 89345,
    status: FundraisingStatus.CLOSED,
  }
  constructor() { }

  findOne() {
    return of(this.tmp).pipe(delay(0))
  }
}
