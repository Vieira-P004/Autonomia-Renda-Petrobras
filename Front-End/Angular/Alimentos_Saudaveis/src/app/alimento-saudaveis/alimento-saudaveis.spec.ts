import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoSaudaveis } from './alimento-saudaveis';

describe('AlimentoSaudaveis', () => {
  let component: AlimentoSaudaveis;
  let fixture: ComponentFixture<AlimentoSaudaveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentoSaudaveis],
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentoSaudaveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
