
let title = document.getElementById("a");
let price = document.getElementById("b");
let taxes = document.getElementById("c");
let ads = document.getElementById("d");
let discount = document.getElementById("e");
let TOTAL = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood = "create";
// get Total

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;

    TOTAL.innerHTML = result;
    TOTAL.style.background = "#040";
  } else {
    TOTAL.innerHTML = "";
    TOTAL.style.background = "#fff";
  }
}

// create product

let dataPro;

if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    TOTAL: TOTAL.innerHTML,
  };

  if (mood === "create") {
    if (newPro.count > 1) {
      for (let i = 0; i < newPro.count; i++) {
        dataPro.push(newPro);
      }
    }
  } else {
    dataPro[tmp] = newPro;
    mood = "craete";
    submit.innerHTML = "create";
    count.style.display = "block";
  }

  dataPro.push(newPro);

  // save localStorage

  localStorage.setItem("product", JSON.stringify(dataPro));

  clearData();
  showData();
};
