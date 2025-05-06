let subtotalVal = 0; // Subtotal inicial
let inCarrito = []; // Array para almacenar productos en el carrito
const cartContainer = document.getElementById('cart-container');

// Array de productos para la galeria!!!
const productos = [
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery2.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery2.jpg", precio: 1500, color: "black" },
    { nombre: "Chrono Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.webp", precio: 2000, color: "black" },
    { nombre: "Chrono Rose Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery3.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery3.jpg", precio: 4500, color: "rosegold" },
    { nombre: "Gunmetal Black Tan", imagen: "./assets/images/GalleryImagenes/RelojGallery4.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery4.jpg", precio: 1800, color: "golden" },
    { nombre: "Leather Gray Belt", imagen: "./assets/images/GalleryImagenes/RelojGallery5.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery5.jpg", precio: 1800, color: "silver" },
    { nombre: "Bristol Silver Link", imagen: "./assets/images/GalleryImagenes/RelojGallery6.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery6.jpg", precio: 7000, color: "silver" },
    { nombre: "Bourbon 360 Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery7.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery7.jpg", precio: 3750, color: "green" },
    { nombre: "Bristol Rose Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery8.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery8.jpg", precio: 4200, color: "rosegold" },
    { nombre: "Bristol Gold Link", imagen: "./assets/images/GalleryImagenes/RelojGallery9.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery9.jpg", precio: 2800, color: "green" },
    { nombre: "Blue Sky", imagen: "./assets/images/GalleryImagenes/RelojGallery10.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery10.jpg", precio: 1000, color: "blue" },
    { nombre: "Bourbon Silver", imagen: "./assets/images/GalleryImagenes/RelojGallery11.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery11.webp", precio: 6500, color: "brown" },
    { nombre: "Chrono Rouse Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.webp", precio: 2300, color: "brown" },
];

// Selecciona el contenedor de la galería
function cargarGaleriaDeFotos() {
    const contenedorGallery = document.querySelector('.contenedor-gallery');
    if (contenedorGallery) {
        productos.forEach(producto => {
            const articulo = document.createElement('article');
            articulo.classList.add('articulo', 'gallery-item'); // Agregar clase específica para la galería
            articulo.innerHTML = `
                <img src="${producto.imagen}" class="w100 product-image" alt="${producto.nombre}">
                <h3 class="myriad rem1">${producto.nombre}</h3>
                <p class="flex-center myriad rem1 color-gris">$${producto.precio}</p>
                <div class="add-text"><button onclick="carrito(${productos.indexOf(producto)})" class = "addcart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
            `;
            contenedorGallery.appendChild(articulo);

            const imgElement = articulo.querySelector('.product-image');

            // Eventos para cambiar la imagen al pasar el mouse
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

function gallery4() {
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        productos.slice(0, 4).forEach((producto, index) => {
            // Create a new section for each product
            const sectionProducto = document.createElement('section');
            sectionProducto.classList.add('gallery-4-cards', 'pos-relative');
            sectionProducto.id = `div${index + 1}`; // Assign unique IDs (div1, div2, etc.)

            // Add product content
            sectionProducto.innerHTML = `
                <img src="${producto.imagen}" class="w100 product-image" alt="${producto.nombre}">
                <h3 class="myriad rem1">${producto.nombre}</h3>
                <p class="flex-center myriad rem1 color-gris">$${producto.precio}</p>
                <div class="add-text">
                    <button onclick="carrito(${index})" class="addcart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            `;

            // Append the section to the gallery container
            galleryContainer.appendChild(sectionProducto);

            // Add hover effect for the image
            const imgElement = sectionProducto.querySelector('.product-image');
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });
            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });
        });

        // Apply special styling for specific sections (e.g., div3 and div4)
        const div3 = document.getElementById('div3');
        if (div3) {
            div3.style.gridColumn = 'span 2';
            div3.style.gridRow = 'span 2';
        }

        const div4 = document.getElementById('div4');
        if (div4) {
            div4.style.gridColumn = 'span 2';
            div4.style.transform = 'rotate(180deg)';
        }
    }
}

