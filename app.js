let img=document.querySelector("img")
let like=document.querySelector(".like i ")
let icon=document.querySelector("i")

let likeicon=()=>{
    icon.style.transform=" translate(-50%,-50%) scale(1)"
    icon.style.opacity=0.8
    setTimeout(() => {
        icon.style.opacity=0
    }, 1000);

    setTimeout(function() {
         icon.style.transform=" translate(-50%,-50%) scale(0)"
    }, 1000);
}


img.addEventListener("dblclick",function(){
    likeicon()
})


var flag=1

like.addEventListener("click",function(){

 if(flag==1){
    like.style.color="red"
    likeicon()
    flag=0;

}
else{
     like.style.color="white"
     flag=1
}
})
