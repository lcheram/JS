// mes valeurs perso de log et password
const mylogin = "Syl";
const mypassword = "+3+3+3";

// btn connect, btn annul, btn envoyer, form, notif, log et password des inputs
const $connect = document.querySelector(".btn-connect");
const $form = document.querySelector("form");
const $notif = document.querySelector(".notification");
const $log = document.querySelector("#login"); // vérifier la sémantique pour appeler un élément dans une classe
const $password = document.querySelector("#password"); // vérifier la sémantique pour appeler un élément dans une classe
const $annuler = document.querySelector(".annul");
const $envoyer = document.querySelector(".envoi");
const $h1 = document.querySelector("h1");
//const $color = document.querySelector(".is-four-fifths");

//quand on click sur le btn "se connecter", le form apparaît (on lui retire sa classe hidden)
$connect.addEventListener("click", (e) => {
  e.preventDefault();
  $form.classList.remove("hidden");
});

//si login et password quand form submit

$connect.addEventListener("click", (e) => {
  e.preventDefault();
  if ($connect.innerText != "Se déconnecter") {
  } else {
    $connect.innerText = `Se connecter`;
    $notif.innerText = `Vous êtes déconnecté`;
    $notif.classList.remove("hidden");
    $form.classList.add("hidden");
    setTimeout(() => {
      $notif.classList.add("hidden");
    }, 2000);
  }
});

$envoyer.addEventListener("click", (e) => {
  e.preventDefault();
  // le login et password vérification structure
  if (mylogin === $log.value && mypassword === $password.value) {
    $form.classList.add("hidden");
    $notif.classList.remove("hidden");
    $notif.classList.remove("is-danger"); // au cas où il y a eu ajout classe danger si erreurs avant
    $notif.innerHTML = `Vous êtes connecté.e`;
    $connect.innerHTML = "Se déconnecter";
    $h1.innerHTML = `Hello ${$log.value}`; // rajoute le nom dans le h1
    setTimeout(() => {
      $notif.classList.add("hidden");
    }, 2000);
  } else {
    $notif.classList.remove("hidden");
    $notif.innerHTML = `Vous n'êtes pas connecté.e, erreur dans le champ login ou mot de passe`;
    $notif.classList.add("is-danger");
    setTimeout(() => {
      $notif.classList.add("hidden");
    }, 4000);
  }
});

$annuler.addEventListener("click", (e) => {
  e.preventDefault();
  // le login et password vérification structure
  $form.classList.add("hidden");
  //$notif.classList.remove("hidden");
  //$notif.innerHTML = `Vous n'êtes pas connecté.e`;
  //$notif.classList.add("is-danger");
});

/*$envoyer.addEventListener("click", (e) => {
 e.preventDefault();
 // le login et password vérification structure
 if (mylogin === $log.value && mypassword === $password.value) {
   $form.classList.add("hidden");
   $notif.classList.remove("hidden");
   $notif.classList.remove("is-danger"); // au cas où il y a eu ajout classe danger si erreurs avant
   $notif.innerHTML = `Vous êtes connecté.e`;
   $connect.innerHTML = "Se déconnecter";
   $h1.innerHTML = `Hello ${$log.value}`; // rajoute le nom dans le h1
   $connect.addEventListener("click", (e) => {
     $connect.innerHTML = "Se Connecter"; // ne fonctionne pas si je veux de nouveau me connecter, faudrait utiliser une var boleenne ou bien un switch, ou tester if mon lien != "se déconnecter" {} sachant que != veut dire n'est pas égal, ne contient pas
     $form.classList.add("hidden");
     $h1.innerHTML = `Hello `; // retire le nom dans le h1
   });
   setTimeout(() => {
     $notif.classList.add("hidden");
   }, 2000);
 } else {
   $notif.classList.remove("hidden");
   $notif.innerHTML = `Vous n'êtes pas connecté.e, erreur dans le champ login ou mot de passe`;
   $notif.classList.add("is-danger");
   setTimeout(() => {
     $notif.classList.add("hidden");
   }, 4000);
 }
});
*/
