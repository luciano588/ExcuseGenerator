/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pro = ["a", "the"];
  let sub = ["racoon", "dog"];
  let act = ["stole my", "ate my"];
  let pos = ["car", "tongue"];

  let randompro = pro[Math.floor(Math.random() * pro.length)];
  let randomsub = sub[Math.floor(Math.random() * sub.length)];
  let randomact = act[Math.floor(Math.random() * act.length)];
  let randompos = pos[Math.floor(Math.random() * pos.length)];
  document.querySelector("#theExcuse").innerHTML =
    randompro + " " + randomsub + " " + randomact + " " + randompos;
};
