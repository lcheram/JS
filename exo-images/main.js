$mini = document.querySelector(".mini");
$mega = document.querySelector(".mega");

$mini.addEventListener("click", (e) => {
  e.preventDefault();
  const cible = e.target; // je set une const qui s'appelle cible pour la réutiliser dans mon if
  console.log(e.target); //le e target cible que le declencheur d'event c'est e (c'est le début de l'action)
  if (cible.classList.contains("vignette")) {
    //test que ça clique bien sur l'image contenue dans l'ul (mini) avec classList.contains
    $mega.src = cible.src; // on change la source de mega par la cible, la cible étant le click event
  }
});
