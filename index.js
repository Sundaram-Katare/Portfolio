
var i = 0;
var txt = "Sundaram Katare";
var speed = 75;


function typeWriter(){
    if(i < txt.length)
    {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

typeWriter();
const buttonEl = document.getElementById("btn");
buttonEl.addEventListener("click" , function(){
    if(buttonEl.innerText == "Light Mode")
        {
            lightMode();
        }
        else{
            darkMode();
        }
});

function lightMode() {
    console.log("hi");
    updateCount();
    i = 0;
    document.getElementById("name").innerHTML = "";
    typeWriter();
    const allElements = document.querySelectorAll("*");
    
   
    allElements.forEach(function(element) {
        element.classList.add("light");
    });

    let content = document.querySelectorAll(".dark");

    content.forEach(function(element) {
        element.classList.add("light");
        element.classList.remove("dark");  // Optionally remove the "dark" class
        buttonEl.innerText = "Dark Mode";
    });

    const skillEl = document.querySelectorAll(".skill");

skillEl.forEach(function(element){
    element.classList.add("skillLight");
})

}

function darkMode(){
    console.log("hello");
    updateCount();
    i = 0;
    document.getElementById("name").innerHTML = "";
    typeWriter();

    const allElements = document.querySelectorAll("*");

    allElements.forEach(function(element){
        element.classList.add("dark");
    });

    let content = document.querySelectorAll(".dark");

    content.forEach(function(element){
        element.classList.add("dark");
        const buttonEl = document.getElementById("btn");
        buttonEl.innerText = "Light Mode";
    })

    const skillEl = document.querySelectorAll(".skill");

    skillEl.forEach(function(element){
    element.classList.remove("skillLight");
})
}

function updateCount() {
const counter = document.getElementById("counter");
const speed2 = 350;

    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed2;

    if (count < target) {
        counter.innerText = Math.round(count + inc);
        setTimeout(updateCount, 1);
    } else {
        counter.innerText = target;
    }
};

updateCount();
