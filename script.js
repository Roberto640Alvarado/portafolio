
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');
let typed = new Typed('.typed',{
    strings: [
        '<i class="engineer">Frontend</i>', 
        '<i class="engineer">Backend</i>'
    ],
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
} );


menuToggle.onclick = function () {
    header.classList.toggle('active');
};


window.addEventListener('load', () => {

    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    };
});


function media(valor){
    document.querySelector('.title-social').style.transition = "2s";
    if(valor == 'Facebook'){
        document.querySelector('.title-social').innerHTML = "Facebook";
        document.querySelector('.title-social').style.color = "#3b5998";
    }
    else if(valor == 'Instagram'){
        document.querySelector('.title-social').innerHTML = "Instagram";
        document.querySelector('.title-social').style.color = "#d6249f";
    }
    else if(valor == 'Github'){
        document.querySelector('.title-social').innerHTML = "Github";
        document.querySelector('.title-social').style.color = "#000000";
    }
    else if(valor == 'Linkedin'){
        document.querySelector('.title-social').innerHTML = "Linkedin";
        document.querySelector('.title-social').style.color = "#2596be";
    }
    else if(valor == 'Phone'){
        document.querySelector('.title-social').innerHTML = "Tel: 70248234";
        document.querySelector('.title-social').style.color = "#000000";
    }
    else if(valor == 'Gmail'){
        document.querySelector('.title-social').innerHTML = "ralvaradobeltran5@gmail.com";
        document.querySelector('.title-social').style.color = "#080000";
    }
}

function soltar(){
    document.querySelector('.title-social').style.transition = "7s";
    document.querySelector('.title-social').innerHTML = "Puedes contactarme en los siguientes medios...";
    document.querySelector('.title-social').style.color = "#ffffff";
}


