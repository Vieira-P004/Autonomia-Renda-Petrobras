import { TestBed } from '@angular/core/testing';

import { Pessoa } from '../models/pessoa';

describe('Pessoa', () => {
  let service: Pessoa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pessoa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});