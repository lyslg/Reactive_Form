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
      brand,
      prodModel,
      additionalCheck,
      deliveryCost,
      deliveryBundle,
      paymentWay,
      tax,
      profitRange,
      membership
    } = filterProdObj;
    // console.log("filterProdObj (pipe)::", filterProdObj);
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

    if (brand) {
      filterProdObj.brand = brand.toLocaleLowerCase();
      products = [
        ...products.filter(product =>
          product.basic.brandName.toLocaleLowerCase().includes(brand)
        )
      ];
    }

    if (prodModel) {
      filterProdObj.prodModel = prodModel.toLocaleLowerCase();
      products = [
        ...products.filter(product =>
          product.basic.prodModelName.toLocaleLowerCase().includes(prodModel)
        )
      ];
    }

    if (additionalCheck) {
      !Object.values(additionalCheck).every(i => i === false) &&
        (products = [
          ...products.filter(product =>
            additionalCheck.every(check => product.basic.additionalCheck[check])
          )
        ]);
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
      if (profitRange.every(i => typeof i === "number")) {
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
