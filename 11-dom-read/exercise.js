export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  return Array.from(document.querySelectorAll(".card h3"))
    .map(card => card.textContent);
}

export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(card => {
    const heading = card.querySelector("h3");
    return heading.textContent === name;
  });

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out"))
    .map(card => card.querySelector("h3").textContent);
}