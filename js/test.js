//manu phone

const menu = document.getElementById("menu");
const nav = document.querySelector(".full-screen-nav");

menu.onclick = function () {
  nav.classList.toggle("none");
};















// number

let nums = document.querySelectorAll(".nums .num .number");
let section = document.getElementById("statistics");
let stared = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!stared) {
      nums.forEach((number) => startCount(number));
    }
    stared = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

















// Dark mod

let dark = document.querySelector(".dark");
let cont = document.querySelector(".cont");
let sun = document.querySelector(".sun");
let imgpy = document.querySelector(".pyramids-gif");
let help = document.querySelector(".help-center");
let helpHeader = document.querySelector(".help-header");
let helpSwiper = document.querySelector(".img-do-now img");
let statistics = document.getElementById("statistics");
let imgWorld = document.querySelector(".imgWorld");
let locationMark = document.getElementById("location-mark");
let clockTime = document.querySelector(".clock-time");
let bull = document.querySelector(".bull");
let labelSolid = document.querySelector(".label-solid")

function darkMood() {
  var setTheme = document.body;

  setTheme.classList.toggle("Dark");

  var theme;

  if (setTheme.classList.contains("Dark")) {
    cont.classList.remove("cont");
    cont.classList.add("cont-dark");
    sun.src = "./imag/536032-middle-removebg-preview.png";
    imgpy.src = "./imag/1958-pyramids-Dark.gif";
    document.body.style.backgroundColor = "#180344";
    help.src = "./imag/140-help-center-outline.gif";
    helpHeader.src = "./imag/140-help-center-outline.gif";
    helpSwiper.src = "./imag/140-help-center-outline.gif";
    statistics.src = "./imag/10-analytics-outline (1).gif";
    imgWorld.src = "./imag/World Map dark.svg";
    locationMark.src = "./imag/18-location-pin-flat.gif";
    clockTime.src = "./imag/45-clock-time-flat.gif";
    labelSolid.src="./imag/146-label-solid.gif";
    bull.style.boxShadow = "0px 0px 20px 10px white";
    theme = "DARK";
  } else {
    cont.classList.add("cont");
    cont.classList.remove("cont-dark");
    sun.src = "./imag/sun.png";
    imgpy.src = "./imag/1958-pyramids-lineal.gif";
    document.body.style.backgroundColor = "#fff";
    help.src = "./imag/140-help-center-outline (1).gif";
    helpHeader.src = "./imag/140-help-center-outline (1).gif";
    helpSwiper.src = "./imag/140-help-center-outline (1).gif";
    statistics.src = "./imag/10-analytics-outline.gif";
    imgWorld.src = "./imag/World Map.svg";
    locationMark.src = "./imag/18-location-pin-flat (1).gif";
    clockTime.src = "./imag/45-clock-time-flat (1).gif";
    labelSolid.src= "./imag/146-label-solid (1).gif";
    bull.style.boxShadow = "none";
    theme = "LIGHT";
  }

  localStorage.setItem("pageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (GetTheme === "DARK") {
  document.body.classList = "Dark";
  cont.classList.remove("cont");
  cont.classList.add("cont-dark");
  sun.src = "./imag/536032-middle-removebg-preview.png";
  imgpy.src = "./imag/1958-pyramids-Dark.gif";
  document.body.style.backgroundColor = "#180344";
  help.src = "./imag/140-help-center-outline.gif";
  helpHeader.src = "./imag/140-help-center-outline.gif";
  helpSwiper.src = "./imag/140-help-center-outline.gif";
  statistics.src = "./imag/10-analytics-outline (1).gif";
  imgWorld.src = "./imag/World Map dark.svg";
  locationMark.src = "./imag/18-location-pin-flat.gif";
  clockTime.src = "./imag/45-clock-time-flat.gif";
  labelSolid.src="./imag/146-label-solid.gif";
  bull.style.boxShadow = "0px 0px 20px 10px white";
  
}
















// clock


function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let flag = "AM";

  if (hours >= 12) {
    hours = hours - 12;
    flag = "PM";
  }
  if (hours == 0) {
    hours = 12;
  }

  if (
    (hours == 7 && flag == "AM") ||
    (hours == 8 && flag == "AM") ||
    (hours == 9 && flag == "AM") ||
    (hours == 10 && flag == "AM") ||
    (hours == 11 && flag == "AM") ||
    (hours == 12 && flag == "PM") ||
    (hours == 1 && flag == "PM") ||
    (hours == 2 && flag == "PM") ||
    (hours == 3 && flag == "PM") ||
    (hours == 4 && flag == "PM") ||
    (hours == 5 && flag == "PM")
  ) {
    document.querySelector(".op").innerText = "OPEN";
    document.querySelector(".op").style.color = "green";
  } else {
    document.querySelector(".op").innerText = "CLOSED";
    document.querySelector(".op").style.color = "red";
  }

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.querySelector(".hours h2").innerText = hours;
  document.querySelector(".minutes h2").innerText = minutes;
  document.querySelector(".seconds h2").innerText = seconds;
  document.querySelector(".flag h2").innerText = flag;
  setTimeout(function () {
    clock();
  }, 1000);
}
clock();




























