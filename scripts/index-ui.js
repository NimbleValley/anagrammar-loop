var tl = new TimelineMax();

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const screens = document.getElementsByClassName("screen");
for(let i = 0; i < screens.length; i ++)
    screens[i].style.display = "none";
screens[0].style.display = "flex";


const titleContainer = document.getElementById("title-container");

const titleText = "Anagrammar";
var spans = [];

const creditText = document.getElementById("credit-text");

setUpTitle();

async function setUpTitle() {
    titleContainer.innerHTML = "";
    for (var i = 0; i < titleText.length; i++) {
        var temp = document.createElement("span");
        temp.className = "title-span";
        temp.innerText = titleText[i];
        temp.style.opacity = 0;
        spans.push(temp);
        titleContainer.appendChild(temp);
    }
    animateIntroScreen();
}

async function animateIntroScreen() {
    titleContainer.style.top = "25vh";
    titleContainer.style.opacity = 1;
    creditText.style.opacity = 0;
    await sleep(250);
    
    spans.forEach(element => {
        tl.fromTo(element, 0.5, {opacity: 0, fontSize: "6.5vw"}, {opacity: 1, fontSize: "10vw"}, '-=0.4');
    });
    
    creditText.style.display = "block";
    tl.fromTo(creditText, 1.5, {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1}, '-=1');
    
    tl.to(titleContainer, 1.5, {top: "5vh"}, '+=0.75');

    tl.to(titleContainer, 1.5, {opacity: "0"}, '+=0.75');
        
    tl.fromTo(creditText, 0.5, {opacity: 1, scale: 1}, {opacity: 0, scale: 1.25}, '-=0.25');
    await sleep(7500);

    spans.forEach(element => {
        element.style.opacity = 0;
    });


    animateIntroScreen();
}

export async function enterHomeScreen() {
    tl.fromTo(screens[0], 1.5, {filter: "brightness(1)"}, {filter: "brightness(0)"});
    await sleep(1000);
    screens[0].style.display = "none";
    screens[1].style.display = "flex";
}