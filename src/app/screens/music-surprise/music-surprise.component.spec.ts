import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSurpriseComponent } from './music-surprise.component';

describe('MusicSurpriseComponent', () => {
  let component: MusicSurpriseComponent;
  let fixture: ComponentFixture<MusicSurpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicSurpriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicSurpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
