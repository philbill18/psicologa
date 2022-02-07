// window.addEventListener('DOMContentLoaded', switchLanguage);

// function switchLanguage(){
//   if (navigator.language){
//     var lang = navigator.language
//     if(lang.startsWith("es")){
//       console.log("es");
    
//     } else {
//       console.log("en");
//       if(!document.referrer.includes("psicologa")){
//         location.href = "en.html" ;
//       }
//       //location.href = "en.html" ;
     
//     }
//   }


// }

function switchToEnglish(){

  location.href = "en.html"
}

function switchToSpanish(){

  location.href = "es.html"
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function scrollToTargetAdjusted(elem) {
  
  console.log(elem);
  var ver2 = elem.id.split("To").pop();
  //var id = elem.href.split("#").pop();
  var element = document.getElementById(ver2);
  var headerOffset = 45+100;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

function scrollToTargetAdjustedMobile(elem) {

  closeNav();
  
  console.log(elem);
  var ver2 = elem.id.split("Mobile").pop();
  if(ver2 == ""){
    ver2 = "wave"
  }
  //var id = elem.href.split("#").pop();
  var element = document.getElementById(ver2);
  var headerOffset = 45+100;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
