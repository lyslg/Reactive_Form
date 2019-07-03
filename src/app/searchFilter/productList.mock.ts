export const PRODUCTLIST = [
  {
    id: 0,
    basic: {
      store: {
        id: 1,
        name: "엔빵",
        onerManagerName: "이은한",
        email: "tower33@empas.com",
        paymentWay: "beforePayment",
        tax: "tax",
        phoneNumber: "010-1234-1234",
        settlement: { rate: 5 },
        deliverySchedule: {
          inday: 2
        },
        deliveryStartPoint: [
          {
            id: 0,
            name: "엔빵",
            address: "인천 부평구 부평동 국천빌딩",
            deliveryCompany: "대한통운",
            bundle: true
          },
          {
            id: 1,
            name: "엔빵공급",
            address: "인천 부평구 부평동 국천빌딩",
            deliveryCompany: "대한통운",
            bundle: false
          }
        ],
        membership: {
          premium: true,
          diamond: true,
          gold: false,
          silver: false,
          nonMember: false
        }
      },
      paymentWay: "afterPayment",
      tax: "taxFree",
      category: "카테고리",
      brandName: "에어프리",
      prodModelName: "P72-4561",
      prodName: "에어프리 초고속 진공블렌더 R9 (P72-4561)",
      membership: {
        premium: true,
        diamond: true,
        gold: true,
        silver: true,
        nonMember: true
      },
      manufacturer: "삼성",
      prodOrigin: "원산지",
      additionalCheck: {
        nonMemberPrice: true,
        openMarket: true,
        rental: true
      },
      prodTags: ["에어프리", "진공블렌더", "믹서기", "P72-4561", "엔빵"]
    },
    delivery: {
      deliveryWay: "택배,소포,등기",
      deliveryStartPoint: "엔빵",
      deliveryBundle: true,
      deliverySchedule: {
        inday: 2
      },
      deliveryCost: "free",
      deliveryBenefit: {
        benefitMinCost: "50000"
      },
      refundCost: "2500"
    },

    price: {
      retailPrice: 100000,
      purchasePrice: 80000,
      point: 0,
      cash: 0,
      lowestPrice: {
        storeName: "옥션",
        price: 120000
      },
      basicPrice: 120000,
      profitRate: 10,
      pvCalcWay: {
        rate: 100,
        settlement: "",
        sum: ""
      },
      distributionProfitRate: 5,
      membershipPrice: 138000,
      pvPrice: 138000,
      distributionPrice: 84000,
      membershipStore: {
        storeName: "떠리몰",
        price: 110000,
        site: "https://www.naver.com",
        date: "20190513"
      }
    },
    option: {
      optionForm: "mixForm",
      optionCount: 2,
      optionList: [
        { name: "색상", value: "빨강,노랑,검정" },
        { name: "사이즈", value: "s,m,l" }
      ],
      optionListSort: ""
    },
    imageUpload: {
      mainImg: [{}],
      additionalImg: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    },
    detailDescription: "",
    prodNoti: {
      useBasicNoti: true,
      noti: 9
    },
    adminMemo: [
      {
        id: 0,
        contents: "asd",
        userName: "엔빵고객센터",
        secret: true
      }
    ],
    confirmStatus: "승인대기"
  },
  {
    id: 1,
    basic: {
      store: {
        id: 1,
        name: "이노드림",
        onerManagerName: "이은한",
        email: "tower33@empas.com",
        paymentWay: "beforePayment",
        tax: "tax",
        phoneNumber: "010-1234-1234",
        settlement: { rate: 5 },
        deliverySchedule: {
          inday: 2
        },
        deliveryStartPoint: [
          {
            id: 0,
            name: "엔빵",
            address: "인천 부평구 부평동 국천빌딩",
            deliveryCompany: "대한통운",
            bundle: true
          },
          {
            id: 1,
            name: "엔빵공급",
            address: "인천 부평구 부평동 국천빌딩",
            deliveryCompany: "대한통운",
            bundle: false
          }
        ],
        membership: {
          premium: true,
          diamond: true,
          gold: false,
          silver: false,
          nonMember: false
        }
      },
      paymentWay: "beforePayment",
      tax: "tax",
      category: "카테고리",
      brandName: "스위스밀리터리",
      prodModelName: "SMA-V22S",
      prodName: "스위스밀리터리 무선 진공 청소기 커피",
      membership: {
        premium: true,
        diamond: true,
        gold: true,
        silver: false,
        nonMember: false
      },
      manufacturer: "삼성",
      prodOrigin: "원산지",
      additionalCheck: {
        nonMemberPrice: true,
        openMarket: false,
        rental: false
      },
      prodTags: ["스위스밀리터리", "청소기", "진공청소기", "무선청소기"]
    },
    delivery: {
      deliveryWay: "택배,소포,등기",
      deliveryStartPoint: "엔빵",
      deliveryBundle: false,
      deliverySchedule: {
        inday: 2
      },
      deliveryCost: {
        noFree: "2500",
        costPerProdCont: "10"
      },
      deliveryBenefit: {
        benefitMinCost: "50000"
      },
      refundCost: "2500"
    },

    price: {
      retailPrice: 100000,
      purchasePrice: 80000,
      point: 0,
      cash: 0,
      lowestPrice: {
        storeName: "옥션",
        price: 120000
      },
      basicPrice: 120000,
      profitRate: 15,
      pvCalcWay: {
        rate: 100,
        settlement: "",
        sum: ""
      },
      distributionProfitRate: 5,
      membershipPrice: 138000,
      pvPrice: 138000,
      distributionPrice: 84000,
      membershipStore: {
        storeName: "떠리몰",
        price: 110000,
        site: "https://www.naver.com",
        date: "20190513"
      }
    },
    option: {
      optionForm: "mixForm",
      optionCount: 2,
      optionList: [
        { name: "색상", value: "빨강,노랑,검정" },
        { name: "사이즈", value: "s,m,l" }
      ],
      optionListSort: ""
    },
    imageUpload: {
      mainImg: [{}],
      additionalImg: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    },
    detailDescription: "",
    prodNoti: {
      useBasicNoti: true,
      noti: 9
    },
    adminMemo: [
      {
        id: 0,
        contents: "asd",
        userName: "엔빵고객센터",
        secret: true
      }
    ],
    confirmStatus: "최저가오류"
  },
  {
    id: 2,
    basic: {
      store: {
        id: 1,
        name: "도매의신",
        onerManagerName: "이은한",
        email: "tower33@empas.com",
        paymentWay: "beforePayment",
        tax: "tax",
        phoneNumber: "010-1234-1234",
        settlement: { rate: 5 },
        deliverySchedule: {
          inday: 2
        },
        deliveryStartPoint: [
          {
            id: 0,
            name: "엔빵",
            address: "인천 부평구 부평동 국천빌딩",
            deliveryCompany: "대한통운",
            bundle: true
          },
          {
            id: 1,
            name: "엔빵공급",
            address: "인천 부평구 부평동 국천빌딩",
            deliveryCompany: "대한통운",
            bundle: false
          }
        ],
        membership: {
          premium: true,
          diamond: true,
          gold: false,
          silver: false,
          nonMember: false
        }
      },
      paymentWay: "beforePayment",
      tax: "tax",
      category: "카테고리",
      brandName: "어바닉",
      prodModelName: "SMA-V22S",
      prodName: "어바닉그라인더 원두커피분쇄기 커피그라인더",
      membership: {
        premium: true,
        diamond: true,
        gold: false,
        silver: false,
        nonMember: false
      },
      manufacturer: "삼성",
      prodOrigin: "원산지",
      additionalCheck: {
        nonMemberPrice: false,
        openMarket: false,
        rental: true
      },
      prodTags: ["어바닉", "원두커피", "커피그라인더", "SMA-V22S"]
    },
    delivery: {
      deliveryWay: "택배,소포,등기",
      deliveryStartPoint: "엔빵",
      deliveryBundle: true,
      deliverySchedule: {
        inday: 2
      },
      deliveryCost: {
        noFree: "2500",
        costPerProdCont: "10"
      },
      deliveryBenefit: {
        benefitMinCost: "50000"
      },
      refundCost: "2500"
    },

    price: {
      retailPrice: 100000,
      purchasePrice: 80000,
      point: 0,
      cash: 0,
      lowestPrice: {
        storeName: "옥션",
        price: 120000
      },
      basicPrice: 120000,
      profitRate: 15,
      pvCalcWay: {
        rate: 100,
        settlement: "",
        sum: ""
      },
      distributionProfitRate: 5,
      membershipPrice: 138000,
      pvPrice: 138000,
      distributionPrice: 84000,
      membershipStore: {
        storeName: "떠리몰",
        price: 110000,
        site: "https://www.naver.com",
        date: "20190513"
      }
    },
    option: {
      optionForm: "mixForm",
      optionCount: 2,
      optionList: [
        { name: "색상", value: "빨강,노랑,검정" },
        { name: "사이즈", value: "s,m,l" }
      ],
      optionListSort: ""
    },
    imageUpload: {
      mainImg: [{}],
      additionalImg: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    },
    detailDescription: "",
    prodNoti: {
      useBasicNoti: true,
      noti: 9
    },
    adminMemo: [
      {
        id: 0,
        contents: "asd",
        userName: "엔빵고객센터",
        secret: true
      }
    ],
    confirmStatus: "재승인요청"
  }
];