//  scrollreveal

ScrollReveal().reveal(".cards", {
  origin: "bottom",
  distance: "150px",
  opacity: 0.4,
  duration: 2000,
  reset: true,
  mobile: true,
  desktop: true,
});

ScrollReveal().reveal(".nums", {
  origin: "bottom",
  distance: "150px",
  opacity: 0.4,
  duration: 2000,
  reset: true,
  mobile: true,
  desktop: true,
});

ScrollReveal().reveal(".card-box", {
  origin: "bottom",
  distance: "150px",
  opacity: 0.4,
  duration: 2000,
  reset: true,
  mobile: true,
  desktop: true,
});

ScrollReveal().reveal(".clock", {
  origin: "bottom",
  distance: "150px",
  opacity: 0.4,
  duration: 2000,
  reset: true,
  mobile: true,
  desktop: true,
});

// قيم تانيه

// delay:1000,
// useDelay:always, 'always,once,onload'
// easinng:'ease', 'ease-in , ease-out, ease-in-out'
/* rotate :{
    x : 0,
    Y : 0,
    z : 0,
}
*/
// scale: 1,

// والله في حاجات لسه بس انا مكسل اكتب الفيديو عندك



/* 
فديو الشرح

https://youtu.be/LZoPD2cNq-g?list=PLMJ9TxYWnU64vLm98d1Tw0jSR6Ih_xW60
*/













// onload لما يحمل الصافحه الاول

let rlod = document.querySelector(".reload");

window.onload = function () {
  rlod.style.display = "none";
};



















// right click is disabled

// document.oncontextmenu=function(e){
//     e.preventDefault()
//     window.alert("Sorry, right click is disabled")
// }





















