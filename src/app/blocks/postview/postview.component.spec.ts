import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostviewComponent } from './postview.component';

describe('PostviewComponent', () => {
  let component: PostviewComponent;
  let fixture: ComponentFixture<PostviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
