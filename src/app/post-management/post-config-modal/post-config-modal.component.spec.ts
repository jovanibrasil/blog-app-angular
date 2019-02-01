import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConfigModalComponent } from './post-config-modal.component';

describe('PostConfigModalComponent', () => {
  let component: PostConfigModalComponent;
  let fixture: ComponentFixture<PostConfigModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConfigModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
