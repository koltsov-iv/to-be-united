import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_ID_KEY = "UID"

  constructor() { }

  public StoreID(id: string): void {
    window.localStorage.setItem(this.USER_ID_KEY, id);
  }

  public GetID(): string | null {
    return window.localStorage.getItem(this.USER_ID_KEY)
  }
}
