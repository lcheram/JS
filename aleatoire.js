const nombre = Math.ceil(Math.random() * 100);
// foutu nombre aléatoire nul là

//console.log(nombre);

const $ordi = document.querySelector(".debug");
const $btn = document.querySelector(".is-link");
const $form = document.querySelector(".form");
const $notif = document.querySelector(".notification");

//o,n affiche le nombre aléatoire
$ordi.innerHTML = `${nombre}`;

const $userNb = document.querySelector(".userNb");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = parseInt($userNb.value);
  //on converti la valeur du champ en type number
  $notif.classList.remove("hidden");
  // hihihihihihihihihihihihihihi
  // on remove hidden
  if (inputVal === nombre) {
    $notif.classList.remove("is-danger");
    $notif.classList.add("is-success");
    $notif.innerHTML = `Bravo, c'est incroyable !`;
  } else if (inputVal < nombre) {
    $notif.classList.add("is-danger");
    $notif.innerHTML = `Ton nombre est trop petit :'( réessaye)`;
  } else {
    $notif.classList.add("is-danger");
    $notif.innerHTML = `Ton nombre est trop grand :'( réessaye)`;
  }
});
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//

alert("AAAAAAAAAAAAAAAAA");
// vous êtes horribles <3
