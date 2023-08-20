import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Translations} from "../../../../../services/language/translations.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
})
export class DescriptionComponent implements OnInit, AfterViewInit {
  @ViewChild('clampContent') clampContentElement!: ElementRef;

  public fullContent = ''
  public showedContent = ''
  public isTruncated = false
  public isExpanded = false

  constructor(
    public translations: Translations,
    public translateService: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.showedContent = this.fullContent = this.translateService.instant(this.translations.fundraising_page.body_description);
    this.translateService.onLangChange.subscribe(() => {
      this.showedContent = this.fullContent = this.translateService.instant(this.translations.fundraising_page.body_description);
      this.cdr.detectChanges();
      this.applyLineClamp();
    });
  }

  ngAfterViewInit(): void {
    this.applyLineClamp();
    this.cdr.detectChanges();
  }

  showReadMore(): boolean {
    return this.isTruncated
  }

  readMoreBody() {
    this.clampContentElement.nativeElement.innerHTML = this.fullContent
    this.isTruncated = false
    this.isExpanded = true
  }

  applyLineClamp() {
    if (this.isExpanded) {
      return
    }
    const contentElement = this.clampContentElement.nativeElement;
    const maxHeight = 200; // Adjust this value based on your design

    const clone = contentElement.cloneNode(true);
    contentElement.innerHTML = '';
    clone.childNodes.forEach((node: any) => {
      contentElement.appendChild(node.cloneNode(true));
    })
    let currentHeight = contentElement.clientHeight;
    while (currentHeight > maxHeight) {
      const lastChild = contentElement.lastChild;

      if (lastChild) {
        this.isTruncated = true
        contentElement.removeChild(lastChild);
        currentHeight = contentElement.clientHeight;
      } else {
        break;
      }
    }
  }
}
