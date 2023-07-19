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
import { ActionBlockComponent } from './pages/fundraising/parts/action-block/action-block.component';
import {FundraisingService} from "./pages/fundraising/services/fundraising.service";
import { TopListItemComponent } from './pages/fundraising/parts/action-block/top-list-item/top-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FundraisingComponent,
    CheckoutComponent,
    ToolbarComponent,
    SanitizeHtmlPipe,
    CommentsComponent,
    ActionBlockComponent,
    TopListItemComponent,
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
