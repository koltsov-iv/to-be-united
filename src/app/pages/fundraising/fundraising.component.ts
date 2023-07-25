import {Component, ElementRef, OnInit} from '@angular/core';
import {StatementService} from "./services/statement.service";
import {map, Subject} from "rxjs";
import {DonationResponse} from "./services/donationResponse";
import {Fundraising} from "./services/fundraising";
import {FundraisingService} from "./services/fundraising.service";
import {Translations} from "../../../services/language/translations.service";
import {DeviceDetectorService} from "ngx-device-detector";

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
    private deviceService: DeviceDetectorService
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

  isNotSafari(): boolean {
    return this.deviceService.browser !== 'Safari'
  }

  readMoreBody(): void {
    this.el.nativeElement.querySelector("#body-inner-text").classList.remove("line-clamp-10")
    this.el.nativeElement.querySelector("#body-read-more").innerHTML = ""
  }
}
