//Obtener el ACTIVE
document.addEventListener('DOMContentLoaded', function () { // Espera a que el DOM esté completamente cargado sino funciona mal
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual 
    /* 
    Si la URL es: http://127.0.0.1:5501/contact-page.html
    window.location.pathname devuelve: "/contact-page.html"
    .split('/') → ["", "contact-page.html"]
    .pop() → "contact-page.html"
    */
    console.log("Estoy en current Path: " + currentPath)
    const navLinks = document.querySelectorAll('.ul-navbar .li-navbar a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop(); // Obtiene el nombre del archivo del enlace
        if (linkPath == currentPath) { // Si el enlace es igual al archivo actual 
            link.classList.add('active');
        }
    });
});


function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; //si current es dark entonces el newtheme es light y sino viceversa
    document.documentElement.setAttribute('data-theme', newTheme); // cambiar el tema
    localStorage.setItem('theme', newTheme); // guardar el tema en el local storage
    updateDarkModeIcon(newTheme);
}

// Función para cambiar el icono del botón de dark mode
function updateDarkModeIcon(theme) {
    const darkModeToggle = document.getElementById('darkModeToggle'); 
    const icon = darkModeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon'); 
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Llama a la función para asegurarte de que el icono esté correcto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateDarkModeIcon(savedTheme);
});


let subtotalVal = 0; // Subtotal inicial del carrito
let inCarrito = []; // Array para almacenar productos en el carrito
const cartContainer = document.getElementById('cart-container'); // Contenedor del carrito


const carruselItems = [
    {
        imagen: "./assets/images/Reloj1.png",
        h3: "Hongo of your <br> time a planet",
        p: "Made from 316L stainless, this classic <br> is intended to stay as such and is designed."
    },
    {
        imagen: "./assets/images/Reloj2.png",
        h3: "Elegance in every <br> second",
        p: "Crafted with precision and care, <br> our watches are timeless."
    },
    {
        imagen: "./assets/images/Reloj3.png",
        h3: "Time is <br> precious",
        p: "Experience the luxury of <br> our exclusive collection."
    }
];
let currentCarruselIndex = 0;


function actualizarCarrusel() {
    const homeSection = document.getElementById('homeSection');
    const item = carruselItems[currentCarruselIndex];

    const homeHTML = `
        <article class="home-reloj">
            <img src="${item.imagen}" alt="Reloj${currentCarruselIndex + 1} class=" h-auto">
        </article>
        <article class="home-content">
            <h1 class="niveau color-dorado">LES ORIGINALES</h1>
            <h3 class="niveau color-white em4 text-left">${item.h3}</h3>
            <p class="niveau em1 color-gris">${item.p}</p>
            <button class="niveau color-dorado">OUR COLLECTION</button>
        </article>
    `;

    homeSection.innerHTML = homeHTML;

    // Actualizar el índice para el siguiente cambio
    currentCarruselIndex = (currentCarruselIndex + 1) % carruselItems.length;
}

function cambiarReloj(index) {
    currentCarruselIndex = index;
    actualizarCarrusel();
}

// Llama a la función para cargar la sección home al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrusel();
    setInterval(actualizarCarrusel, 5000); // Cambia cada 5 segundos
});
// Llama a la función para cargar la sección home al cargar la página

