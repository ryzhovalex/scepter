import { TestBed } from "@angular/core/testing";

import { ScepterService } from "./scepter.service";

describe("ScepterService", () => {
  let service: ScepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScepterService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
