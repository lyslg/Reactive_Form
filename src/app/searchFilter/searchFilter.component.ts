import { Component, OnInit } from "@angular/core";
import { PRODUCTLIST } from "./productList.mock";

@Component({
  selector: "app-searchFilter",
  templateUrl: "./searchFilter.component.html",
  styleUrls: ["./searchFilter.component.scss"]
})
export class SearchFilterComponent implements OnInit {
  constructor() {}

  public productList = PRODUCTLIST;
  public productItems: any[] = [];
  public filterConfirmStatus = ["전체"];
  public filterProdObj = {};

  productItemfetch() {
    for (let i = 0; i < 5; i++) {
      this.productItems.push("");
    }
  }

  filter(products, status) {
    if (!products) return [];
    if (!status.length) return products;
    if (status[0] === "전체") return products;

    products = [
      ...products.filter(product => status.includes(product.confirmStatus))
    ];

    return products;
  }

  ngOnInit() {
    this.productItemfetch();
    console.log("this.productList is ", this.productList);
  }

  changeConfirmStatus(f) {
    this.filterConfirmStatus = f;
  }

  clickSearchBtn(filterProd) {
    this.filterProdObj = Object.assign({}, filterProd);
  }
}
