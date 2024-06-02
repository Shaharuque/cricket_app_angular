import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMatchDetailsComponent } from './single-match-details.component';

describe('SingleMatchDetailsComponent', () => {
  let component: SingleMatchDetailsComponent;
  let fixture: ComponentFixture<SingleMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleMatchDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