// Array de tamaños disponibles
const sizes = ["39MM", "40MM", "41MM", "42MM", "45MM"];
// Array de productos para la galeria!!!
const productos = [
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery2.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery2.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 2000, color: "black", stars: 4, size: "40MM" },
    { nombre: "Chrono Rose Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery3.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery3.jpg", precio: 4500, color: "rosegold", stars: 5, size: "41MM" },
    { nombre: "Gunmetal Black Tan", imagen: "./assets/images/GalleryImagenes/RelojGallery4.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery4.webp", precio: 1800, color: "golden", stars: 3, size: "42MM" },
    { nombre: "Leather Gray Belt", imagen: "./assets/images/GalleryImagenes/RelojGallery5.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery5.jpg", precio: 2000, color: "silver", stars: 2, size: "45MM" },
    { nombre: "Bristol Silver Link", imagen: "./assets/images/GalleryImagenes/RelojGallery6.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery6.webp", precio: 7000, color: "silver", stars: 4, size: "39MM" },
    { nombre: "Bourbon 360 Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery7.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery7.jpg", precio: 3750, color: "green", stars: 5, size: "40MM" },
    { nombre: "Bristol Rose Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery8.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery8.jpg", precio: 4200, color: "rosegold", stars: 4, size: "41MM" },
    { nombre: "Bristol Gold Link", imagen: "./assets/images/GalleryImagenes/RelojGallery9.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery9.jpg", precio: 2800, color: "green", stars: 3, size: "42MM" },
    { nombre: "Blue Sky", imagen: "./assets/images/GalleryImagenes/RelojGallery10.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery10.jpg", precio: 1000, color: "blue", stars: 2, size: "45MM" },
    { nombre: "Bourbon Silver", imagen: "./assets/images/GalleryImagenes/RelojGallery11.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery11.webp", precio: 6500, color: "brown", stars: 5, size: "39MM" },
    { nombre: "Chrono Rouse Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.webp", precio: 2300, color: "brown", stars: 3, size: "40MM" },
];


const productosHome = [
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.jpg", precio: 1500, color: "black", stars: 5, size: "39MM" },
]

// Selecciona el contenedor de la galería
function cargarGaleriaDeFotos() {
    const contenedorGallery = document.querySelector('.contenedor-gallery');
    if (contenedorGallery) {
        productosHome.forEach(producto => {
            const articulo = document.createElement('article');
            articulo.classList.add('articulo', 'gallery-item'); // Agregar clase específica para la galería
            articulo.innerHTML = `
                <img src="${producto.imagen}" class="w100 h-auto product-image" alt="${producto.nombre}">
                <h3 class="myriad rem1">${producto.nombre}</h3>
                <p class="flex-center myriad rem1 color-gris">$${producto.precio}</p>
                <p class="flex-center myriad rem1 color-gris">Size: ${producto.size}</p>
                <div class="add-text"><button onclick="carrito(${productosHome.indexOf(producto)})" class = "addcart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
            `;
            contenedorGallery.appendChild(articulo);

            const imgElement = articulo.querySelector('.product-image');

            // hover!!!
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });

            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });
        });
    }
} 
cargarGaleriaDeFotos();
console.log("El boton esta funcionando padre")




/*BANNER DE 4 IMAGENES */
document.addEventListener('DOMContentLoaded', () => {
    const fotosBannerContainer = document.getElementById('fotosBannerContainer');

    const fotosBannerHTML = `
        <section class="fotosBanner flex-center display-flex spc-btw fl-wrap">
            <div class="fotosBanner-item pos-relative">
                <img src="./assets/images/banner2.jpg" alt="" class="w100">
                <h1 class="niveau w100 color-white em08 pos-absolute">OUR COLLECTION</h1>
                <p class="niveau w100 color-gris-oscuro pos-absolute">High quality and <br> good design shape</p>
            </div>
            <div id="videoBanner" class="fotosBanner-item pos-relative">
                <img src="./assets/images/banner3.jpg" alt="" class="w100">
                <i class="fa-regular fa-circle-play play-icon color-white em4 pos-absolute"></i>
            </div>
            <div class="fotosBanner-item pos-relative">
                <img src="./assets/images/banner1.jpeg" alt="" class="w100">
            </div>
            <div class="fotosBanner-item pos-relative">
                <img src="./assets/images/banner4.jpg" alt="" class="w100">
                <h1 class="niveau w100 color-dorado em08 pos-absolute">ABOUT ROTARY</h1>
                <p class="niveau w100 color-white pos-absolute">Designing watches <br> full time work</p>
            </div>
        </section>
    `;

    fotosBannerContainer.innerHTML = fotosBannerHTML;
});


