function foodObject(name, price, description, image, mealType) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.image = image;
  this.mealType = mealType;
}

let butternut = new foodObject(
  "Butternut Soup",
  50,
  "a Creamy butternut soup topped with fresh spices and a mini bagel",
  "../images/catalogue/starters/butternut_soup.jfif",
  "Starter"
);

let calamari = new foodObject(
  "Calamari",
  65,
  "Crispy fried calamari, served with sweet chilli sauce and celery sticks.",
  "../images/catalogue/starters/calamari.jfif",
  "Starter"
);

let garlic = new foodObject(
  "Garlic Bread",
  45,
  "Toasty garlic bread topped with mozarella cheese and baked in the oven.",
  "../images/catalogue/starters/garlic_bread.jfif",
  "Starter"
);

let ribs = new foodObject(
  "Ribs & Chips",
  150,
  "Sticky smoked ribs served with a side of chips and freshly sliced vegetables.",
  "../images/catalogue/mains/ribs.jfif",
  "Main"
);

let sushi = new foodObject(
  "Sushi",
  95,
  "Sushi, made with the finest fish imported straight from japan.",
  "../images/catalogue/mains/sushi_plate.jfif",
  "Main"
);

let steak = new foodObject(
  "Steak & Chips",
  95,
  "a 500g Steak, pan seared to your liking, served with a side of chips.",
  "../images/catalogue/mains/steak.jfif",
  "Main"
);

let iceCream = new foodObject(
  "Ice Cream Cup",
  50,
  "Three different flavors of ice cream, topped with a mini sugar cone and chocolate sprinkles.",
  "../images/catalogue/deserts/ice_cream.jfif",
  "Desert"
);

let donut = new foodObject(
  "Mini Donut Bowl",
  45,
  "Six mini donuts , each topped with a different type of candy.",
  "../images/catalogue/deserts/mini_donut_bowl.jfif",
  "Desert"
);

let waffle = new foodObject(
  "Waffle & Ice Cream",
  50,
  "a Freshly made waffle, topped with a scoop of ice cream and chocolate sauce.",
  "../images/catalogue/deserts/waffle.jfif",
  "Desert"
);

let menu = [
  butternut,
  calamari,
  garlic,
  ribs,
  steak,
  sushi,
  iceCream,
  donut,
  waffle,
];

console.log();

let cart = [];

let total = 0;

function quickAdd(value) {
  cart.push(menu[value]);
  total += parseInt(menu[value].price);
  console.log(cart);
  localStorage.userCart = JSON.stringify(cart);
  localStorage.userTotal = JSON.stringify(total);
  console.log(localStorage.userCart);
  localStorage.userTotal = JSON.stringify(total);
  alert(localStorage.userTotal);
}

if (localStorage.userCart) {
  cart = JSON.parse(localStorage.userCart);
  total = JSON.parse(localStorage.userTotal);

  cart.forEach((element) => {
    let container = document.createElement("div");
    container.classList.add("cartItem");
    let image = document.createElement("img");
    image.src = element.image;
    image.classList.add("cartImage");
    container.append(image);
    let description = document.createElement("div");
    description.classList.add("itemDescription");
    let headingFlex = document.createElement("div");
    headingFlex.classList.add("headingFlex");
    let h2 = document.createElement("h2");
    h2.innerText = element.name;
    let button = document.createElement("button");
    button.classList.add("removeButton");
    button.innerHTML = "&#10005;";
    headingFlex.append(h2, button);
    let par = document.createElement("p");
    par.innerText = element.description;
    let price = document.createElement("h2");
    price.innerText = "R" + element.price;
    price.classList.add("cartHeading2");
    description.append(headingFlex, par, price);
    container.append(image, description);
    document.getElementById("cartContainer").append(container);
    let newLi = document.createElement("li");
    newLi.innerHTML = "R" + element.price + " " + element.name;
    document.getElementById("cartList").append(newLi);
  });
}

let vat = document.createElement("p");

let discountAvailable = true;

function clearCart() {
  cart.splice(0);
  localStorage.userCart = JSON.stringify(cart);
  total = 0;
  localStorage.userTotal = JSON.stringify(total);
  discountAvailable = true;
  location.reload();
}

function updateTotal() {
  total = JSON.parse(localStorage.userTotal);
  let discount = document.getElementById("discount");
  let delivery = document.querySelector('input[name="delivery"]:checked').value;
  if (discountAvailable && discount.value == "DiscountCode30") {
    total -= total * 0.3;
    discountAvailable = false;
  }
  total += parseInt(delivery);
  localStorage.userTotal = JSON.stringify(total);
  location.reload();
  // discountAvailable = false;
}

let vatTotal = total + total * 0.15;
// vatTotal.toFixed(1);

vat.innerText = "15% VAT: " + "R" + total * 0.15;
// vat.toFixed(2);
document.getElementById("totalVat").append(vat);
document.getElementById("cartTotal").append("Total: R" + vatTotal);

function confirmOrder() {
  alert(
    "Success! Order has been placed! Your reference number is: " +
      Math.floor(Math.random() * 1000000000)
  );
}
