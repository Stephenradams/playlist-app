import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-search-box",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: "./search-box.component.html",
  styleUrl: "./search-box.component.scss",
})
export class SearchBoxComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() clearEvent = new EventEmitter<void>();

  search(value: string) {
    if (value.length > 3) {
      this.searchEvent.emit(value);
    }
    if (value.length === 0) {
      console.log("Clearing search term");
      this.clearEvent.emit();
    }
  }
}
