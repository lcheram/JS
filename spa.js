const $sections = document.querySelector(".section");
const $link1 = document.querySelector(".section1");

const $nav = document.querySelector("nav");

$navnav.addEventListener("click", (e) => {
  e.preventDefault();
  // if e target = href if(e.target.href) {}
  $sections.classList.toggle("active");
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


  data- est récupéré par data-set 
});*/
