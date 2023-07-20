import * as moment from 'moment';
import {Component, Input} from '@angular/core';
import {Subject} from "rxjs";
import {DonationResponse} from "../../services/donationResponse";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input("statement")
  public $statement: Subject<DonationResponse[]> = new Subject<DonationResponse[]>()

  constructor(
  ) {
  }

  FromNow(one: DonationResponse): string {
    return moment(one.date).fromNow()
  }
}
