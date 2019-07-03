import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.css"]
})
export class ImageUploadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public imagePath;
  imgURL: any;
  public message: string;
  onlyOne;

  mainImg = [];
  additionalImg = [];

  detectFiles(event) {
    event.target.defaultValue === "one"
      ? (this.onlyOne = true)
      : (this.onlyOne = false);

    let files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.onlyOne
            ? (this.mainImg = [
                { id: i, name: files[i].name, url: reader.result }
              ])
            : this.additionalImg.push({
                id: i,
                name: files[i].name,
                url: reader.result
              });
          // this.urls.push({ id: i, name: files[i].name, url: e.target.result });
          // this.urls.push(i : {}e.target.result);
          // console.log("urls is ", this.urls);
          // console.log("e.target.result::", e.target);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
}
// detectFiles(event) {
//   let files = event.target.files;
//   if (files) {
//     for (let file of files) {
//       console.log(file);
//       let reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.urls.push(e.target.result);
//         // console.log("urls is ", this.urls);
//         // console.log("e.target.result::", file.name);
//       };
//       reader.readAsDataURL(file);
//     }
//   }
// }

// preview(files) {
//     if (files.length === 0) return;

//     let mimeType = files[0].type;
//     if (mimeType.match(/image\/*/) == null) {
//       this.message = "Only images are supported.";
//       return;
//     }

//     let reader = new FileReader();
//     this.imagePath = files;
//     reader.onload = _event => {
//       this.imgURL = reader.result;
//     };
//     reader.readAsDataURL(files[0]);
//   }
