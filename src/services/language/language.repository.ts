import {Provider} from '@angular/core';

export interface ILanguageRepository {
  getCurrentLangKey(): string | null;

  setLangKey(key: string): void;
}

export class LocalStorageLanguageRepository implements ILanguageRepository {
  private LANG_KEY = `lang`;

  constructor() {
  }

  public setLangKey(key: string): void {
    this.removeKey();
    window.localStorage.setItem(this.LANG_KEY, key);
  }

  public getCurrentLangKey(): string | null {
    const res = localStorage.getItem(this.LANG_KEY);
    return res ? res : null;
  }

  public removeKey(): void {
    return localStorage.removeItem(this.LANG_KEY);
  }
}

export const LocalStorageLanguageRepositoryProvider: Provider = {provide: 'ILanguageRepository', useClass: LocalStorageLanguageRepository};
