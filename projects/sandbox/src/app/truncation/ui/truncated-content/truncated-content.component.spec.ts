import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatedContentComponent } from './truncated-content.component';

describe('TruncatedContentComponent', () => {
  let component: TruncatedContentComponent;
  let fixture: ComponentFixture<TruncatedContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TruncatedContentComponent]
    });
    fixture = TestBed.createComponent(TruncatedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
