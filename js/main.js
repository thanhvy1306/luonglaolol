import { dataGlasses } from "../data/data.js";
import {
  renderGlasses,
  renderGlassesInFo,
  dieuKhienThuKinh,
} from "./glasses.controller.js";

dieuKhienThuKinh.thuKinh = (e) => {
  //   console.log("yess");
  let id = e.target.alt;
  let index = dataGlasses.findIndex((glass) => {
    return glass.id == id;
  });
  // render thông tin của kính

  renderGlassesInFo(index, dataGlasses);
  //gắn hình kính
  document.getElementById(
    "avatar"
  ).innerHTML = `<img src="${dataGlasses[index].virtualImg}" id="glasses" />`;
  document.getElementById("glasses").style.display = "inline";
};
// render dữ liệu ra ngoài
renderGlasses(dataGlasses);

let removeGlasses = (deoKinh) => {
  if (deoKinh) {
    document.getElementById("glasses").style.opacity = 0.9;
  } else {
    document.getElementById("glasses").style.opacity = 0;
  }
};
window.removeGlasses = removeGlasses;
