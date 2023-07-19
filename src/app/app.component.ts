import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {LanguageService} from "../services/language/language.service";
import {StatementService} from "./pages/fundraising/services/statement.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject("ILanguageService") public languageService: LanguageService,
    ) {
  }
  ngOnInit(): void {
    this.languageService.initTranslation();
  }
  title = 'to-be-united';
}
