import { TestBed, inject } from '@angular/core/testing';

import { CourseInformationService } from './course-information.service';

describe('CourseInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseInformationService]
    });
  });

  it('should be created', inject([CourseInformationService], (service: CourseInformationService) => {
    expect(service).toBeTruthy();
  }));
});
