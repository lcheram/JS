//alert('test')

// = mes data 
const personnel = ['Pierre', 'Paul', 'Marcel']
personnel.push('Véronique') // ajoute une nouvelle entrée dans l'array 

//sélectionner mon ul 
const $listing = document.querySelector('.listing')


//définir une fonction
const showList = () => {
    $listing.innerHTML = ''
    //créer dans mon ul : un li pour afficher le nom de la première personne
//$listing.innerHTML = `<li>${personnel[0]}</li>` //je cherche la personne zéro, mais ul encore masqué 
personnel.sort()
personnel.reverse()
//boucler notre array avec forEach, récuperer chaque element et rajouter un li dans le ul pour chacun
//pour chaque élément de mon tableau je le récupère et déclenche une fct
personnel.forEach(item => {
    $listing.innerHTML += `<li>${item}</li>`
    // += ajouter dedans, si je ne mets pas le +, ça écrase le truc précédent 
})
    
    $listing.classList.remove('hidden') //permet de retirer la classe hidden avec animation (voir CSS)
}

showList() //exécuter la fonction showList 

//Mettre première lettre en majuscule
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


// je récupère le form et la valeur tapée dans champ pseudo 
const $form = document.querySelector('#new-person')
const $pseudo = document.querySelector('#pseudo')
//sélectionne le form puis add event listener quand submit : ajout input value dans array
$form.addEventListener('submit', event => {
    event.preventDefault()
    personnel.push(capitalizeFirstLetter($pseudo.value))
    showList() // je rappelle la fonction showlist
    console.log(personnel)
    $form.reset() //vide l'input après avoir ajouté la nouvelle valeur dans une li 
})




console.log($listing.classList) //classList existe de base et affiche la liste des classes sur un element, ici, avec la classi Listing : y a deux méthodes : add et remove 

