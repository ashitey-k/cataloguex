const modalOpen = document.getElementById('modalbtn')
const modalBg = document.getElementById('modalbg')
const modalcCose = document.getElementById('modalclose')

modalOpen.addEventListener('click',() => {
    modalBg.classList.add('show')
});
modalcCose.addEventListener('click',() => {
    modalBg.classList.remove('show')
});




function animatedForm(){
    const arrows = document.querySelectorAll('.bxs-chevron-down')

    arrows.forEach(arrow =>{
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            var parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;




            if(input.type === "text"){
                nextSlide(parent,nextForm)
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm)
            }else if (input.type === 'password' && validateUser(input)){
                nextSlide(parent,nextForm)
            }else{
                parent.style.animation = "shake 0.5s ease"
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('green')
        return true;
    }else{
        error('red')
    }
}







function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}


animatedForm()


var burger = document.getElementById('hamburger')
var nav = document.getElementById('nav')
const close = document.getElementById('close')

burger.addEventListener('click',()=>{
    nav.classList.toggle('active')
});
close.addEventListener('click',()=>{
    nav.classList.remove('active')
})
