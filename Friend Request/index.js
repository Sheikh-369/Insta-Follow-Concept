const follow=document.querySelector("#follow")
const button=document.querySelector("#button")

let istatus="follow"
button.addEventListener("click",()=>{
    if(istatus==="follow"){
        follow.innerHTML="Following";
        button.innerHTML="Unfollow"
        istatus="unfollow"
    }else{
        follow.innerHTML="unfollow";
        button.innerHTML="Follow";
        istatus="follow"
    }
    

})