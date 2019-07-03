import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit {
  myTextarea;

  plusTop = "25px";
  test(e) {
    // window.getSelection();
    // console.log("focuson");
    console.log(e.target.getBoundingClientRect());
  }

  onkeyDown(e) {
    // if (e.key === "Enter") {
    //   console.log("pressed enter");
    // }
    console.log(e);
    console.log("asd");
    console.log(e.target.getBoundingClientRect());
  }
  constructor() {}

  ngOnInit() {}
}
