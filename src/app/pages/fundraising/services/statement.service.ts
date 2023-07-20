import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, map, of} from "rxjs";
import {DonationResponse} from "./donationResponse";
import {Translations} from "../../../../services/language/translations.service";

@Injectable()
export class StatementService {
  tmp = [
    {
      "time": 1688403733,
      "from": "Катерина Полянська",
      "comment": "I love you",
      "amount": 300,
    },
    {
      "time": 1684193689,
      "from": "Аня",
      "comment": "з Днем народження🥳 у тебе неймовірні плани, тому бажаю, щоб вони всі здійснились🫶🏻\n",
      "amount": 100,
    },
    {
      "time": 1680198689,
      "from": "Markus Wagner",
      "comment": "To support Ukraine is a moral imperative as long as the Russian occupying forces haven't returned all occupied areas including Crimea to Ukraine.",
      "amount": 400,
    },
  ]

  constructor(
    private http: HttpClient,
    private translation: Translations,
  ) {

  }

  loadAll() {
    let httpHeaders = new HttpHeaders();
    return this.http.get<DonationResponse[]>("http://tobeunited.co.uk:8383/donation", {
      headers: httpHeaders,
    }).pipe(map(
      results => results.sort(
        (x, y) => x.date > y.date ? -1 : 1)
    )).pipe(map(results => {
      return results.map((val) => {
        val.firstname = val.firstname ? val.firstname : this.translation.anonymous
        return val
      })
    }))
  }

}
