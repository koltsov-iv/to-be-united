import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Translations} from "../../../services/language/translations.service";
import {DonationService} from "./services/donation.service";
import {DonationRequest} from "./services/donation-request";
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {Fundraising, FundraisingStatus} from "../fundraising/services/fundraising";
import {FundraisingService} from "../fundraising/services/fundraising.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  public controls = {
    sum: new FormControl<number>(100, Validators.required),
    firstname: new FormControl<string>("", Validators.required),
    isAnonymous: new FormControl<boolean>(false),
    wish: new FormControl<string>(""),
    email: new FormControl<string>("", [Validators.required, Validators.email]),
    noCommunication: new FormControl<boolean>(false),
    notPublicName: new FormControl<boolean>(false),
    subscription: new FormControl<boolean>(true),
    participation: new FormControl<boolean>(true),
  }
  submitted = false;
  public form = new FormGroup(this.controls)

  submittedPaypal$: Subject<boolean> = new Subject<boolean>()
  donationID$: Subject<string> = new Subject<string>()

  constructor(
    public translations: Translations,
    public donationService: DonationService,
    public userService: UserService,
    public fundraisingService: FundraisingService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.controls.isAnonymous.valueChanges.subscribe(value => {
      if (value) {
        this.controls.firstname.disable()
        this.controls.firstname.removeValidators(Validators.required)
        this.controls.email.disable()
        this.controls.email.removeValidators(Validators.required)
      } else {
        this.controls.firstname.enable()
        this.controls.firstname.addValidators(Validators.required)
        this.controls.email.enable()
        this.controls.email.addValidators(Validators.required)
      }
    })
    this.fundraisingService.findOne().subscribe(value => {
      if (value.status === FundraisingStatus.CLOSED) {
        this.router.navigate([""])
      }
    })
  }


  onSubmit = (submitter: string) => {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      console.log("track metrics", this.form.errors)
      return
    }
    this.donationService.sendRequest(this.form.value as DonationRequest).subscribe((val) => {
      console.log(val)
      this.userService.StoreID(val.userID)
      if (submitter === "paypal-button") {
        this.donationID$.next(val.id)
        this.submittedPaypal$.next(true)
        return
      }
      if (submitter === "mono-pay-button") {
        window.location.href = val.donationLink
        setTimeout(() => {
          this.router.navigate([""])
        }, 10 * 1000)
      }
    })
  }
}
