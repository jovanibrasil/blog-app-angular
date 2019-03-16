import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardGridComponent } from './post-card-grid.component';

describe('PostCardGridComponent', () => {
  let component: PostCardGridComponent;
  let fixture: ComponentFixture<PostCardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
