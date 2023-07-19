import {Component, Input} from '@angular/core';
import {DonationResponse} from "../../../services/donationResponse";

@Component({
  selector: 'app-top-list-item',
  templateUrl: './top-list-item.component.html',
  styleUrls: ['./top-list-item.component.css']
})
export class TopListItemComponent {
  @Input() title!: string;
  @Input() item!: DonationResponse;
}
