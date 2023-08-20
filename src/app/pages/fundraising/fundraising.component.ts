import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StatementService} from "./services/statement.service";
import {Subject} from "rxjs";
import {DonationResponse} from "./services/donationResponse";
import {Fundraising} from "./services/fundraising";
import {FundraisingService} from "./services/fundraising.service";
import {Translations} from "../../../services/language/translations.service";
import {TranslateService} from "@ngx-translate/core";

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
}
