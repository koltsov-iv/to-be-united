import {Injectable, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private translateService: TranslateService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        headers: req.headers.set(
          'Accept-Language', this.translateService.currentLang || 'en'
        )
      })
    );
  }

}

export const languageInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LanguageInterceptor,
  multi: true,
  deps: [TranslateService]
};
