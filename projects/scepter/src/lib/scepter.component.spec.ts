import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScepterComponent } from "./scepter.component";

describe("ScepterComponent", () => {
  let component: ScepterComponent;
  let fixture: ComponentFixture<ScepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScepterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ScepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
