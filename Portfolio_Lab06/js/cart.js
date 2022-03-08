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
