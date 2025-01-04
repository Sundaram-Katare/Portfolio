
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
lightMode();


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
        element.classList.remove("dark");  
        buttonEl.innerText = "Dark Mode";
    });

    const skillEl = document.querySelectorAll(".skill");

skillEl.forEach(function(element){
    element.classList.add("skillLight");
})

}

function darkMode(){
    console.log("hello");
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

function updateCount(counterElement) {
    const speed2 = 350;
    const target = +counterElement.getAttribute('data-target');
    const count = +counterElement.innerText;

    const inc = target / speed2;

    if (count < target) {
        counterElement.innerText = Math.round(count + inc);
        setTimeout(() => updateCount(counterElement), 1);
    } else {
        counterElement.innerText = target;
    }
}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = "0"; 
    updateCount(counter);
});

  