import { TestBed } from '@angular/core/testing';

import { ImgToBase64Service } from './img-to-base64.service';

describe('ImgToBase64Service', () => {
  let service: ImgToBase64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgToBase64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
