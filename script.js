let C = document.getElementById("birthday")
let birthDate =new Date(C.value);
let currentDate = new Date();
let calculate = document.getElementById("Calculate")
let daycount = document.getElementById("daycount")


calculate.addEventListener("click", function(){
  let C = document.getElementById("birthday")
let birthDate =new Date(C.value);
let currentDate = new Date();
  let A = currentDate.getTime();
let B = birthDate.getTime();

let timeSpan = A-B;

let timeSpanInSec = timeSpan/1000;
let timeSpanInMin = timeSpanInSec/60;
let timeSpanInHours = timeSpanInMin/60;
let timeSpanInDay = timeSpanInHours/24;
let timeSpanInYear = timeSpanInDay/365;
  daycount.innerText = Math.ceil(timeSpanInDay);
})