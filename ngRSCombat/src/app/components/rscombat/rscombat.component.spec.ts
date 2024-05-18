import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSCombatComponent } from './rscombat.component';

describe('RSCombatComponent', () => {
  let component: RSCombatComponent;
  let fixture: ComponentFixture<RSCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RSCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RSCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
