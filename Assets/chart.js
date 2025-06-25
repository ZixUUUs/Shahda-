//----------------Metafield-behaviour--------------------//
const price = document.querySelector(".price h3");
const metaBtn = document.querySelectorAll(".metfield-buttons button");
const allWeight = [];
const relativePrice = [];

function getPrice() {
  const numPrice = parseInt(price.textContent);
  return numPrice;
}

function getDataBtns() {
  metaBtn.forEach((e) => {
    const weightBtn = e.dataset.weight;
    allWeight.push(weightBtn);
  });
  return allWeight;
}
function calcPrice(fullP, newP) {
  return (newP * fullP) / 1000;
}
function getNewPrice() {
  const myPrice = getPrice();
  const DataWeight = getDataBtns();
  DataWeight.forEach((e) => {
    const prix = calcPrice(myPrice, e);
    relativePrice.push(prix);
  });

  return relativePrice;
}
function linkPriceWithBTNS() {
  const DataPrice = getNewPrice();
  metaBtn.forEach((e, i) => {
    if (DataPrice[i] !== undefined) {
      if (e.dataset.price == null) {
        e.setAttribute("data-price", DataPrice[i]);
      } else {
        e.setAttribute("data-price", DataPrice[i] + parseInt(e.dataset.price));
      }
      e.addEventListener("click", () => {
        price.textContent = e.dataset.price;
      });
    }
  });
}
linkPriceWithBTNS();
