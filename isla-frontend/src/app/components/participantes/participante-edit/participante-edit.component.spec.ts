import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteEditComponent } from './participante-edit.component';

describe('ParticipanteEditComponent', () => {
  let component: ParticipanteEditComponent;
  let fixture: ComponentFixture<ParticipanteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipanteEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipanteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
