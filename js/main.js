let mnNV = document.querySelector(".min-nav");

let othrLinks = document.querySelector(".othr-links");

mnNV.addEventListener("click", (e) => {
    e.stopPropagation();
    othrLinks.classList.toggle("show");
});
// Start
document.onclick = function (e) {
    if (e.target != mnNV && othrLinks.classList.contains("show")){
        othrLinks.classList.remove("show");
    }
}
// End
// Start Language Page Function!
let selectLang = document.querySelector("select");
function langToggle() {
    if (selectLang.value != "En") {
        window.location.href = "home-ar.html";
    } else{
        window.location.href = "index.html";
    }
    
}
// End Language Page Function 
// Start Skills Progress Function!
let skillsSection = document.getElementById("our-skills");
let spanProg = document.querySelectorAll(".prog span");
function skillsProgress() {
    spanProg.forEach(sp => {
        if (window.scrollY >= skillsSection.offsetTop) {
            sp.style.width = sp.dataset.progress;
        }
    });
}
// End Skills Progress Function
// Start Count Function
let statsSection = document.getElementById("stats");
let spanNum = document.querySelectorAll(".stats .number");
let stopInt = false;
function CountNum(el) {
    let count = el.dataset.count;
    let intCount = setInterval(() => {
        el.textContent++;
        if(el.textContent == count){
            clearInterval(intCount);
        }
    }, 1000 / count);
}
// End Count Function
window.onscroll = function() {
    // Start Skills Progress Function
    skillsProgress();
    // End Skills Progress Function
    // Start Count Function
    if(window.scrollY >= statsSection.offsetTop - 200) {
        if(!stopInt){
            spanNum.forEach(num => {
                CountNum(num);
            });
        }
        stopInt = true;
    }
    // End Count Function
}