import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, combineLatest, Subject} from "rxjs";
import {Fundraising} from "../../services/fundraising";
import * as moment from "moment";
import {DonationResponse} from "../../services/donationResponse";
import {Translations} from "../../../../../services/language/translations.service";

@Component({
  selector: 'app-action-block',
  templateUrl: './action-block.component.html',
  styleUrls: ['./action-block.component.css']
})
export class ActionBlockComponent implements OnInit {
  @Input("statement")
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  @Input("fundraising")
  public $fundraising: Subject<Fundraising> = new Subject<Fundraising>()
  public $goal: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $sum: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $progress: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $progressDate: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $dateDiff: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $daysLeft: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  public $fist: Subject<DonationResponse> = new Subject<DonationResponse>()
  public $top: Subject<DonationResponse> = new Subject<DonationResponse>()
  public $recent: Subject<DonationResponse> = new Subject<DonationResponse>()

  constructor(
    public router: Router,
    public translations: Translations,
  ) {
  }

  onClick() {
    this.router.navigate(["donate"])
  }

  ngOnInit(): void {
    this.$statement.subscribe((val) => {
      var res = 0
      var top: DonationResponse | undefined
      val.map((one, index) => {
        if (index == 0) {
          this.$recent.next(one)
        }
        if ((index + 1) == val.length) {
          this.$fist.next(one)
        }
        if (!top || one.sum > top.sum) {
          top = one
        }
        res += one.sum
      })
      if (top != undefined) {
        this.$top.next(top)
      }
      this.$sum.next(res ? res / 100 : 0)
    })
    this.$fundraising.subscribe((fundraising) => {
      const now = new Date()
      this.$progressDate.next((now.getTime() - fundraising.dateStart.getTime()) / (fundraising.dateClose.getTime() - fundraising.dateStart.getTime()) * 100)
      console.log(fundraising.dateClose.getDate(), fundraising.dateStart.getDate())
      this.$dateDiff.next(moment(fundraising.dateClose).diff(moment(fundraising.dateStart), "days"))
      this.$daysLeft.next(moment(fundraising.dateClose).diff(moment.now(), "days"))
      this.$goal.next(fundraising.goal)
    })
    combineLatest([this.$sum, this.$fundraising])
      .subscribe((val) => {
        this.$progress.next((this.$sum.getValue() / val[1].goal) * 100)
      })
  }
}
