import {Component, OnInit} from '@angular/core';
import {StatementService} from "./services/statement.service";
import {Subject} from "rxjs";
import {DonationResponse} from "./services/donationResponse";
import {Fundraising} from "./services/fundraising";
import {FundraisingService} from "./services/fundraising.service";
import {Translations} from "../../../services/language/translations.service";
import {Update} from "./services/updates";
import {UpdatesService} from "./services/updates.service";

@Component({
  selector: 'app-fundraising',
  templateUrl: './fundraising.component.html',
  styleUrls: ['./fundraising.component.css']

})
export class FundraisingComponent implements OnInit {
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  public $fundraising: Subject<Fundraising> = new Subject()
  public $updates: Subject<Update[]> = new Subject<Update[]>()

  constructor(
    public statementService: StatementService,
    public fundraisingService: FundraisingService,
    public translations: Translations,
    public updatesService: UpdatesService,
  ) {
  }

  ngOnInit(): void {
    this.statementService.loadAll().subscribe((val) => {
      this.$statement.next(val)
    })
    this.fundraisingService.findOne().subscribe((val) => {
      this.$fundraising.next(val)
      this.updatesService.loadByFundraisingId(1).subscribe(val => {
        console.log(val)
        this.$updates.next(val)
      })
    })

  }
}
