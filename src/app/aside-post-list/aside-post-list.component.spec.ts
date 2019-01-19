import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePostListComponent } from './aside-post-list.component';

describe('AsidePostListComponent', () => {
  let component: AsidePostListComponent;
  let fixture: ComponentFixture<AsidePostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidePostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
