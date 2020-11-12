// items


const card=document.querySelector(".card");
const container=document.querySelector(".container");
const shoe=document.querySelector(".shoe");
const title=document.querySelector(".title");
const sizes=document.querySelector(".sizes");
const buy=document.querySelector(".buy");
const description=document.querySelector(".description");
//movement of animation

container.addEventListener("mousemove",(e)=>
{

    console.log(window.innerHeight);
    var xAxis=(window.innerWidth/2-e.pageX)/25;
    var yAxis=(window.innerHeight/2-e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
// Animation for in
container.addEventListener("mouseenter",(e)=>
{
    card.style.transition="none";
    title.style.transform="translateZ(150px)";
    description.style.transform="translateZ(150px) ";
    shoe.style.transform="translateZ(120px) rotate(-15deg)";
    sizes.style.transform="translateZ(130px)";
    buy.style.transform="translateZ(60px)";
   
    
})
 
// Animation for out
container.addEventListener("mouseleave",(e)=>
{
    card.style.transition="all 0.5sec ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    title.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px) ";
    shoe.style.transform="translateZ(0px) ";
    sizes.style.transform="translateZ(0px)";
    buy.style.transform="translateZ(0px)";
   
    
})
 