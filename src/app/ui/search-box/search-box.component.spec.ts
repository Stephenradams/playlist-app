import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBoxComponent } from "./search-box.component";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { PlaylistStore } from "../../store/playlist.store";

describe("SearchBoxComponent", () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBoxComponent],
      providers: [
        PlaylistStore,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync("animations"),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
