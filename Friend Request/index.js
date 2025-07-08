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

echo "# Insta-Follow-Concept" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sheikh-369/Insta-Follow-Concept.git
git push -u origin main