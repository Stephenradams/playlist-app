import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaylistDetailsComponent } from "./playlist-details.component";
import { ActivatedRoute } from "@angular/router";

describe("PlaylistDetailsComponent", () => {
  let component: PlaylistDetailsComponent;
  let fixture: ComponentFixture<PlaylistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: "pl.1234" } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
