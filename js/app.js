//Preparation slides

var slideIndex = 1 

showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex=n)
}

function showSlides(n){
    var i
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot")
    if (n>slides.length){
        slideIndex =   1
    }
    if(n<1){
        slideIndex = slides.length 
    }

    for( i=0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for( i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += "active"
}

// Auto Slides

var slideIndex = 0
showSlides()
function showSlides(){
    var i
    var slides = document.getElementsByClassName("mySlides")
    for(i=0;i<slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex=1
    }
    slides[slideIndex-1].style.display = "block"
    setTimeout(showSlides,2000)//3 secunds
}

//Formulario 
function Enviar(){
    var nome = document.getElementById("nomeid");
    if(nome.value != ""){
        alert('Obrigado por se cadastrar no nosso site sr(a) ' + nome.value + ' os seus dados foram salvos com sucesso')
    }
}

