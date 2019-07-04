import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchProduct"
})
export class SearchProductPipe implements PipeTransform {
  transform(products: any, filterProdObj: any): any {
    const {
      prodName,
      prodTag,
      store,
      prodBrand,
      prodModelName,
      additionalCheckArr,
      deliveryCost,
      deliveryBundle,
      paymentWay,
      tax,
      profitRange,
      membership
    } = filterProdObj;
    console.log("filterProdObj (pipe)::", filterProdObj);
    if (!products) return [];
    if (prodName) {
      filterProdObj.prodName = prodName.toLocaleLowerCase();
      products = [
        ...products.filter(product =>
          product.basic.prodName.toLocaleLowerCase().includes(prodName)
        )
      ];
    }

    if (prodTag) {
      products = [
        ...products.filter(product => product.basic.prodTags.includes(prodTag))
      ];
    }

    if (store) {
      products = [
        ...products.filter(product => product.basic.store.name.includes(store))
      ];
    }

    if (prodBrand) {
      filterProdObj.prodBrand = prodBrand.toLocaleLowerCase();
      products = [
        ...products.filter(product =>
          product.basic.brandName.toLocaleLowerCase().includes(prodBrand)
        )
      ];
    }

    if (prodModelName) {
      filterProdObj.prodModelName = prodModelName.toLocaleLowerCase();
      products = [
        ...products.filter(product =>
          product.basic.prodModelName
            .toLocaleLowerCase()
            .includes(prodModelName)
        )
      ];
    }

    if (additionalCheckArr) {
      products = [
        ...products.filter(product =>
          additionalCheckArr.every(
            check => product.basic.additionalCheck[check]
          )
        )
      ];
    }

    if (deliveryCost) {
      deliveryCost === "free"
        ? (products = [
            ...products.filter(
              product => product.delivery.deliveryCost === "free"
            )
          ])
        : (products = [
            ...products.filter(
              product => product.delivery.deliveryCost !== "free"
            )
          ]);
    }

    if (deliveryBundle) {
      filterProdObj.deliveryBundle = deliveryBundle === "true";
      products = [
        ...products.filter(
          product => product.delivery.deliveryBundle === deliveryBundle
        )
      ];
    }

    if (paymentWay) {
      products = [
        ...products.filter(product => product.basic.paymentWay === paymentWay)
      ];
    }

    if (tax) {
      products = [...products.filter(product => product.basic.tax === tax)];
    }

    if (profitRange) {
      if (profitRange.length) {
        products = [
          ...products.filter(
            product =>
              product.price.profitRate <= profitRange[1] &&
              product.price.profitRate >= profitRange[0]
          )
        ];
      }
    }

    if (membership) {
      products = [
        ...products.filter(product => product.basic.membership[membership])
      ];
    }

    return products;
  }
}
