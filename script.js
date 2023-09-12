const burger = document.querySelector(".fa-outdent")
const navbar = document.querySelector("#navbar")
const cross = document.querySelector(".fa-xmark")

burger.addEventListener("click", () => {
    navbar.classList.add("open")
})

cross.addEventListener("click", () => {
    navbar.classList.remove("open")
})


// Product Individual Page

const mainImg = document.querySelector('#MainImg')
const smallImg = document.querySelectorAll('.small-img')

smallImg[0].onclick = function() {
    mainImg.src = smallImg[0].src
}

smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src
}

smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src
}

smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src
}

