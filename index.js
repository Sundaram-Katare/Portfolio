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
    element.classList.add("skill");
})
}

