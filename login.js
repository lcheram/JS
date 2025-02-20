const mylogin = "Syl";
const mypassword = "+3+3+3";

const $login = document.querySelector(".login");
const $password = document.querySelector(".password");

const $secure = document.querySelector(".secure");
const $notif = document.querySelector(".notification");
const $form = document.querySelector(".form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (mylogin === $login.value && mypassword === $password.value) {
    $form.classList.add("hidden");
    $secure.classList.remove("hidden");
  } else {
    $notif.classList.remove("hidden");
    setTimeout(() => {
      $notif.classList.add("hidden");
    }, 2000); //au bout d'un délais de 2000ms, la classe hidden est de nouveau ajoutée
  }
});

// je dois créer des constantes pour mes valeurs personnelles de login et de password, que j'appelle mylogin et mypassword
// je dois créer des constantes en cherchant les input $password et $login en les appelant par leur classe pour pouyvoir les comparer plus tard
//je dois créer une constante form pour pouvoir écouter le submit dessus plus tard
//je dois créer des constantes pour chaque éléments ou je vais retirer ou ajouter la classe hidden

//je mets un event listener sur mon submit de form
// ensuite je fais un if et else qui compare mes avleurs de mypassword et de mylogin aux valeurs des champs des inputs $password et $login (du coup je dois écrire $password.value)

//    $notif.classList.add("hidden").delay(3000);
