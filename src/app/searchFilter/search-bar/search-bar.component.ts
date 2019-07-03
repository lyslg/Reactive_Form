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

  changeConfirmStatusbtn() {
    this.changeConfirmStatus.emit(this.filterConfirmStatus);
  }

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
  public filterProdContents = {};
  public filterProdName = "";
  public filterProdTag = "";
  public filterStore = "";
  public filterBrand = "";
  public filterProdModel = "";
  public additionalCheck = {
    rental: false,
    nonMemberPrice: false,
    openMarket: false
  };
  public deliveryCost = "";
  public deliveryBundle = "";
  public paymentWay = "";
  public tax = "";
  public profitRange = ["", ""];
  public membership = "";

  prodListFilterForm = this._fb.group({
    prodName: [""],
    prodTags: [""],
    store: [""],
    prodModelName: [""],
    additionalCheck: this._fb.group({
      rental: [""],
      nonMemberPrice: [""],
      openMarket: [""]
    }),
    deliveryCost: [""],
    deliveryBundle: [""],
    paymentWay: [""],
    tax: [""],
    profitRange: [""],
    membership: [""]
  });

  selectBtn(e) {
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

    this.changeConfirmStatusbtn();
  }

  filter() {
    this.filterProdContents["prodName"] = this.filterProdName;
    this.filterProdContents["prodTag"] = this.filterProdTag;
    this.filterProdContents["store"] = this.filterStore;
    this.filterProdContents["brand"] = this.filterBrand;
    this.filterProdContents["prodModel"] = this.filterProdModel;
    this.covertCheckItem();
    this.filterProdContents["deliveryCost"] = this.deliveryCost;
    this.filterProdContents["deliveryBundle"] = this.deliveryBundle;
    this.filterProdContents["paymentWay"] = this.paymentWay;
    this.filterProdContents["tax"] = this.tax;
    this.filterProdContents["profitRange"] = this.profitRange;
    this.filterProdContents["membership"] = this.membership;
    this.clickSearchBtn.emit(this.filterProdContents);

    // console.log("this.filterProdContents ::", this.filterProdContents);
  }

  covertCheckItem() {
    let arr = [];
    for (let key in this.additionalCheck) {
      this.additionalCheck[key] === true && arr.push(key);
    }
    this.filterProdContents["additionalCheck"] = arr;
    console.log("this what?", this.filterProdContents["additionalCheck"]);
  }

  selectedDeliveryCost(e) {
    this.deliveryCost = e.target.value;
  }

  selectedDeliveryBundle(e) {
    this.deliveryBundle = e.target.value;
  }

  selectedPaymentWay(e) {
    this.paymentWay = e.target.value;
  }

  selectedTax(e) {
    this.tax = e.target.value;
  }

  selectedmembership(e) {
    this.membership = e.target.value;
  }
}
