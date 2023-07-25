import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Translations} from "../../../services/language/translations.service";
import {DonationService} from "./services/donation.service";
import {DonationRequest} from "./services/donation-request";
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";

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

  constructor(
    public translations: Translations,
    public donationService: DonationService,
    public userService: UserService,
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
      } else  {
        this.controls.firstname.enable()
        this.controls.firstname.addValidators(Validators.required)
        this.controls.email.enable()
        this.controls.email.addValidators(Validators.required)
      }
    })
  }


  onSubmit = () => {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      console.log("track metrics", this.form.errors)
      return
    }
    this.donationService.sendRequest(this.form.value as DonationRequest).subscribe((val) => {
      console.log(val)
      window.open(val.donationLink, "_blank")
      this.userService.StoreID(val.userID)
      this.router.navigate([""])
    })
  }
}