/*

// ترجمه



// let ar = document.querySelector(".ar")

// let lang ={

//   en:{
  
//   whoAmI:'who am I',
//   home:'home',
//   names:'Names',
//   didYouKnow:'DID YOU KNOW',
//   statistics:'STATISTICS',
//   dates:'DATES',
//   pyramids:'pyramids',
//   civilization:'7000 years old civilization',
//   whereIsIt:'where is it',
//   ShowMeMore:'Show me more',
//   menkaure:'Menkaure',
//   khafre:'Khafre',
//   khufu:'Khufu',
//   knowCont1:"The stones of the pyramids were originally covered with a cover made of polished white limestone,as these stones reflected the sunlight, which made the pyramids shine like a jewel.",
//   knowCont2:"The Pyramid of Djoser, located in the city of Saqqara, is considered the oldest pyramid everfound, and its origins date back to the 27th century BC.",
//   knowCont3:"Estimates of what human capacity the pyramids required to build them vary widely, but it wasroughly 100,000 people.",
//   knowCont4:"The pyramids were not built overnight. Rather, the construction of the Great Pyramid alone tooknearly 200 years, and the construction of the passages and the lower parts of it ten years,according to the Greek historian 'Herodotus' who visited Egypt in the fourth century BC aftermore than 2000 years of building the pyramid, and he had heard these and other accounts Somepriests and narrators, which indicates that the construction of several pyramids had begun atthe same time.",
//   knowCont5:"All the Egyptian pyramids were built on the west bank of the Nile, which was known at that timeas the location of the setting sun, and this was related to one of the ancient Egyptian myths,which is the legend of the 'kingdom of the dead'.",
//   knowCont6:"The ancient noble Egyptians were buried in the pyramids with all their valuables, such as finejewelry, as it was believed at the time that the dead would use them in the afterlife.",
//   knowCont7:"The pyramids of Giza, like many other monuments and rarities in the world, were subjected to anattempt to demolish them by Al-Aziz and the second Ayyubid Sultan in Egypt. However, theirattempts failed due to the difficulty and complexity of the task. However, they succeeded indamaging the 'Menkaure' pyramid and demolishing a small part of its northern side.",
//   knowCont8:"The pyramids of Giza are aligned with great accuracy with the group of stars “Orion”, as thebuilders took it as their guide in building it. These stars were closely associated with the godOsiris, the god of rebirth and the afterlife, according to the ancient Egyptians.",
//   knowCont9:"The Great Pyramid of Giza contains, according to estimates, more than two million stone blocks,each of which weighs between 2 and 30 tons, in addition to some blocks that weigh more than 50tons.",
//   meters:"meters",
//   number:'number',
//   prices:'prices',
//   student:'student',
//   tourists:'tourists',
//   touristsCONT1:'Pyramids tickets 240 pounds',
//   touristsCONT2:'Great Pyramid ticket 440 pounds',
//   touristsCONT3:'Pyramid of Khafre tickets 300 pounds',
//   touristsCONT4:'Pyramid of MENKAURE  100 pounds',
//   touristsCONT5:'Sphinx ticket 100 pounds',
//   touristsCONT6:'yramids 120 pounds',
//   touristsCONT7:'For the Great Pyramid 220 pounds',
//   touristsCONT8:'Pyramid of Khafre ticket 150 pounds',
//   touristsCONT9:'Pyramid of MENKAURE  50 pounds',
//   touristsCONT10:'Sphinx ticket 100 pounds',
//   egyptians:'Egyptians',
//   egyptiansCont1:'Pyramids tickets 30 pounds',
//   egyptiansCont2:'Pyramid of Khufu ticket 30 pounds',
//   egyptiansCont3:'Pyramid of Khafre ticket 15 pounds',
//   egyptiansCont4:'Pyramid of MENKAURE  10 pounds',
//   egyptiansCont5:'Sphinx tickets for 100 pounds',
//   egyptiansCont6:'Pyramids tickets 60 pounds',
//   egyptiansCont7:'Pyramid of Khufu ticket 60 pounds',
//   egyptiansCont8:'Pyramid of Khafre ticket 30 pounds',
//   egyptiansCont9:'Pyramid of MENKAURE  20 pounds',
//   egyptiansCont10:'Sphinx tickets for 100 pounds',
//   dates:'Dates',
//   team:'From 7 am to 5 pm',
//   hours:'hours',
//   minutes:'minutes',
//   seconds:'seconds',
//   copyRight:'All Copy Right For :',
  
//   },
  
  
//   ////////////////////////////
  
  
//   ar:{
//     whoAmI:'من انا',
//     home:'الرئيسية',
//     names:'الأسماء',
//     didYouKnow:'هل تعلم',
//     statistics:'إحصائيات',
//     time:'time',
//     pyramids:'الأهرامات',
//     civilization:'حضارة  7000 سنة',
//     whereIsIt:'أين هي',
//     ShowMeMore:'أرني المزيد',
//     menkaure:'منقرع',
//     khafre:'خفرع',
//     khufu:'خوفو',
//     knowCont1:"كانت أحجار الأهرامات في الأصل مغطاة بغطاء مصنوع من الحجر الجيري الأبيض المصقول ، حيث تعكس هذه الأحجار ضوء الشمس ، مما جعل الأهرامات تتألق مثل الجوهرة.",
//     knowCont2:"يعتبر هرم زوسر الواقع في مدينة سقارة أقدم هرم على الإطلاق ، وتعود أصوله إلى القرن السابع والعشرين قبل الميلاد.",
//     knowCont3:"تختلف تقديرات القدرات البشرية اللازمة لبناء الأهرامات على نطاق واسع ، لكنها كانت حوالي 100000 شخص.",
//     knowCont4:"لم يتم بناء الأهرامات بين عشية وضحاها. بل إن بناء الهرم الأكبر وحده استغرق ما يقرب من 200 عام ، واستغرق بناء الممرات والأجزاء السفلية منه عشر سنوات ، بحسب المؤرخ اليوناني 'هيرودوت' الذي زار مصر في القرن الرابع قبل الميلاد بعد أكثر من 2000 عام من البناء. الهرم ، وقد سمع هذه الروايات وغيرها من الكهنة والرواة ، مما يشير إلى أن بناء العديد من الأهرامات قد بدأ في نفس الوقت.",
//     knowCont5:"تم بناء جميع الأهرامات المصرية على الضفة الغربية لنهر النيل ، والتي كانت تُعرف في ذلك الوقت بمكان غروب الشمس ، وكان هذا مرتبطًا بإحدى الأساطير المصرية القديمة ، وهي أسطورة `` مملكة الموتى ",
//     knowCont6:"وقد دفن قدماء المصريين النبلاء في الأهرامات بكل مقتنياتهم الثمينة مثل المجوهرات الفاخرة ، حيث كان يُعتقد في ذلك الوقت أن الموتى سيستخدمونها في الحياة الآخرة.",
//     knowCont7:"تعرضت أهرامات الجيزة ، مثل العديد من الآثار والنوادر النادرة في العالم ، لمحاولة هدمها من قبل العزيز والسلطان الأيوبي الثاني في مصر. ومع ذلك ، فشلت محاولاتهم بسبب صعوبة وتعقيد المهمة. ومع ذلك ، فقد نجحوا في تدمير هرم 'منقرع' وهدم جزء صغير من جانبه الشمالي.",
//     knowCont8:"تتماشى أهرامات الجيزة بدقة كبيرة مع مجموعة النجوم 'أوريون' ، حيث أخذها البناؤون كدليل لهم في بنائها. كانت هذه النجوم مرتبطة ارتباطًا وثيقًا بالإله أوزيريس ، إله الولادة والحياة الآخرة ، وفقًا لقدماء المصريين.",
//     knowCont9:"يحتوي الهرم الأكبر بالجيزة ، حسب التقديرات ، على أكثر من مليوني كتلة حجرية ، يزن كل منها ما بين 2 و 30 طناً ، بالإضافة إلى بعض الكتل التي يزيد وزنها عن 50 طناً.",
//     meters:"متر",
//     number:'رقم',
//     prices:'الأسعار',
//     student:'طالب',
//     tourists:'سياح',
//     touristsCONT1:'تذاكر الأهرامات 240 جنيه',
//     touristsCONT2:'تذكرة الهرم الأكبر 440 جنيها',
//     touristsCONT3:'هرم خفرع تذاكر 300 جنيه',
//     touristsCONT4:'هرم منكاور 100 جنيه',
//     touristsCONT5:'تذكرة ابو الهول 100 جنيه',
//     touristsCONT6:'تذاكر الأهرامات 140 جنيه',
//     touristsCONT7:'عن الهرم الأكبر 220 جنيها',
//     touristsCONT8:'هرم خفرع تذكرة 150 جنية',
//     touristsCONT9:'هرم منكاور 50 جنيها',
//     touristsCONT10:'تذكرة ابو الهول 100 جنيه',
//     egyptians:'المصريين',
//     egyptiansCont1:'تذاكر الأهرامات 30 جنيه',
//     egyptiansCont2:'تذكرة هرم خوفو 30 جنيه',
//     egyptiansCont3:'هرم خفرع تذكرة 15 جنيه',
//     egyptiansCont4:'هرم منكاور 10 جنيه',
//     egyptiansCont5:'تذكرة ابو الهول 100 جنيه',
//     egyptiansCont6:'تذاكر الأهرامات 60 جنيه',
//     egyptiansCont7:'تذكرة هرم خوفو 60 جنيه',
//     egyptiansCont8:'هرم خفرع تذكرة 30 جنيه',
//     egyptiansCont9:'هرم منكاور 20 جنيه',
//     egyptiansCont10:'تذكرة ابو الهول 100 جنيهs',
//     team:'من 7 صباحا الى 5 مساءا',
//     hours:'ساعات',
//     minutes:'دقائق',
//     seconds:'ثواني',
//     copyRight:'جميع حقوق النشر لـ:',
//   },
  
//   }
  

//   let languageSelector = document.querySelector('.Earth');

// languageSelector.onclick = function(event){

//   languageSelector.classList.toggle("ar")
// console.log(event)
// }
  

*/







