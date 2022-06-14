import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixincriptionComponent } from './choixincription.component';

describe('ChoixincriptionComponent', () => {
  let component: ChoixincriptionComponent;
  let fixture: ComponentFixture<ChoixincriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixincriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixincriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
