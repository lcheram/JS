//alert('test')

// = mes data mais on va créer un objet par personne
const personnel = [
    {
        prenom: 'Pierre',
        nom: 'Charlier',
        centre: 'Cepegra',
        fonction: 'formateur',
        inscrit: false,
        ddn: '1969-04-25 07:35:22' // date formatée universelle suivi de l'heure en heures, minutes et secondes 
    },
    {
        prenom: 'Lara',
        nom: 'Cheramy',
        centre: 'Cepegra',
        fonction: 'Etudiant.e',
        inscrit: false,
        ddn: '1994-08-19 01:35:19', // date formatée universelle suivi de l'heure en heures, minutes et secondes 
        evaluated: 1000,
    }
]







//sélectionner mon ul 
const $listing = document.querySelector('.listing')


//définir une fonction
const showList = () => {
    $listing.innerHTML = ''
    //créer dans mon ul : un li pour afficher le nom de la première personne
    //$listing.innerHTML = `<li>${personnel[0]}</li>` //je cherche la personne zéro, mais ul encore masqué 
    //personnel.sort()
    //personnel.reverse()
    //boucler notre array avec forEach, récuperer chaque element et rajouter un li dans le ul pour chacun
    //pour chaque élément de mon tableau je le récupère et déclenche une fct
    // item = un objet, donc faut dire quelle propriété afficher dans l'objet 
    personnel.forEach( (item,key) => {
    $listing.innerHTML += `<li class="person" data-key="${key}">${item.prenom} ${item.nom}</li>`
    // += ajouter dedans, si je ne mets pas le +, ça écrase le truc précédent 
    // key c'est le mot qu'on choisit nous même hein, ça rajoute la position numérique dans l'array (visible dans html dans la console)
    //rajout classe sur le li pour ecouteur d'event sur ul + li 
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
const $prenom = document.querySelector('#fname')
const $nom = document.querySelector('#sname')
const $centre = document.querySelector('#centre')
const $fonction = document.querySelector('#fonction')
const $evaluation = document.querySelector('#eval')
const $inscription = document.querySelector('#inscription')
const $ddn = document.querySelector('#date')


const $fiche = document.querySelector('.fiche')



//sélectionne le form puis add event listener quand submit : ajout input value dans array
$form.addEventListener('submit', event => {
    event.preventDefault()
    const newPerson =  { // constante qui crée un objet sur le même principe que les autres existants 
        prenom: $prenom.value,
        nom: $nom.value,
        centre: $centre.value,
        fonction: $fonction.value,
        inscrit: $inscription.checked, // on vérifie q'il a l'attribue checked, ce sera true s'il l'a et false s'il ne l'a pas 
        ddn: $ddn.value,
        evaluated: $evaluation.value,
    }
    personnel.push(newPerson)
    showList() // je rappelle la fonction showlist
    console.log(personnel)
    $form.reset() //vide l'input après avoir ajouté la nouvelle valeur dans une li 
})


// sur listing j'ajouter un ecouteur d'event de type click, et du coup ça fait un truc : fonction
$listing.addEventListener('click', e => {
    e.preventDefault()
    //console.log(e.target)//quel element j'ai déclenche ? en principe le li, aller voir dans console 
   // si l'élément sui a servi a déclencher le click, si la liste des classes contient "person"
    if(e.target.classList.contains('person')) {
        const key = e.target.dataset.key // constante à appeler la ligne juste après, ça raccourci 
        //alert(key) // dataset = data-  et puis faut mettre notre element qu'on a appelé key 
        //alert(personnel[key].nom) // afficvhe le nom de la personne dans l'alerte via la clé 
        const template = `
            <dl>
                <dt>Nom :</dt>
                <dd>${personnel[key].prenom}</dd>

                <dt>Prénom :</dt>
                <dd>${personnel[key].nom}</dd>

                <dt>Centre :</dt>
                <dd>${personnel[key].centre}</dd>

                <dt>Fonction :</dt>
                <dd>${personnel[key].fonction}</dd>

                <dt>Inscrit.e :</dt>
                <dd>${personnel[key].inscrit}</dd>

                <dt>Date de naissance :</dt>
                <dd>${personnel[key].ddn}</dd>

                <dt>Evaluation :</dt>
                <dd>${personnel[key].evaluated}</dd>
            </dl>
        `
        console.log(template)
        $fiche.innerHTML = template
    }
})