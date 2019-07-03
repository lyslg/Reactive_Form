import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TypeaheadComponent } from "../typeahead/typeahead.component";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, NgbTypeaheadModule],
  declarations: [TypeaheadComponent]
})
export class TypeaheadModule {}
