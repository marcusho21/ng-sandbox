import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonComponent } from './link-button.component';

describe('LinkButtonComponent', () => {
  let component: LinkButtonComponent;
  let fixture: ComponentFixture<LinkButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinkButtonComponent]
    });
    fixture = TestBed.createComponent(LinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
