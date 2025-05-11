import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogueraListComponent } from './hoguera-list.component';

describe('HogueraListComponent', () => {
  let component: HogueraListComponent;
  let fixture: ComponentFixture<HogueraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HogueraListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HogueraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
