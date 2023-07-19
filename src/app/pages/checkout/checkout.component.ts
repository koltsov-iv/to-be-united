import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Translations} from "../../../services/language/translations.service";
import {DonationService} from "./services/donation.service";
import {DonationRequest} from "./services/donation-request";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  public controls = {
    sum: new FormControl<number>(100),
    firstname: new FormControl<string>(""),
    isAnonymous: new FormControl<boolean>(false),
    wish: new FormControl<string>(""),
    email: new FormControl<string>(""),
    noCommunication: new FormControl<boolean>(false),
    notPublicName: new FormControl<boolean>(false),
    subscription: new FormControl<boolean>(true),
    participation: new FormControl<boolean>(true),
  }
  public form = new FormGroup(this.controls)

  constructor(
    public translations: Translations,
    public donationService: DonationService
    ) {
  }

  onSubmit = () => {
    console.log("submit")
    if (this.form.invalid) {
      console.log("track metrics", this.form.errors)
    }
    console.log("Save Form", this.form.value)
    this.donationService.sendRequest(this.form.value as DonationRequest).subscribe((val) => {
      console.log(val)
      window.open(val.donationLink, "_blank")
    })
  }

  private createMessage() {
    return this.controls.wish.value;
  }
}
