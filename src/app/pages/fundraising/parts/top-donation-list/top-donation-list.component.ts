import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DonationResponse} from "../../services/donationResponse";
import {Translations} from "../../../../../services/language/translations.service";

@Component({
  selector: 'app-top-donation-list',
  templateUrl: './top-donation-list.component.html',
})
export class TopDonationListComponent implements OnInit {

  @Input("statement")
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()

  public $fist: Subject<DonationResponse> = new Subject<DonationResponse>()
  public $top: Subject<DonationResponse> = new Subject<DonationResponse>()
  public $recent: Subject<DonationResponse> = new Subject<DonationResponse>()

  constructor(public translations: Translations) {
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
    })
  }

}
