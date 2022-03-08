function pss_rest(){
  let inp = document.getElementById("pss_1").value;
  let exp_low = RegExp(/[a-z]/);

  /*console.log(inp);
  console.log(expression);
  console.log(inp.match(expression));*/

  if (inp.match(exp_low)){
    let lx = document.getElementById("lower-x");
    let lower = document.getElementById("letter");

    lx.classList.remove("bi-x");
    lx.classList.remove("text-danger");
    lx.classList.add("bi-check");

    lower.classList.remove("text-danger");
    lower.classList.add("text-success");
  }

  let exp_cap = RegExp(/[A-Z]/);

  if (inp.match(exp_cap)){
    let cx = document.getElementById("cap-x");
    let capital = document.getElementById("capital");

    cx.classList.remove("bi-x");
    cx.classList.remove("text-danger");
    cx.classList.add("bi-check");

    capital.classList.remove("text-danger");
    capital.classList.add("text-success");
  }

  let exp_num = RegExp(/[0-9]/);

  if (inp.match(exp_num)){
    let nx = document.getElementById("num-x");
    let num = document.getElementById("number");

    nx.classList.remove("bi-x");
    nx.classList.remove("text-danger");
    nx.classList.add("bi-check");

    num.classList.remove("text-danger");
    num.classList.add("text-success");
  }

  if (inp.length >= 8){
    let lex = document.getElementById("len-x");
    let leng = document.getElementById("length");

    lex.classList.remove("bi-x");
    lex.classList.remove("text-danger");
    lex.classList.add("bi-check");

    leng.classList.remove("text-danger");
    leng.classList.add("text-success");
  }
}


function pss2_rest() {

  let inp_1 = document.getElementById("pss_1").value;
  let inp_2 = document.getElementById("pss_2").value;
  let progress = document.getElementById("progress-bar");

  if (inp_2 === inp_1) {
    let alert = document.getElementById("alert");
    alert.classList.remove("d-none");
    alert.classList.remove('alert-danger');
    alert.classList.add('alert-success');
  }

  progress.style.width = inp_2.length / inp_1.length + "%";
  console.log(progress.style.width);

}

function save(){
  let inp_1 = document.getElementById("pss_1").value;
  let inp_2 = document.getElementById("pss_2").value;

  if (inp_2 !== inp_1){
    let alert = document.getElementById("alert");

    alert.classList.remove("d-none");
  } else {
    let alert = document.getElementById("alert");

    alert.classList.add("d-none");
  }
}

function show(){
  let inp_1 = document.getElementById("pss_1");
  let inp_2 = document.getElementById("pss_2");
  let see = document.getElementById("see");

  if (inp_1.type === "password" && inp_2.type === "password"){
    inp_1.setAttribute("type", "text");
    inp_2.setAttribute("type", "text");

    see.classList.remove("bi");
    see.classList.remove("bi-eye");
    see.classList.add("bi");
    see.classList.add("bi-eye-slash");

  } else {
    inp_1.setAttribute("type", "password");
    inp_2.setAttribute("type", "password");

    see.classList.remove("bi");
    see.classList.remove("bi-eye-slash");
    see.classList.add("bi");
    see.classList.add("bi-eye");
  }
}
