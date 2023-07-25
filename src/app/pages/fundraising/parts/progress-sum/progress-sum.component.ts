import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Subject} from "rxjs";
import {DonationResponse} from "../../services/donationResponse";
import {Fundraising} from "../../services/fundraising";
import {Translations} from "../../../../../services/language/translations.service";

@Component({
  selector: 'app-progress-sum',
  templateUrl: './progress-sum.component.html',
})
export class ProgressSumComponent implements OnInit {
  @Input("statement")
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  @Input("fundraising")
  public $fundraising: Subject<Fundraising> = new Subject<Fundraising>()
  public $goal: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $sum: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $progress: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public $size: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor(
    public translations: Translations,
  ) {

  }

  ngOnInit(): void {
    this.$statement.subscribe((val) => {
      var res = 0
      val.map((one, index) => {
        res += one.sum
      })
      this.$sum.next(res ? res / 100 : 0)
      this.$size.next(val.length)
    })
    combineLatest([this.$sum, this.$fundraising])
      .subscribe((val) => {
        this.$goal.next(val[1].goal)
        this.$progress.next((val[0] / val[1].goal) * 100)
      })
  }

}
