import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwrittenNoteComponent } from './handwritten-note.component';

describe('HandwrittenNoteComponent', () => {
  let component: HandwrittenNoteComponent;
  let fixture: ComponentFixture<HandwrittenNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandwrittenNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandwrittenNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
