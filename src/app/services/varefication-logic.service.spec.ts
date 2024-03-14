import { TestBed } from '@angular/core/testing';

import { VareficationLogicService } from './varefication-logic.service';

describe('VareficationLogicService', () => {
  let service: VareficationLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VareficationLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
