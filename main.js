
let qq = document.querySelectorAll(".q-1")

for(let i=0; i<qq.length; i++){

    qq[i].addEventListener("click", () => {
        qq[i].classList.toggle("active")
    })
   

} 