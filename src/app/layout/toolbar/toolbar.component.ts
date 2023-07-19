import {Component, Inject, OnInit} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";

import { Ripple, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(@Inject('ILanguageService') public languageService: LanguageService) {
  }

  ngOnInit(): void {
    initTE({Dropdown, Ripple})
  }
}
