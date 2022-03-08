let tshirts = [0,0,0];
console.log(tshirts);

let addCardButton = document.getElementsByClassName("addCart");

for (let i = 0; i < addCardButton.length; i++){
  let button1 = addCardButton[i];
  button1.addEventListener("click", function (event){
    tshirts[event.currentTarget.dataset.id]++;
    window.localStorage.setItem("cart", tshirts);
  })
}
