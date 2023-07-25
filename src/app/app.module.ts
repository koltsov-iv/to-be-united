import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FundraisingComponent} from './pages/fundraising/fundraising.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {LanguageServiceProvider} from "../services/language/language.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Translations, WebpackTranslateLoader} from "../services/language/translations.service";
import {LocalStorageLanguageRepositoryProvider} from "../services/language/language.repository";
import {StatementService} from "./pages/fundraising/services/statement.service";
import {SanitizeHtmlPipe} from './sanitize-html.pipe';
import { CommentsComponent } from './pages/fundraising/parts/comments/comments.component';
import {FundraisingService} from "./pages/fundraising/services/fundraising.service";
import { TopListItemComponent } from './pages/fundraising/parts/top-donation-list/top-list-item/top-list-item.component';
import { TopDonationListComponent } from './pages/fundraising/parts/top-donation-list/top-donation-list.component';
import { ActionButtonsComponent } from './pages/fundraising/parts/action-buttons/action-buttons.component';
import { ProgressSumComponent } from './pages/fundraising/parts/progress-sum/progress-sum.component';
import { ProgressDateComponent } from './pages/fundraising/parts/progress-date/progress-date.component';

@NgModule({
  declarations: [
    AppComponent,
    FundraisingComponent,
    CheckoutComponent,
    ToolbarComponent,
    SanitizeHtmlPipe,
    CommentsComponent,
    TopListItemComponent,
    TopDonationListComponent,
    ActionButtonsComponent,
    ProgressSumComponent,
    ProgressDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: "en",
    }),
  ],
  providers: [
    LanguageServiceProvider,
    LocalStorageLanguageRepositoryProvider,
    Translations,
    StatementService,
    FundraisingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
