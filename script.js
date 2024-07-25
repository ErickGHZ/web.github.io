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
        <div class="container-body-estudios">
            <div class="container-body-estudios-educacion">
                <div class="container-body-estudios-educacion-contenido">
                    <div class="container-body-estudios-educacion-contenido-titulo">
                        <h1>Educación</h1>

                    </div>
                    <div class="container-body-estudios-educacion-contenido-cuerpo" >
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor">
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="educacion.webp" alt="educacion">
                                <h2>Cbtis 179</h2>
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                <h3>Programacion - 2019 a 2022</h3>    

                                <p>Estudie en el Cbtis 179 la carrera de Programacion, donde aprendi sobre programación, bases de datos, diseño web, entre otros.</p>
                            </div>
                            
                        </div>
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor" >
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="educacion.webp" alt="educacion">
                                <h2> Universidad Tecnologica de Tulancingo</h2>
                            
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                <h3>TSU en Tecnologias de la Informacion area Desarollo de Software Multiplataforma - 2022 a 2024</h3>
                                <p>Estudie la carrera de TSU en Tecnologias de la Informacion area Desarollo de Software Multiplataforma en la Universidad Tecnologica de Tulancingo. He aprendido sobre el desarrollo de software, programación, bases de datos, diseño web, entre otros.</p>
                            </div>
                           
                        </div>
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor" >
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="educacion.webp" alt="educacion">
                                <h2> Universidad Tecnologica de Tulancingo</h2>
                            
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                <h3>Ingeniería en Desarrollo y Gestión de Software - 2024 a 2026</h3>
                                
                                <p>Actualmente cursando la carrera de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnologica de Tulancingo. He aprendido sobre el desarrollo de software, programación, bases de datos, diseño web, entre otros.</p>
                            </div>
                           
                        </div>
       
                    </div>

                </div>
            </div>

            <div class="container-body-estudios-certificaciones">
                <div class="container-body-estudios-certificaciones-contenido">
                    <div class="container-body-estudios-certificaciones-contenido-titulo">
                        <h1>Certificaciones</h1>

                    </div>
                    
                    <div class="container-body-estudios-certificaciones-contenido-cuerpo">
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor">
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="certificado.webp" alt="certificado">
                                <h2>Fundamentos de redes TSU TI SD2022</h2>
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                <h3>Cisco - 2022</h3>    
                                <p>Curso donde aprendí los conceptos básicos de redes, incluyendo topologías de red, protocolos de comunicación, direccionamiento IP, y configuración de dispositivos de red como routers y switches.</p>
                            </div>
                        </div>
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor">
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="certificado.webp" alt="certificado">
                                <h2>Interconexión de redes TI 22</h2>
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                 <h3>Cisco - 2023</h3>
                                
                                <p>Curso donde aprendí a interconectar redes locales (LAN) y redes de área extensa (WAN), además de configurar protocolos de enrutamiento, realizar la configuración avanzada de dispositivos de red y solucionar problemas de conectividad.</p>
                            </div>
                        </div>
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor">
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="certificado.webp" alt="certificado">
                                <h2>Interconexión de redes TI 22</h2>
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                <h3>Cisco - 2023</h3>
                            
                            <p>Curso donde aprendí a interconectar redes locales (LAN) y redes de área extensa (WAN), además de configurar protocolos de enrutamiento, realizar la configuración avanzada de dispositivos de red y solucionar problemas de conectividad.</p>
                            </div>
                        </div>
                        <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor">
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-titulo">
                                <img src="certificado.webp" alt="certificado">
                                     <h2>BDComputoNube</h2>
                            </div>
                            <div class="container-body-estudios-educacion-contenido-cuerpo-contenedor-cuerpo">
                                 <h3>Cisco - 2024</h3>
                            
                            <p>Curso donde aprendí a diseñar, implementar y gestionar bases de datos en entornos de computación en la nube, utilizando tecnologías y servicios de cloud computing para almacenar y analizar datos de manera eficiente y segura.</p>
                            </div>
                        </div>
                       


                       
                    </div>
                </div>
            </div>
        </div>
        <div class="container-body-tecnologias">
                <div class="container-body-tecnologias-contenido">
                     <div class="container-body-estudios-tecnologias-contenido-titulo">
                        <h1>Tecnologias</h1>

                    </div>
                    <div class="container-body-estudios-tecnologias-contenido-cuerpo">
                         
                    </div>
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



