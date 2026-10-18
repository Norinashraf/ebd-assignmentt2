export function addProduct(name, price) {
  const card = document.createElement("li");
  card.className = "card";

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceElement = document.createElement("p");
  priceElement.className = "price";
  priceElement.textContent = `${price} EGP`;

  card.append(heading, priceElement);

  document.querySelector("#list").append(card);
}

export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(card => {
    return card.querySelector("h3").textContent === name;
  });

  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(card => {
    return card.querySelector("h3").textContent === name;
  });

  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  const cards = Array.from(document.querySelectorAll(".card"));

  cards.forEach(card => {
    card.remove();
  });
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}