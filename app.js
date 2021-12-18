const moonPath="M17.5 28.0898C17.5 43.2776 32 54.5 32 55.5898C16.8122 55.5898 4.5 43.2776 4.5 28.0898C4.5 12.902 16.8122 0.589813 32 0.589813C32 0.589813 17 9 17.5 28.0898Z";

const sunPath="M59 27.5C59 42.6878 46.6878 55 31.5 55C16.3122 55 4 42.6878 4 27.5C4 12.3122 16.3122 0 31.5 0C46.6878 0 59 12.3122 59 27.5Z";


const darkMode=document.querySelector("#darkMode");

let toggle =false;

//Onclicking the sun lets do some change

darkMode.addEventListener("click", () => {
//we use anime.js now

const timeline =anime.timeline({
  duration:750,//we need to last each animation to 750ms
  easing:"easeOutExpo"//i dont have any idea about this piece of ....
});

timeline.add({//adding features to timeline
   targets:".sun",//now we target the class ".sun"
   d:[{value:toggle? sunPath : moonPath}]
})
.add( {
  targets:"#darkMode",
  rotate:320

},'-=350')
//this the duration we want this particulkar feature to add duration of 350ms);///likethis we can add many features chaining of animation ..
.add({
  targets:"section",
  backgroundColor:toggle? "rgb(255,255,255)" : "rgb(22,22,22)",//be careful about to not put comma at last of features and also in js backgroundcolor not work its backgroundColor and all this features are just written as a string}'
  color:toggle ? "rgb(22,22,22)" :  "rgb(255,255,255)"
},'-=700');
// .add({
//   targets:"h1",
//   textContent:toggle? "The Vampire Rise" : "The Lycans Rise"
// },'-=700');


  //we now use toggle to reverse every thing everytime we click on the sun
  if(!toggle){
    toggle=true;
  }else{
    toggle=false;
  }

});
