const allImg = document.querySelectorAll('.images-slider img')
const mainImg = document.getElementById('main-img')


allImg.forEach(function(img) {
    img.addEventListener('click',(e)=>{
        allImg.forEach(function(img){
        img.classList.remove("active")
        
    })
    mainImg.src = e.target.src;
    img.classList.add("active")
})
})