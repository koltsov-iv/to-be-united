import {Component, OnInit} from '@angular/core';
import {StatementService} from "./services/statement.service";
import {Subject} from "rxjs";
import {DonationResponse} from "./services/donationResponse";
import {Fundraising} from "./services/fundraising";
import {FundraisingService} from "./services/fundraising.service";

@Component({
  selector: 'app-fundraising',
  templateUrl: './fundraising.component.html',
  styleUrls: ['./fundraising.component.css']
})
export class FundraisingComponent  implements OnInit {
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  public $fundraising: Subject<Fundraising> = new  Subject()

  constructor(
    public statementService: StatementService,
    public fundraisingService: FundraisingService,
    ) {
  }

  ngOnInit(): void {
    this.statementService.loadAll().subscribe((val) => {
      this.$statement.next(val)
    })
    this.fundraisingService.findOne().subscribe((val)=>{
      this.$fundraising.next(val)
    })
  }
}
