window.addEventListener('scroll', reveal);

function reveal(){
    var elements = document.querySelectorAll('.reveal');
    for(let i = 0; i < elements.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = elements[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            elements[i].classList.add('active');
        } else {
            elements[i].classList.remove('active');
        }
    }
}
