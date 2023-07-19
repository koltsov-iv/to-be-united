import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListItemComponent } from './top-list-item.component';

describe('TopListItemComponent', () => {
  let component: TopListItemComponent;
  let fixture: ComponentFixture<TopListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopListItemComponent]
    });
    fixture = TestBed.createComponent(TopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
