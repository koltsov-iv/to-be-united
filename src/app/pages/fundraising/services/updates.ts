import {GalleryItem} from "ng-gallery";

export interface Update {
  id: number
  text: string
  date: Date
  media?: GalleryItem[]
}
