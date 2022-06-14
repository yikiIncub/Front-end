import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFreelanceurComponent } from './sign-up-freelanceur.component';

describe('SignUpFreelanceurComponent', () => {
  let component: SignUpFreelanceurComponent;
  let fixture: ComponentFixture<SignUpFreelanceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFreelanceurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFreelanceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
