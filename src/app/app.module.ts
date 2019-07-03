import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TypeaheadComponent } from "./typeahead/typeahead.component";
import { FormsModule } from "@angular/forms";
import { TableTbodyScrollComponent } from "./table-tbody-scroll/table-tbody-scroll.component";
import { ImageUploadComponent } from "./image-upload/image-upload.component";
import { EditorComponent } from "./editor/editor.component";
import { SearchFilterComponent } from "./searchFilter/searchFilter.component";
import { SearchBarComponent } from "./searchFilter/search-bar/search-bar.component";
import { SearchProductPipe } from "./searchFilter/search-product.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    TypeaheadComponent,
    TableTbodyScrollComponent,
    ImageUploadComponent,
    EditorComponent,
    SearchFilterComponent,
    SearchBarComponent,
    SearchProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
