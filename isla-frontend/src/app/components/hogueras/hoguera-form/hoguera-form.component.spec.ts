import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogueraFormComponent } from './hoguera-form.component';

describe('HogueraFormComponent', () => {
  let component: HogueraFormComponent;
  let fixture: ComponentFixture<HogueraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HogueraFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HogueraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
