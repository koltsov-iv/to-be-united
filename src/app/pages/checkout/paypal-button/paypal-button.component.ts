import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {combineLatest, Subject} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
})
export class PaypalButtonComponent implements OnInit {

  @ViewChild('form') form!: ElementRef;
  @Input("comment") comment!: FormControl
  @Input("amount") amount!: FormControl
  @Input("donationID") donationID$!: Subject<string>
  @Input("submitted") submitted$!: Subject<boolean>

  itemName: FormControl = new FormControl("")
  itemNumber: FormControl = new FormControl("")
  amountPaypal: FormControl = new FormControl("")

  constructor() {
  }

  ngOnInit(): void {
    this.amountPaypal.patchValue(this.amount.value/47)
    this.comment.valueChanges.subscribe(value => {
      this.itemName.patchValue(value)
    })
    this.amount.valueChanges.subscribe(value => {
      this.amountPaypal.patchValue(value/47)
    })

    combineLatest([this.submitted$,  this.donationID$]).subscribe(value => {
      this.itemNumber.patchValue(value[1])
      if (value[0]) {
        this.form.nativeElement.submit();
      }
    })
  }
}
