import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogueraEditComponent } from './hoguera-edit.component';

describe('HogueraEditComponent', () => {
  let component: HogueraEditComponent;
  let fixture: ComponentFixture<HogueraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HogueraEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HogueraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
