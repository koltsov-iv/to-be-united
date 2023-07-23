import * as moment from 'moment';
import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {DonationResponse} from "../../services/donationResponse";
import {Translations} from "../../../../../services/language/translations.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input("statement")
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  public $shortList: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()
  public $hasMore: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public allItems: DonationResponse[] = []
  private SHOW_SIZE = 5
  private SHOWED = 0

  constructor(public translations: Translations) {
  }

  ngOnInit(): void {
    this.$statement.subscribe(val => {
      if (val.length > this.SHOW_SIZE) {
        this.$hasMore.next(true)
      }
      this.SHOWED = this.SHOW_SIZE
      this.$shortList.next(val.slice(0, this.SHOW_SIZE))
      this.allItems = val
    })
  }

  FromNow(one: DonationResponse): string {
    return moment(one.date).fromNow()
  }

  showMore() {
    this.SHOWED = this.SHOWED + this.SHOW_SIZE
    this.$shortList.next(this.allItems.slice(0, this.SHOWED))
    if (this.SHOWED >= this.allItems.length) {
      this.$hasMore.next(false)
    }
  }
}
