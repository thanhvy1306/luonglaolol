export let renderGlasses = (dataGlasses) => {
  let glassesListDiv = document.getElementById("vglassesList");
  glassesListDiv.innerHTML = "";
  dataGlasses.forEach((glasses) => {
    let glassesDiv = document.createElement("div");
    glassesDiv.classList.add("col-4");
    glassesDiv.innerHTML = `<img src="${glasses.src}" alt="${glasses.id}" class="vglasses__items" />`;
    glassesListDiv.append(glassesDiv);
    glassesDiv.children[0].addEventListener("click", dieuKhienThuKinh.thuKinh);
  });
};
export let dieuKhienThuKinh = {
  thuKinh: () => {
    console.log("yes");
  },
};
export let renderGlassesInFo = (glassIndex, dataGlasses) => {
  //dataGlasses{id, src, virtualImg,brand, name, color, price, description}

  let { brand, name, color, price, description } = dataGlasses[glassIndex];
  let glassInfoContent = `<div class="glassesInfo__content">
  <p class="font-weight-bold"><span class="text-uppercase">${name}</span>-${brand} (${color})</p>
  <p class="text-success"><span class="price bg-danger text-white">${price}</span>Stocking</p>
  <p>${description}</p>
  </div>`;
  document.getElementById("glassesInfo").innerHTML = glassInfoContent;
  document.getElementById("glassesInfo").style.display = "block";
};
