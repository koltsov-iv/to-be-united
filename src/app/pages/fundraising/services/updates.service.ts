import {Translations} from "../../../../services/language/translations.service";
import {map, Observable, of} from "rxjs";
import {Update} from "./updates";
import {Injectable} from "@angular/core";
import {ImageItem} from "ng-gallery";


@Injectable()
export class UpdatesService {

  constructor(public translations: Translations) {
  }

  loadByFundraisingId(id: number): Observable<Update[]> {
    return of([
      {id: 1, text: this.translations.updates["1"], date: new Date("2023-08-20")},
      {
        id: 2, text: this.translations.updates["2"], date: new Date("2023-09-06"), media: [
          new ImageItem({src: 'assets/drone-page/result.jpg', thumb: 'assets/drone-page/result_thumb.jpg'}),
          new ImageItem({src: 'assets/drone-page/report.png', thumb: 'assets/drone-page/report_thumb.png'}),
        ]
      },
    ]).pipe(map(result => result.sort((x, y) => x.date > y.date ? -1 : 1)))
  }
}
