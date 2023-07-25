import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
})
export class ActionButtonsComponent {
  constructor(public router: Router) {
  }
  onClick() {
    this.router.navigate(["donate"])
  }

}
