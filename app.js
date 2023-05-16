const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active')
        console.log()
    });
}

navSlide();










function animatedForm(){
    const arrows = document.querySelectorAll('.bxs-chevron-down')

    arrows.forEach(arrow =>{
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            var parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;




            if(input.type === "text" && validateUser(input)){
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


function validateUser(user){
    if(user.value.length < 5){
        error('red');
    }else{
        error('green');
        return true;
    }
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








const modalOpen = document.getElementById('modalbtn')
const modalBg = document.getElementById('modalbg')
const modalcCose = document.getElementById('modalclose')

modalOpen.addEventListener('click',() => {
    modalBg.classList.add('show')
});
modalcCose.addEventListener('click',() => {
    modalBg.classList.remove('show')
});