// Call the function to initialize the gallery
gallery4();

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

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const ulNavbar = document.querySelector('.ul-navbar');

    menuToggle.addEventListener('click', function () {
        ulNavbar.classList.toggle('responsive');
    });

    //slider
    var minSlider = document.getElementById('min');
    var maxSlider = document.getElementById('max');

    var outputMin = document.getElementById('min-value');
    var outputMax = document.getElementById('max-value');

    console.log('Min Slider:', minSlider);
    console.log('Max Slider:', maxSlider);
    console.log('Output Min:', outputMin);
    console.log('Output Max:', outputMax);

    outputMin.innerHTML = minSlider.value;
    outputMax.innerHTML = maxSlider.value;

    minSlider.oninput = function () {
        // Ensure minSlider value does not exceed maxSlider value
        if (parseInt(this.value) > parseInt(maxSlider.value)) {
            this.value = maxSlider.value;
        }
        outputMin.innerHTML = this.value;
    }

    maxSlider.oninput = function () {
        // Ensure maxSlider value does not go below minSlider value
        if (parseInt(this.value) < parseInt(minSlider.value)) {
            this.value = minSlider.value;
        }
        outputMax.innerHTML = this.value;
    }
});

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
// Add this function to handle filtering by price range
function mostrarProductos(colorSeleccionado = null, minPrice = 0, maxPrice = 10000) {
    contenedorGalleryShop.innerHTML = ""; // Clear the container before displaying filtered products

    productos.forEach(producto => {
        // Filter by color and price range
        if (
            (colorSeleccionado === null || producto.color === colorSeleccionado) &&
            producto.precio >= minPrice &&
            producto.precio <= maxPrice
        ) {
            const articulo = document.createElement('div');
            articulo.classList.add('product-item');

            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">                        
                <h4 class="myriad em08">${producto.nombre}</h4>
                <div class="product-price myriad em08 color-gris">
                    $${producto.precio}
                </div>
            `;

            const imgElement = articulo.querySelector('.product-image');

            // Add hover effect for the image
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });

            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });

            contenedorGalleryShop.appendChild(articulo);
        }
    });
}

function resetGallery() {
    // Clear any selected color filters
    const colorRadios = document.querySelectorAll('input[name="color"]');
    colorRadios.forEach(radio => radio.checked = false);
    
    // Load all products
    mostrarProductos();
}

// Add event listeners to the sliders to filter products by price range
document.addEventListener('DOMContentLoaded', function () {
    const minSlider = document.getElementById('min');
    const maxSlider = document.getElementById('max');
    const outputMin = document.getElementById('min-value');
    const outputMax = document.getElementById('max-value');

    // Display initial slider values
    minSlider.oninput = function () {
        if (parseInt(this.value) > parseInt(maxSlider.value)) {
            this.value = maxSlider.value;
        }
        outputMin.innerHTML = this.value;
        const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
        mostrarProductos(colorSeleccionado, parseInt(this.value), parseInt(maxSlider.value));
    };
    
    maxSlider.oninput = function () {
        if (parseInt(this.value) < parseInt(minSlider.value)) {
            this.value = minSlider.value;
        }
        outputMax.innerHTML = this.value;
        const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
        mostrarProductos(colorSeleccionado, parseInt(minSlider.value), parseInt(this.value));
    };
    
    // Event listener para los botones de color
    function actualizarFiltro() {
        const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
        const minPrice = parseInt(minSlider.value);
        const maxPrice = parseInt(maxSlider.value);
    
        mostrarProductos(colorSeleccionado, minPrice, maxPrice);
    }
    
    // Añadir event listeners a los radio buttons de colores
    document.querySelectorAll('input[name="color"]').forEach(radio => {
        radio.addEventListener('change', actualizarFiltro);
    });

    // Initial filtering
    actualizarFiltro();
});

// Añadir event listeners a los radio buttons
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', actualizarFiltro);
});

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    sidebar.classList.toggle('open');
    content.classList.toggle('shifted');
}

document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');

        if (this.getAttribute('data-tab') === 'additional-info') {
            document.querySelector('.image-content').style.display = 'none';
        } else {
            document.querySelector('.image-content').style.display = 'flex';
        }
    });
});

//SHOPPING CART

document.getElementById('toggleCartButton').addEventListener('click', function () {
    const cart = document.getElementById('cart');
    cart.classList.toggle('open'); // Toggle the "open" class to show/hide the cart
});

function carrito(meter) {
    const subtotalElement = document.getElementById("subtotal");
    const carro = document.getElementById("carro");
    const producto = productos[meter];

    cartContainer.classList.toggle('open');

    // Check if the product is already in the cart
    const existingItem = Array.from(carro.children).find(li => {
        const nombre = li.querySelector('p').textContent;
        return nombre === producto.nombre;
    });

    if (existingItem) {
        // If the product is already in the cart, update its quantity or prevent duplicates
        alert("Este producto ya está en el carrito.");
        return;
    }

    // Create a new list item for the cart
    let li = document.createElement("li");
    let contenedor = document.createElement("figure");
    let imgLink = document.createElement("a");
    let imagen = document.createElement("img");
    let cap = document.createElement("figcaption");
    let nombre = document.createElement("p");
    let precio = document.createElement("p");
    let removerLink = document.createElement("button");

    // Set up the product details
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    nombre.textContent = producto.nombre;
    precio.textContent = `$${producto.precio}`;
    removerLink.textContent = "Remover";

    // Add event listener to remove the item
    removerLink.addEventListener("click", function () {
        carro.removeChild(li);
        subtotalVal -= producto.precio; // Update the global subtotal
        subtotalElement.textContent = subtotalVal.toFixed(2); // Update the displayed subtotal
    });

    // Append elements to the DOM
    carro.appendChild(li);
    li.appendChild(contenedor);
    contenedor.appendChild(imgLink);
    imgLink.appendChild(imagen);
    contenedor.appendChild(cap);
    cap.appendChild(nombre);
    cap.appendChild(precio);
    cap.appendChild(removerLink);

    // Update subtotal
    subtotalVal += producto.precio;
    subtotalElement.textContent = subtotalVal.toFixed(2); // Update the displayed subtotal
}

/*dark mode*/

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; //si current es dark entonces el newtheme es light y sino viceversa
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

const starFilter = document.getElementById('starFilter');
const items = document.querySelectorAll('#itemsContainer .item');

starFilter.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        const selectedValue = e.target.getAttribute('data-value');

        // Highlight selected star
        document.querySelectorAll('#starFilter span').forEach(star => {
            star.classList.remove('active');
        });
        e.target.classList.add('active');

        // Filter items based on star rating
        items.forEach(item => {
            const itemStars = item.getAttribute('data-stars');
            if (selectedValue === "all" || itemStars === selectedValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
