import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

@Component({
  selector: "app-typeahead",
  templateUrl: "./typeahead.component.html",
  styleUrls: ["./typeahead.component.css"]
})
export class TypeaheadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  storeList: any = [
    {
      id: 1,
      name: "엔빵",
      phoneNumber: "010-1234-1234",
      email: "tower33@empas.com"
    },
    {
      id: 2,
      name: "	(정)tw트레이딩",
      phoneNumber: "010-2321-5598",
      email: "tower33@empas.com"
    },
    {
      id: 3,
      name: "주식회사 제로플러스",
      phoneNumber: "010-3940-1000",
      email: "leewy123@zero-plus.kr"
    },
    {
      id: 4,
      name: "㈜선명",
      phoneNumber: "010-8710-2145",
      email: "insuk2145@naver.com"
    },
    {
      id: 5,
      name: "오너2",
      phoneNumber: "010-2575-1216",
      email: "song682372@naver.com"
    },
    {
      id: 6,
      name: "이투비플러스",
      phoneNumber: "010-8430-1108",
      email: "kej@e2bplus.com"
    },
    {
      id: 7,
      name: "(한)제이에스코스메틱(주)",
      phoneNumber: "010-2960-9803",
      email: "jsjpkorea@daum.net"
    },
    {
      id: 8,
      name: "(정)곳간푸드",
      phoneNumber: "010-5678-5678",
      email: "male"
    },
    {
      id: 9,
      name: "(주)대성",
      phoneNumber: "010-6317-0422",
      email: "jaewan@hanmail.net"
    },
    {
      id: 10,
      name: "(주)대상",
      phoneNumber: "1111111",
      email: "jaewan@hanmail.net"
    },
    {
      id: 11,
      name: "(공급)에이스톰테크놀로지",
      phoneNumber: "010-3136-7321",
      email: "invoice2@astom.co.kr"
    },
    {
      id: 12,
      name: "삼성솔고비즈2",
      phoneNumber: "010-4079-6289",
      email: "huhsss@naver.com"
    },
    {
      id: 13,
      name: "(정)(주)세븐라이너",
      phoneNumber: "010-7180-7159",
      email: "wb64@welbu.com"
    },
    {
      id: 14,
      name: "(정)주식회사 아이오컴퍼니",
      phoneNumber: "010-9916-3876",
      email: "tax@koreasmc.co.kr"
    },
    {
      id: 15,
      name: "(정)(주)우리나눔",
      phoneNumber: "010-4137-3031",
      email: "na7900@hanmail.net"
    },
    {
      id: 16,
      name: "(정)맥클린코스메틱",
      phoneNumber: "010-7288-8015",
      email: "macklin@macklincosmetic.co.kr"
    },
    {
      id: 17,
      name: "(정)주식회사 원광허브",
      phoneNumber: "010-3083-5130",
      email: "wkh4438@daum.net"
    },
    {
      id: 18,
      name: "㈜광주요",
      phoneNumber: "010-8565-9713",
      email: "bsk@gkwangjuyo.com"
    },
    {
      id: 19,
      name: "㈜태산인터내셔널",
      phoneNumber: "010-9790-2336",
      email: "taesan0716@naver.com"
    },
    {
      id: 20,
      name: "(정)피움코스메틱",
      phoneNumber: "010-3170-1626",
      email: "jang0010soo@naver.com"
    }
  ];

  public model: any;

  selectedStore(event) {
    this.model = JSON.parse(event.target.value);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ""
          ? []
          : this.storeList
              .filter(
                i =>
                  i.name.indexOf(term) > -1 ||
                  i.phoneNumber.indexOf(term) > -1 ||
                  i.email.indexOf(term) > -1
              )
              .slice(0, 10)
      )
    );

  formatterName = (x: { name: string }) => x.name;
  formatterPhone = (x: { phoneNumber: string }) => x.phoneNumber;
  formatterEmail = (x: { email: string }) => x.email;
}
