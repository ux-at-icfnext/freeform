const darkIcon = document.getElementById("dark");
const lightIcon = document.getElementById("light");
const page = document.querySelector("body");

darkIcon.addEventListener("click",()=>{
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
    page.classList.add("dark-mode");
    localStorage.setItem("darkMode", "active");
})

lightIcon.addEventListener("click",()=>{
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
    page.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "inactive");  
})

//if dark mode is active, apply setting across the application
if(localStorage.getItem("darkMode")== "active"){ 
    page.classList.toggle("dark-mode");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
}