const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(button=>{

button.addEventListener("click",()=>{

const menu=button.nextElementSibling;

if(menu.style.display==="block"){

menu.style.display="none";

}else{

menu.style.display="block";

}

});

});
