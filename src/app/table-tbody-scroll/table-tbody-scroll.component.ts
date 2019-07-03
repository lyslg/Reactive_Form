import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table-tbody-scroll",
  templateUrl: "./table-tbody-scroll.component.html",
  styleUrls: ["./table-tbody-scroll.component.scss"]
})
export class TableTbodyScrollComponent implements OnInit {
  constructor() {}
  optNumber: string[] = [""];
  optItems: any = [];

  option: boolean = true;

  addOption() {
    this.optNumber.push("");
  }

  deleteOption(index) {
    this.optNumber.splice(index, 1);
  }

  optItemsfetch() {
    for (var i = 0; i < 15; i++) {
      this.optItems.push("");
    }
  }
  ngOnInit() {
    this.optItemsfetch();
  }
}
