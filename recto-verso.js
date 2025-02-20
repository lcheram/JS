const $box = document.querySelector(".box"); // cible ma box
const $btn = document.querySelector(".test"); // cible mon bouton

//ajoute un event listener sur mon bouton quand on clique dessus
$btn.addEventListener("click", (e) => {
  e.preventDefault();
  // si la box a une classe active : on la retire
  if ($box.classList.contains("active")) {
    $box.classList.remove("active");
    // si la box n'a pas de classe active : on la rajoute
  } else {
    $box.classList.add("active");
  }
});

//j'ai tout écrit moi-même !!!!
