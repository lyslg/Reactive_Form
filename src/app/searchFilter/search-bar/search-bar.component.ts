import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {}

  @Output() changeConfirmStatus = new EventEmitter();
  @Output() clickSearchBtn = new EventEmitter();

  filterBtnList: string[] = [
    "전체",
    "승인대기",
    "재승인요청",
    "최저가오류",
    "승인완료",
    "품절",
    "단종"
  ];

  public filterConfirmStatus: Array<string> = ["전체"];

  prodListFilterForm = this._fb.group({
    prodName: [""],
    prodTag: [""],
    store: [""],
    prodBrand: [""],
    prodModelName: [""],
    additionalCheck: this._fb.group({
      rental: false,
      nonMemberPrice: false,
      openMarket: false
    }),
    additionalCheckArr: [""],
    deliveryCost: [""],
    deliveryBundle: [""],
    paymentWay: [""],
    tax: [""],
    profitRange: this._fb.array([]),
    membership: [""]
  });

  changeConfirmStatusbtn(e) {
    let v = e.target.value;
    let confirmArr = this.filterConfirmStatus;
    v === "전체"
      ? (this.filterConfirmStatus = ["전체"])
      : confirmArr.includes("전체") &&
        (confirmArr.splice(confirmArr.indexOf("전체"), 1),
        confirmArr.includes(v) && confirmArr.splice(confirmArr.indexOf(v), 1)),
      confirmArr.includes(v)
        ? confirmArr.splice(confirmArr.indexOf(v), 1)
        : confirmArr.push(v);

    (this.filterConfirmStatus.length === 6 ||
      !this.filterConfirmStatus.length) &&
      (this.filterConfirmStatus = ["전체"]);

    this.changeConfirmStatus.emit(this.filterConfirmStatus);
  }

  filter() {
    this.covertCheckItem();
    this.clickSearchBtn.emit(this.prodListFilterForm.value);
  }

  covertCheckItem() {
    let arr = [];
    for (let key in this.prodListFilterForm.value.additionalCheck) {
      this.prodListFilterForm.value.additionalCheck[key] === true &&
        arr.push(key);
    }
    this.prodListFilterForm.get("additionalCheckArr").setValue(arr);
  }
}
