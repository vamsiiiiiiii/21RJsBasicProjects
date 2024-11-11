let icon=document.querySelector("i");


icon.onclick=function (){
    if(icon.className === "fa-solid fa-sun"){
        icon.className="fa-solid fa-moon";
        document.body.style.backgroundColor="black"
         document.body.style.color="white"
    }else{
        icon.className="fa-solid fa-sun";
        document.body.style.backgroundColor="white"
         document.body.style.color="black"
    }
}