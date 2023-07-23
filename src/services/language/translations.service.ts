import {Injectable} from '@angular/core';
import en from '@assets/languages/en';
import ua from '@assets/languages/ua';
import {from, map, Observable, pluck} from "rxjs";
import {TranslateLoader} from "@ngx-translate/core";
import pr from "@assets/languages/pr";

export function GenericClass<Props>(): new () => Props {
  return class {
  } as any;
}

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    //Todo: load only necessary language
    var source
    switch (lang){
      case "en":
        source = en
        break
      case "ua":
        source = ua
        break
      case "pr":
        source = pr
        break
    }
    return from([source]);
  }
}

@Injectable()
export class Translations extends GenericClass<typeof en>() {
  constructor() {
    super();
    Object.assign(this, transformObjectToPath('', en));
  }
}


export function transformObjectToPath<T extends object | string>(
  suffix: string,
  objectToTransformOrEndOfPath: T,
  path = ''
): T {
  return typeof objectToTransformOrEndOfPath === 'object'
    ? Object.entries(objectToTransformOrEndOfPath).reduce(
      (objectToTransform: any, [key, value]) => {
        objectToTransform[key] = transformObjectToPath(
          key,
          value,
          concatIfExistsPath(path, suffix)
        );

        return objectToTransform;
      },
      {} as T
    )
    : (concatIfExistsPath(path, suffix) as T);
}

function concatIfExistsPath(path: string, suffix: string): string {
  return path ? `${path}.${suffix}` : suffix;
}
