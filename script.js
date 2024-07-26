


// Contenidos para cada sección
const content = {
    "inicio": `
        
    `,
    "sobre-mi": `

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


// Redirigir a la sección "inicio" al cargar la página si no hay hash en la URL
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Pre-cargar imágenes
function preloadImages(srcArray) {
    srcArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

const imagesToPreload = [
    'educacion.webp',
    'certificado.webp',
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
    '9.webp',
    '10.webp',
    '11.webp',
    '12.webp',
    // Agrega más imágenes aquí
];

preloadImages(imagesToPreload);


