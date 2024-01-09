let mover = document.querySelector("box");
let up = document.querySelector(".Up");
let down = document.querySelector(".Down");
let left = document.querySelector(".Left");
let right = document.querySelector(".Right");


document.addEventListener("keydown", (event)=>{
    // console.log(event);
    if(event.code==="ArrowDown")
    {
        // console.log("lol");
    let p= parseInt($(".box").css("top"));
    p+=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("top", v);
}
else if(event.code==="ArrowUp")
{
    let p= parseInt($(".box").css("top"));
    p-=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("top", v);
}
else if(event.code==="ArrowLeft")
{
    let p= parseInt($(".box").css("left"));
    p-=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("left", v);
}else if(event.code==="ArrowRight")
{
    let p= parseInt($(".box").css("left"));
    p+=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("left", v);
}
});