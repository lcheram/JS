const $nav = document.querySelector("nav");
$nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.href) {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#" + e.target.dataset.id).classList.add("active");
  }
});

/*

const $section1 = document.querySelector("#section1");
const $section2 = document.querySelector("#section2");
const $section3 = document.querySelector("#section3");
const $section4 = document.querySelector("#section4");
const $section5 = document.querySelector("#section5");
const $navnav = document.querySelector(".navnav");

 
$nav.addEventListener("click", (e) => {
  e.preventDefault();

  if ($nav.classList.contains("navnav")) {
    //toggle ???
    $sections.classList.toggle("active");
  }



$navnav.addEventListener("click", (e) => {
  e.preventDefault();
  // if e target = href if(e.target.href) {}
  $sections.classList.toggle("active");
});


  data- est récupéré par data-set 
});*/
