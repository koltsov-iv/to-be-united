import {Component, ElementRef, OnInit} from '@angular/core';
import {StatementService} from "./services/statement.service";
import {map, Subject} from "rxjs";
import {DonationResponse} from "./services/donationResponse";
import {Fundraising} from "./services/fundraising";
import {FundraisingService} from "./services/fundraising.service";
import {Translations} from "../../../services/language/translations.service";

@Component({
  selector: 'app-fundraising',
  templateUrl: './fundraising.component.html',
})
export class FundraisingComponent implements OnInit {
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  public $fundraising: Subject<Fundraising> = new Subject()

  constructor(
    public statementService: StatementService,
    public fundraisingService: FundraisingService,
    public translations: Translations,
    private el: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this.statementService.loadAll().subscribe((val) => {
      this.$statement.next(val)
    })
    this.fundraisingService.findOne().subscribe((val) => {
      this.$fundraising.next(val)
    })
  }

  readMoreBody(): void {
    this.el.nativeElement.querySelector("#body-inner-text").classList.remove("line-clamp-10")
    this.el.nativeElement.querySelector("#body-read-more").innerHTML = ""
  }
}
