import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPostListComponent } from './best-post-list.component';

describe('BestPostListComponent', () => {
  let component: BestPostListComponent;
  let fixture: ComponentFixture<BestPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
