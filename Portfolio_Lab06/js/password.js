const pss_1 = document.querySelector("#pss_1");
const pss_2 = document.querySelector("pss_2");
const error = document.querySelector(".error");
const btn = document.querySelector(".button");

function active(){
  if(pss_1.value.length >= 6){
    btn.removeAttribute("disabled", "");
    btn.classList.add("active");
  }
}
