// Contenidos para cada sección
const content = {
    "inicio": `
        <div class="container-body-imagen">
            <video autoplay loop muted playsinline class="responsive-img">
                <source src="perfil.webm" type="video/webm" />
            </video>
        </div>
        <div class="container-body-texto">
            <div class="container-body-texto-nombre">
                <h1>Erick Gutierrez Hernandez</h1>
            </div>
            <div class="container-body-texto-titulo"> 
                <h2>Ingeniero en Desarrollo de Software</h2>
            </div>
            <div class="container-body-texto-descripcion">            
                <h3>Soy un estudiante apasionado por el desarrollo de software, con experiencia en varios proyectos. <br> Me dedico a la creación de sistemas y estoy emocionado por seguir aprendiendo y explorando diferentes áreas del desarrollo.</h3>
            </div>
            <div class="container-body-texto-cv">
                <a href="cv.pdf" download="cv.pdf">Descargar CV</a>
            </div>
        </div>
    `,
    "sobre-mi": `
        <div class="container-body-imagen">
            <video autoplay loop muted playsinline class="responsive-img">
                <source src="perfil.webm" type="video/webm" />
            </video>
        </div>
        <div class="container-body-texto">
            <div class="container-body-texto-nombre">
                <h1>Erick Gutierrez Hernandez</h1>
            </div>
            <div class="container-body-texto-titulo"> 
                <h2>Ingeniero en Desarrollo de Software</h2>
            </div>
            <div class="container-body-texto-descripcion">            
                <h3>Soy un estudiante apasionado por el desarrollo de software, con experiencia en varios proyectos. <br> Me dedico a la creación de sistemas y estoy emocionado por seguir aprendiendo y explorando diferentes áreas del desarrollo.</h3>
            </div>
            <div class="container-body-texto-cv">
                <a href="cv.pdf" download="cv.pdf">Descargar CV</a>
            </div>
        </div>
    `,
    "proyectos": `
        <div class="container-body-imagen">
            <video autoplay loop muted playsinline class="responsive-img">
                <source src="perfil.webm" type="video/webm" />
            </video>
        </div>
        <div class="container-body-texto">
            <div class="container-body-texto-nombre">
                <h1>Erick Gutierrez Hernandez</h1>
            </div>
            <div class="container-body-texto-titulo"> 
                <h2>Ingeniero en Desarrollo de Software</h2>
            </div>
            <div class="container-body-texto-descripcion">            
                <h3>Soy un estudiante apasionado por el desarrollo de software, con experiencia en varios proyectos. <br> Me dedico a la creación de sistemas y estoy emocionado por seguir aprendiendo y explorando diferentes áreas del desarrollo.</h3>
            </div>
            <div class="container-body-texto-cv">
                <a href="cv.pdf" download="cv.pdf">Descargar CV</a>
            </div>
        </div>
    `,
    "contacto": `
        <div class="container-body-imagen">
            <video autoplay loop muted playsinline class="responsive-img">
                <source src="perfil.webm" type="video/webm" />
            </video>
        </div>
        <div class="container-body-texto">
            <div class="container-body-texto-nombre">
                <h1>Erick Gutierrez Hernandez</h1>
            </div>
            <div class="container-body-texto-titulo"> 
                <h2>Ingeniero en Desarrollo de Software</h2>
            </div>
            <div class="container-body-texto-descripcion">            
                <h3>Soy un estudiante apasionado por el desarrollo de software, con experiencia en varios proyectos. <br> Me dedico a la creación de sistemas y estoy emocionado por seguir aprendiendo y explorando diferentes áreas del desarrollo.</h3>
            </div>
            <div class="container-body-texto-cv">
                <a href="cv.pdf" download="cv.pdf">Descargar CV</a>
            </div>
        </div>
    `
};

// Función para cargar el contenido
function loadContent(section) {
    const containerBody = document.getElementById('container-body');
    containerBody.innerHTML = content[section];
    const selected = document.querySelector('.select-selected');
    selected.innerText = document.querySelector(`.select-option[data-value="#${section}"]`).innerText;
}

// Inicialmente carga "Inicio"
loadContent('inicio');

function toggleDropdown() {
    const selectItems = document.querySelector('.select-items');
    selectItems.classList.toggle('select-hide');
}

function selectOption(option) {
    const selected = document.querySelector('.select-selected');
    selected.innerText = option.innerText;
    loadContent(option.getAttribute('data-value').substring(1));
    document.querySelector('.select-items').classList.add('select-hide');
}

document.querySelector('.select-selected').addEventListener('click', function() {
    document.querySelector('.select-items').classList.toggle('select-hide');
});

document.querySelectorAll('.select-option').forEach(option => {
    option.addEventListener('click', function() {
        selectOption(this);
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.custom-select') && !event.target.matches('.select-selected')) {
        const selectItems = document.querySelector('.select-items');
        if (!selectItems.classList.contains('select-hide')) {
            selectItems.classList.add('select-hide');
        }
    }
});
