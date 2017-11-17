import { TestBed, inject } from '@angular/core/testing';

import { AddBuildingService } from '../../shared/services/add-building.service';

describe('AddBuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBuildingService]
    });
  });

  // it('should be created', inject([AddBuildingService], (service: AddBuildingService) => {
  //   expect(service).toBeTruthy();
  // }));
});
