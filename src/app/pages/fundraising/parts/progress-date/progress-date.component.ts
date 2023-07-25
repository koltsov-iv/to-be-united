import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {DonationResponse} from "../../services/donationResponse";
import {Fundraising} from "../../services/fundraising";
import {Translations} from "../../../../../services/language/translations.service";
import * as moment from "moment/moment";

@Component({
  selector: 'app-progress-date',
  templateUrl: './progress-date.component.html',
})
export class ProgressDateComponent implements OnInit {
  @Input("statement")
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  @Input("fundraising")
  public $fundraising: Subject<Fundraising> = new Subject<Fundraising>()
  public $progressDate: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $dateDiff: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $daysLeft: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor(
    public translations: Translations,
  ) {
  }

  ngOnInit(): void {
    this.$fundraising.subscribe((fundraising) => {
      const now = new Date()
      this.$progressDate.next((now.getTime() - fundraising.dateStart.getTime()) / (fundraising.dateClose.getTime() - fundraising.dateStart.getTime()) * 100)
      console.log(fundraising.dateClose.getDate(), fundraising.dateStart.getDate())
      this.$dateDiff.next(moment(fundraising.dateClose).diff(moment(fundraising.dateStart), "days"))
      this.$daysLeft.next(moment(fundraising.dateClose).diff(moment.now(), "days"))
    })
  }
}
