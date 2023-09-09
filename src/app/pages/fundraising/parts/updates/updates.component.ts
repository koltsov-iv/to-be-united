import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Gallery} from "ng-gallery";
import {UpdatesService} from "../../services/updates.service";
import {Translations} from "../../../../../services/language/translations.service";
import {BehaviorSubject, Subject} from "rxjs";
import {Update} from "../../services/updates";
import {Fundraising} from "../../services/fundraising";

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
})
export class UpdatesComponent implements OnInit {

  @Input("fundraising")
  public $fundraising: Subject<Fundraising> = new Subject()
  public $updates: Subject<Update[]> = new Subject<Update[]>()
  public $hasMore: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public allItems: Update[] = []

  private SHOW_SIZE = 5
  private SHOWED = 0

  constructor(
    public gallery: Gallery,
    public updatesService: UpdatesService,
    public translations: Translations,
    private cdRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    let galleryRef = this.gallery.ref();
    this.$fundraising.subscribe(val => {
      this.updatesService.loadByFundraisingId(val.id).subscribe(val => {
        if (val.length > 1) {
          this.$hasMore.next(true)
        }
        this.$updates.next(val.slice(0, 1))
        this.allItems = val
        val.forEach((update) => {
          if (update.media) {
            galleryRef.load(update.media)
          }
        })
        this.cdRef.detectChanges()
      })
    })
  }
  showMore() {
    this.SHOWED = this.SHOWED + this.SHOW_SIZE
    this.$updates.next(this.allItems.slice(0, this.SHOWED))
    if (this.SHOWED >= this.allItems.length) {
      this.$hasMore.next(false)
    }
  }
}
