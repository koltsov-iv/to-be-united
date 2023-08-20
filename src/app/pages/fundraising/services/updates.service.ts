import {Translations} from "../../../../services/language/translations.service";
import {Observable, of} from "rxjs";
import {Update} from "./updates";
import {Injectable} from "@angular/core";


@Injectable()
export class UpdatesService {

  constructor(public translations: Translations) {
  }

  loadByFundraisingId(id: number): Observable<Update[]> {
    return of([{id: 1, text: this.translations.updates["1"], date: new Date("2023-08-20")}])
  }
}