function changeColumns(columns) {
    const productGrid = document.getElementById("productGrid");
    productGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function bannerMovimiento() {
    const bannerSection = document.querySelector('.banner');
    // Verificar si existe el elemento con la clase .banner
    if (bannerSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Dejar de observar después de la primera vez
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(bannerSection);
    }
}

// Llamar a la función para iniciar el proceso
bannerMovimiento();

/*NAVBAR DESAPARECEE!!! */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > lastScrollY) {
        // Si el usuario hace scroll hacia abajo, oculta el navbar
        navbar.classList.add("hidden");
    } else {
        // Si el usuario hace scroll hacia arriba, muestra el navbar y cambia su color a negro
        navbar.classList.remove("hidden");
        navbar.classList.add("black");
    }

    // Actualiza la posición del último scroll
    lastScrollY = window.scrollY;

    // Si está en la parte superior de la página, vuelve al color original
    if (window.scrollY <= 0) {
        navbar.classList.remove("black");
    }
});

// Seleccionar el contenedor donde se agregarán los productos
const contenedorGalleryShop = document.getElementById('productGrid');
// mostramos los productos por default es decir: sin color ni tamaño seleccionado y precios en cada extremo
function mostrarProductos(colorSeleccionado = null, minPrice = 0, maxPrice = 7000, sizeSeleccionado = null, selectedStars = null) {
    contenedorGalleryShop.innerHTML = ""; // limpia el contenedor para agregar nuevos productos

    productos.forEach(producto => {
        const sizeMatch = sizeSeleccionado === null || 
                         (sizeSeleccionado === "all" ? true : producto.size === sizeSeleccionado);
        
        if (
            (colorSeleccionado === null || producto.color === colorSeleccionado) && // si no se seleccionó un color, muestra todos
            producto.precio >= minPrice && // si no se seleccionó un rango de precio, muestra todos
            producto.precio <= maxPrice && // si no se seleccionó un rango de precio, muestra todos
            sizeMatch && // si no se seleccionó un tamaño, muestra todos
            (selectedStars === null || producto.stars === selectedStars) // si no se seleccionó un filtro de estrellas, muestra todos
        ) {

            const articulo = document.createElement('div');
            articulo.classList.add('product-item');

            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image h-auto">                        
                <h4 class="myriad em08">${producto.nombre}</h4>
                <div class="product-price myriad em08 color-gris">
                    $${producto.precio}
                </div>
                <p class="flex-center myriad rem1 color-gris">Size: ${producto.size}</p>
                <p class="flex-center myriad rem1 color-gris">Rating: ${'★'.repeat(producto.stars)}</p>
            `;

            contenedorGalleryShop.appendChild(articulo);

            const imgElement = articulo.querySelector('.product-image');
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });
            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });
        }
    });
}

function resetGallery() { // resetea la galeria
    // limpiar los filtros
    const colorRadios = document.querySelectorAll('input[name="color"]');
    colorRadios.forEach(radio => radio.checked = false);

    // carga los productos por default
    mostrarProductos();
}

// Filtros!!!
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for size filter
    const sizeRadios = document.querySelectorAll('input[name="size"]');
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const sizeSeleccionado = this.value;
            const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
            const minPrice = parseInt(document.getElementById('min').value);
            const maxPrice = parseInt(document.getElementById('max').value);
            const selectedStars = document.querySelector('#starFilter span.selected')?.dataset.value || null;
            mostrarProductos(colorSeleccionado, minPrice, maxPrice, sizeSeleccionado, selectedStars);
        });
    });

    const starFilter = document.getElementById('starFilter');

    const minSlider = document.getElementById('min');
    const maxSlider = document.getElementById('max');
    const outputMin = document.getElementById('min-value');
    const outputMax = document.getElementById('max-value');
    const colorRadios = document.querySelectorAll('input[name="color"]');
    let selectedStars = null;  // para que inicie en cero!

    // actualizar los productos cuando se cambia un filtro
    function updateProducts() {
        const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null; // si no hay color seleccionado, devuelve null
        const sizeSeleccionado = document.querySelector('input[name="size"]:checked')?.value || null; // si no hay tamaño seleccionado, devuelve null
        const minPrice = parseInt(minSlider.value) || 0; // si no hay valor, devuelve 0
        const maxPrice = parseInt(maxSlider.value) || 7000; // si no hay valor, devuelve 7000

        mostrarProductos(colorSeleccionado, minPrice, maxPrice, sizeSeleccionado, selectedStars); // muestra los productos filtrados
    }

    // star filter
    starFilter.addEventListener('click', (event) => {
        const target = event.target; 
    
        if (target.tagName === 'SPAN' && target.dataset.value) {
            const clickedStars = parseInt(target.dataset.value); // devuelve el valor de los estrellas
    
            
            if (selectedStars === clickedStars) {
                selectedStars = null;  // resetea el filtro de estrellas
            } else {
                selectedStars = clickedStars; 
            } // si no hay estrellas seleccionadas, devuelve null
    
            
            document.querySelectorAll('#starFilter span').forEach((star) => {
                const starValue = parseInt(star.dataset.value);  // devuelve el valor de las estrellas
                if (starValue <= selectedStars) {
                    star.classList.add('selected'); // agrega la clase selected es decir marca las estrellas
                } else {
                    star.classList.remove('selected'); // quita la clase selected es decir quita las estrellas
                }
            });
    
            // actualizar los productos
            updateProducts();
        }
    });
    // event listener para los sliders
    minSlider.addEventListener('input', () => {
        if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
            minSlider.value = maxSlider.value; // si el valor del slider es mayor al maximo, el valor del slider es igual al maximo
        }
        outputMin.innerHTML = minSlider.value; // muestra el valor del slider
        updateProducts();
    });

    maxSlider.addEventListener('input', () => {
        if (parseInt(maxSlider.value) < parseInt(minSlider.value)) { 
            maxSlider.value = minSlider.value; // si el valor del slider es menor al minimo, el valor del slider es igual al minimo
        }
        outputMax.innerHTML = maxSlider.value; // muestra el valor del slider
        updateProducts(); 
    });

    // Event listener para los filtros de color
    colorRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateProducts();
        });
    });

    // carga los productos por default
    mostrarProductos();
});


function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    sidebar.classList.toggle('open');
    content.classList.toggle('shifted');
}
//para cambiar de seccion en watch product
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function () { 
        document.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active')); 
        document.querySelectorAll('.content-section-imagen-product').forEach(section => {
            section.style.display = 'none'; // esconde la seccion seleccionada
            section.classList.remove('active');
        });
        this.classList.add('active');
        const activeSection = document.getElementById(this.getAttribute('data-tab'));
        activeSection.style.display = 'block'; // muestra la seccion seleccionada
        activeSection.classList.add('active');
    });
});

//SHOPPING CART


document.getElementById('toggleCartButton').addEventListener('click', function () {
    const cart = document.getElementById('cart');
    cart.classList.toggle('open'); // es la clase para desplegarlo
});

function carrito(meter) { // meter es true o false
    const subtotalElement = document.getElementById("subtotal"); 
    const carro = document.getElementById("carro");
    const producto = productos[meter];

    cartContainer.classList.toggle('open');

    // si el producto ya esta en el carrito
    const existingItem = Array.from(carro.children).find(li => {
        const nombre = li.querySelector('p').textContent;
        return nombre === producto.nombre;
    });

    if (existingItem) {
        // x si agregan otro todavia no se como poner cant
        alert("Este producto ya está en el carrito.");
        return;
    }

    // meter el producto
    let li = document.createElement("li");
    let contenedor = document.createElement("figure");
    let imgLink = document.createElement("a");
    let imagen = document.createElement("img");
    let cap = document.createElement("figcaption");
    let nombre = document.createElement("p");
    let precio = document.createElement("p");
    let removerLink = document.createElement("button");

    // informacion
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    nombre.textContent = producto.nombre;
    precio.textContent = `$${producto.precio}`;
    removerLink.textContent = "Remover";

    // boton para sacar items
    removerLink.addEventListener("click", function () {
        carro.removeChild(li);
        subtotalVal -= producto.precio; // actualizar el total
        subtotalElement.textContent = subtotalVal.toFixed(2); // mostrar el total
    });

    
    carro.appendChild(li);
    li.appendChild(contenedor);
    contenedor.appendChild(imgLink);
    imgLink.appendChild(imagen);
    contenedor.appendChild(cap);
    cap.appendChild(nombre);
    cap.appendChild(precio);
    cap.appendChild(removerLink);

    
    subtotalVal += producto.precio; // actualizar el total
    subtotalElement.textContent = subtotalVal.toFixed(2); 
}



function actualizarFiltro() {
    const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null; // obtener el color seleccionado
    const minPrice = parseInt(document.getElementById('min').value); // obtener el precio mínimo
    const maxPrice = parseInt(document.getElementById('max').value); // obtener el precio máximo
    const sizeSeleccionado = document.querySelector('input[name="size"]:checked')?.value || null; // obtener el tamaño seleccionado

    mostrarProductos(colorSeleccionado, minPrice, maxPrice, sizeSeleccionado); // mostrar los productos filtrados
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});

let currentLoadedProducts = 4;
function cargarGaleria() {
    const gallery4Container = document.getElementById('gallery4Container');
    gallery4Container.innerHTML = '';

    productos.slice(0, currentLoadedProducts).forEach((producto, index) => {
        const sectionProducto = document.createElement('section');
        
        // Asigna la clase ciclando entre div1, div2, div3 y div4
        const claseIndex = (index % 4) + 1;
        sectionProducto.classList.add(`div${claseIndex}`);

        sectionProducto.style.backgroundImage = `url(${producto.imagen})`;

        sectionProducto.innerHTML = `
            <h3 class="myriad rem1">${producto.nombre}</h3>
            <p class="myriad rem1 color-gris">$${producto.precio}</p>
        `;

        gallery4Container.appendChild(sectionProducto);
    });
}


function loadMore() {
    if (currentLoadedProducts < productos.length) {
        currentLoadedProducts += 4;
        cargarGaleria();

        // Aumentar la altura del contenedor gallery-grid
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid) {
            const currentHeight = parseInt(window.getComputedStyle(galleryGrid).height);
            galleryGrid.style.height = `${currentHeight + 620}px`;
        }
    } else {
        alert("No hay más productos para cargar");
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', loadMore);

cargarGaleria();

function resetSizeFilter() {
    const sizeRadios = document.querySelectorAll('input[name="size"]');
    sizeRadios.forEach(radio => radio.checked = false);
    const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
    const minPrice = parseInt(document.getElementById('min').value);
    const maxPrice = parseInt(document.getElementById('max').value);
    const selectedStars = document.querySelector('#starFilter span.selected')?.dataset.value || null;
    mostrarProductos(colorSeleccionado, minPrice, maxPrice, null, selectedStars);
}


document.addEventListener('DOMContentLoaded', function () {

    const sizeRadios = document.querySelectorAll('input[name="size"]');
    if (sizeRadios.length > 0) { // checkear si hay radios clickeados
        sizeRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                const sizeSeleccionado = this.value; // obtener el valor del radio clickeado
                const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null; // obtener el color seleccionado
                const minPrice = parseInt(document.getElementById('min').value);
                const maxPrice = parseInt(document.getElementById('max').value);
                mostrarProductos(colorSeleccionado, minPrice, maxPrice, sizeSeleccionado);
            });
        });
    }

    const minSlider = document.getElementById('min');
    const maxSlider = document.getElementById('max');
    if (minSlider && maxSlider) { // checkear si los sliders existen
        minSlider.oninput = function () {
            if (parseInt(this.value) > parseInt(maxSlider.value)) {
                this.value = maxSlider.value; // si el valor del slider min es mayor que el max, poner el valor del max
            }
            outputMin.innerHTML = this.value;
        };

        maxSlider.oninput = function () {
            if (parseInt(this.value) < parseInt(minSlider.value)) {
                this.value = minSlider.value; // si el valor del slider max es menor que el min, poner el valor del min
            }
            outputMax.innerHTML = this.value;
        };
    }
});



