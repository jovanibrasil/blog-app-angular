import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoVbarComponent } from './user-info-vbar.component';

describe('UserInfoVbarComponent', () => {
  let component: UserInfoVbarComponent;
  let fixture: ComponentFixture<UserInfoVbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoVbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoVbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
