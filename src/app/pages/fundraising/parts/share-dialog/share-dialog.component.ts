import {Component, Inject, OnInit} from '@angular/core';
import {Translations} from "../../../../../services/language/translations.service";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../../../../services/user/user.service";
import {ILanguageService} from "../../../../../services/language/language.service";

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
})
export class ShareDialogComponent implements OnInit {
  showModal = false;
  email = new FormControl<string>("", Validators.email)
  link = new FormControl<string>("https://tobeunited.co.uk", Validators.email)
  submitted = false
  showEmail = false

  constructor(
    public translations: Translations,
    public userService: UserService,
    @Inject("ILanguageService") public langService: ILanguageService,
  ) {
  }

  ngOnInit(): void {
    const userID = this.userService.GetID()
    if (userID != null) {
      this.showEmail = false
    }
    this.link.patchValue(`https://tobeunited.co.uk?lang=${this.langService.getCurrentLang().key}&uid=${userID}`)
  }


  toggleModal(){
    this.showModal = !this.showModal;
  }

  highlight(el: HTMLElement) {
    el.classList.add("border-green-500")
  }
}
