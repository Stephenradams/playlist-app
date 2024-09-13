import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ActivatedRoute } from "@angular/router";
import { PlaylistStore } from "../../store/playlist.store";
import { DetailsComponent } from "./details.component";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [
        PlaylistStore,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync("animations"),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: "pl.1234" } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
