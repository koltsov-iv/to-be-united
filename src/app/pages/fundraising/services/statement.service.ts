import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, map, of} from "rxjs";
import {DonationResponse} from "./donationResponse";
import {Translations} from "../../../../services/language/translations.service";

@Injectable()
export class StatementService {

  constructor(
    private http: HttpClient,
    private translation: Translations,
  ) {

  }

  loadAll() {
    let httpHeaders = new HttpHeaders();
    return this.http.get<DonationResponse[]>("https://api.tobeunited.co.uk/donation", {
      headers: httpHeaders,
    }).pipe(map(
      results => results.sort(
        (x, y) => x.date > y.date ? -1 : 1)
    )).pipe(map(results => {
      return results.map((val) => {
        val.firstname = val.firstname ? val.firstname : this.translation.anonymous
        return val
      })
    })).pipe(
      // TODO: To backend
      map(result => result.filter(value => value.sum > 100))
    )
  }

}
