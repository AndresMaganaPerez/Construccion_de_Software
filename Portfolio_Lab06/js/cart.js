let tstring = window.localStorage.getItem("cart");
tshirts = tstring.split(',');
console.log(tshirts);

for (let i=0; i<3; i++){
  let ts = document.getElementById("tshirt"+i);
  let input = ts.querySelector(".js-input");
  console.log(tshirts[i].toString());
  console.log(input);
  input.value = tshirts[i].toString();
}

let removeCardButton = document.getElementsByClassName("js-trash");

for (let i = 0; i < removeCardButton.length; i++){
  let button2 = removeCardButton[i];
  button2.addEventListener("click", function (event){
    let row = event.currentTarget.closest(".js-tshirt")
    row.remove();
  })
}

let tshirt_all = document.querySelectorAll(".js-tshirt");

for (let i = 0; i < tshirt_all.length;i++){
  let actual_tshirt = tshirt_all[i];
  let price = actual_tshirt.querySelector(".js-price").innerHTML;
  let quantity = actual_tshirt.querySelector(".js-input").value;

  console.log(price);
  console.log(quantity);

  let total_pricet = price*quantity;

  console.log(total_pricet);
}
