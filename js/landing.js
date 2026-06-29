// ===================================
// LANDING PAGE JS - Lucci Bene Bogotá
// Catálogo con prioridad por categoría + Conversiones Google Ads + Día de las Madres
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 10, name: "Ramo Sol Radiante", price: 93750, image: "../assets/foto10.webp", description: "Ramo de girasoles envuelto en papel nacarado con detalle de mariposa dorada. Una explosión de luz y energía positiva que alegra cualquier día.", categories: ["bouquets","girasoles","precio-bajo"] },
    { id: 30, name: "Cúpula Ámbar Eterna", price: 93750, image: "../assets/foto30.webp", description: "Rosa preservada naranja bajo cúpula de cristal con flores secas y base de madera. Detalle cálido y duradero de encanto otoñal.", categories: ["secas","precio-bajo"] },
    { id: 34, name: "Manos Rosé Preservado", price: 93750, image: "../assets/foto34.webp", description: "Jarrón cerámico en forma de manos con detalle dorado y flores secas rosadas. Detalle tierno, artístico y eterno para sorprender con estilo.", categories: ["jarrones","secas","precio-bajo"] },
    { id: 13, name: "Rosas Lucci · 24 · 48 · 72", price: 100000, image: "../assets/foto13.webp", description: "Clásico ramo de rosas frescas envuelto en papel premium con lazo dorado. Elige entre 24, 48 o 72 rosas para una declaración de amor a tu medida.", categories: ["rosas","bouquets","premium","precio-bajo"], priceOptions: [{"label":"24 Rosas","price":100000},{"label":"48 Rosas","price":200000},{"label":"72 Rosas","price":300000}] },
    { id: 25, name: "Busto Jardín Eterno", price: 106250, image: "../assets/foto25.webp", description: "Jarrón busto blanco rebosante de flores preservadas en rosa, lila y verde. Detalle escultórico y romántico que perdura en el tiempo.", categories: ["jarrones","secas","precio-bajo"] },
    { id: 26, name: "David Otoñal", price: 118750, image: "../assets/foto26.webp", description: "Icónico jarrón busto David coronado con flores secas en tonos otoñales y craspedia amarilla. Pieza artística que une arte clásico y naturaleza.", categories: ["jarrones","secas","precio-bajo"] },
    { id: 29, name: "Cúpula Girasol Eterno", price: 118750, image: "../assets/foto29.webp", description: "Girasol preservado y craspedia bajo cúpula de cristal con lazo amarillo. Un rayo de sol que se conserva intacto para siempre.", categories: ["secas","girasoles","precio-bajo"] },
    { id: 38, name: "Orquídea Acuarela Fucsia", price: 118750, image: "../assets/foto38.webp", description: "Mini orquídea Phalaenopsis fucsia en maceta de acuarela firmada Lucci Bene. Planta vibrante y encantadora que alegra cualquier rincón.", categories: ["orquideas","precio-bajo"] },
    { id: 5, name: "Caja Brisa Pastel", price: 150000, image: "../assets/foto5.webp", description: "Caja blanca con rosas rosadas, orquídeas y follaje fresco en tonos suaves. Detalle compacto y elegante para expresar cariño con delicadeza.", categories: ["cajas","rosas","orquideas","precio-bajo"] },
    { id: 22, name: "Busto Bohemio Rosé", price: 150000, image: "../assets/foto22.webp", description: "Jarrón escultórico de busto con flores preservadas y pampa en tonos rosa y lila. Pieza artística y duradera para una decoración con personalidad.", categories: ["jarrones","secas","precio-bajo"] },
    { id: 27, name: "Rostro Noir Natural", price: 150000, image: "../assets/foto27.webp", description: "Jarrón negro escultórico con flores secas blancas, pampa y eucalipto preservado. Elegancia minimalista y duradera de inspiración nórdica.", categories: ["jarrones","secas","precio-bajo"] },
    { id: 33, name: "Jarrón Noir Dorado", price: 150000, image: "../assets/foto33.webp", description: "Jarrón negro con flores secas amarillas, pampa y acento morado. Contraste sofisticado entre oscuridad y luz dorada que perdura.", categories: ["jarrones","secas","precio-bajo"] },
    { id: 35, name: "Cofre Dorado Preservado", price: 150000, image: "../assets/foto35.webp", description: "Caja dorada rebosante de hortensias, craspedia y eucalipto preservado en tonos otoñales. Arreglo eterno de gran volumen y sofisticación.", categories: ["cajas","secas","premium","precio-bajo"] },
    { id: 37, name: "Orquídea Blanca Imperial", price: 150000, image: "../assets/foto37.webp", description: "Planta de orquídea Phalaenopsis blanca en maceta cobre con lazo dorado. Obsequio vivo, duradero y sofisticado que simboliza pureza y admiración.", categories: ["orquideas","premium","precio-bajo"] },
    { id: 28, name: "Cúpula Rosa Eterna", price: 162500, image: "../assets/foto28.webp", description: "Rosa preservada rosada bajo cúpula de cristal con flores secas y base elegante. Símbolo de un amor que nunca se marchita.", categories: ["secas","premium","precio-medio"] },
    { id: 32, name: "Abanico Pampa Rosé", price: 175000, image: "../assets/foto32.webp", description: "Jarrón rosa con flores preservadas y abanico de pampa en dorado y plata. Pieza escenográfica de lujo para una decoración inolvidable.", categories: ["jarrones","secas","premium","precio-medio"] },
    { id: 4, name: "Canasta Encanto Fucsia", price: 187500, image: "../assets/foto4.webp", description: "Canasta acorazonada con rosas, claveles fucsia y gerberas, rematada con bombones Ferrero. Un obsequio romántico lleno de color y dulzura.", categories: ["cajas","rosas","gerberas","chocolates","precio-medio"] },
    { id: 12, name: "Ramo Fuego Gerbera", price: 187500, image: "../assets/foto12.webp", description: "Ramo de gerberas naranjas y amarillas envuelto en papel negro con acentos dorados. Presentación contrastada de gran personalidad y calidez.", categories: ["bouquets","gerberas","precio-medio"] },
    { id: 16, name: "Jarrón Romance Pastel", price: 187500, image: "../assets/foto16.webp", description: "Arreglo en jarrón con rosas rosadas, orquídeas y lisianthus morado en delicada armonía. Detalle clásico y romántico para embellecer cualquier espacio.", categories: ["jarrones","rosas","orquideas","precio-medio"] },
    { id: 17, name: "Jarrón Gerberas Carmesí", price: 187500, image: "../assets/foto17.webp", description: "Jarrón de cristal ámbar repleto de gerberas en tonos rojo, rosa y fucsia. Composición vivaz que irradia frescura y buen ánimo.", categories: ["jarrones","gerberas","precio-medio"] },
    { id: 36, name: "Base Esmeralda Lucci", price: 187500, image: "../assets/foto36.webp", description: "Base firmada Lucci Bene con orquídeas cymbidium verdes, rosas y gerberas. Composición distinguida que combina exotismo y elegancia.", categories: ["cajas","orquideas","rosas","premium","precio-medio"] },
    { id: 23, name: "Busto Místico Azul", price: 200000, image: "../assets/foto23.webp", description: "Escultura busto coronada con flores secas en azul, morado y rosa con pampa natural. Composición preservada de aire contemporáneo y enigmático.", categories: ["jarrones","secas","premium","precio-medio"] },
    { id: 19, name: "Jarrón Fucsia Vibrante", price: 212500, image: "../assets/foto19.webp", description: "Arreglo en jarrón con rosas fucsia, lirios y boca de dragón amarilla. Combinación enérgica de tonos intensos que cautiva a primera vista.", categories: ["jarrones","rosas","precio-medio"] },
    { id: 3, name: "Fiesta de Globos Lucci", price: 225000, image: "../assets/foto3.webp", description: "Caja lila con flores multicolor, tierno osito de peluche y globos en dorado, rosa y perla. Sorpresa festiva perfecta para celebrar cumpleaños inolvidables.", categories: ["cajas","premium","precio-medio"] },
    { id: 9, name: "Centro Campo Soleado", price: 225000, image: "../assets/foto9.webp", description: "Centro de mesa alargado con girasoles, rosas, claveles fucsia y lisianthus. Composición horizontal radiante ideal para banquetes y eventos.", categories: ["cajas","girasoles","rosas","premium","precio-medio"] },
    { id: 11, name: "Ramo Amor Ferrero", price: 225000, image: "../assets/foto11.webp", description: "Generoso ramo de rosas rojas con bombones Ferrero al centro y envoltura dorada. El clásico del amor y la dulzura en una pieza inolvidable.", categories: ["bouquets","rosas","chocolates","premium","precio-medio"] },
    { id: 24, name: "Rostro Dorado Preservado", price: 225000, image: "../assets/foto24.webp", description: "Jarrón dorado con forma de rostro y flores secas en tonos miel y mostaza. Obra decorativa elegante y eterna para espacios de diseño.", categories: ["jarrones","secas","premium","precio-medio"] },
    { id: 1, name: "Jardín Rosé con Ferrero", price: 231250, image: "../assets/foto1.webp", description: "Caja firmada con gerberas rosadas, rosas, orquídeas cymbidium verdes y gypsophila, acompañada de finos bombones Ferrero. Un detalle floral exuberante y dulce para enamorar.", categories: ["cajas","rosas","gerberas","orquideas","chocolates","precio-medio"] },
    { id: 7, name: "Atardecer Gourmet", price: 231250, image: "../assets/foto7.webp", description: "Caja en tonos naranja con rosas, gerberas y gypsophila acompañada de una botella selecta. Detalle vibrante y gourmet para brindar por momentos especiales.", categories: ["cajas","rosas","gerberas","chocolates","precio-medio"] },
    { id: 14, name: "Bouquet Tulipanes & Ranúnculos", price: 250000, image: "../assets/foto14.webp", description: "Refinado bouquet de tulipanes y ranúnculos en tonos lila y rosa, envuelto en papel dorado. Elegancia primaveral para quien aprecia lo exclusivo.", categories: ["bouquets","premium","precio-medio"] },
    { id: 20, name: "Jarrón Cúpula de Rosas", price: 250000, image: "../assets/foto20.webp", description: "Lujoso jarrón con abundante domo de rosas rojas y verdor fresco. La forma más atemporal y elegante de celebrar el amor.", categories: ["jarrones","rosas","premium","precio-medio"] },
    { id: 31, name: "Cúpula Bosque Soleado", price: 262500, image: "../assets/foto31.webp", description: "Girasol preservado, piña y flores secas multicolor bajo amplia cúpula de cristal. Composición eterna que celebra la riqueza de la naturaleza.", categories: ["secas","girasoles","premium","precio-alto"] },
    { id: 8, name: "Cofre Pasión & Oro", price: 275000, image: "../assets/foto8.webp", description: "Elegante caja negra con rosas rojas y amarillas coronadas por bombones Ferrero y lazo dorado. Contraste audaz entre lujo, dulzura y pasión.", categories: ["cajas","rosas","chocolates","premium","precio-alto"] },
    { id: 18, name: "Jarrón Fiesta Floral", price: 275000, image: "../assets/foto18.webp", description: "Imponente jarrón con gerberas, boca de dragón amarilla, claveles y follaje abundante. Pieza alegre y voluminosa para grandes celebraciones.", categories: ["jarrones","gerberas","premium","precio-alto"] },
    { id: 21, name: "Jarrón Primavera Dorada", price: 300000, image: "../assets/foto21.webp", description: "Espléndido jarrón amarillo con gerberas, lirios y lisianthus en tonos cálidos. Arreglo majestuoso que evoca un jardín en plena floración.", categories: ["jarrones","gerberas","premium","precio-alto"] },
    { id: 2, name: "Imperial Rojo & Orquídea", price: 312500, image: "../assets/foto2.webp", description: "Espectacular caja con domo de rosas rojas coronado por orquídeas cymbidium blancas y lazo satinado. Una declaración de amor imponente y sofisticada.", categories: ["cajas","rosas","orquideas","premium","precio-alto"] },
    { id: 15, name: "Bouquet Tropical Lucci", price: 312500, image: "../assets/foto15.webp", description: "Exuberante bouquet tropical con girasoles, gerberas y boca de dragón sobre papel mármol. Composición vibrante que celebra la alegría del color.", categories: ["bouquets","girasoles","gerberas","premium","precio-alto"] },
    { id: 6, name: "Jardín Imperial Lucci", price: 562500, image: "../assets/foto6.webp", description: "Majestuosa caja jardín con rosas, ranúnculos, lisianthus y boca de dragón en una paleta de ensueño. Nuestra pieza más exuberante para ocasiones extraordinarias.", categories: ["cajas","rosas","premium","precio-alto"] }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- GENERAR CÓDIGO DE PRODUCTO ---
function getProductCode(id) {
    return 'COD-' + String(id).padStart(3, '0');
}

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.filter(p => !p.hidden).forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- CARRUSEL CARD "ARREGLO PERSONALIZADO" (fotos antiguas) ---
const customCarousel = Array.from({length: 35}, (_, i) => `../assets/fotos_antiguas/foto${i + 1}.webp`);
let ccTimer = null, ccIndex = 0, ccShowing = 0;
function startCustomCarousel() {
    if (ccTimer) clearInterval(ccTimer);
    const wrap = document.querySelector('.custom-carousel');
    if (!wrap) return;
    const layers = wrap.querySelectorAll('.cc-layer');
    if (layers.length < 2) return;
    ccIndex = 0; ccShowing = 0;
    layers[0].src = customCarousel[0];
    layers[0].classList.add('active');
    layers[1].classList.remove('active');
    ccTimer = setInterval(() => {
        const next = (ccIndex + 1) % customCarousel.length;
        const hidden = ccShowing === 0 ? 1 : 0;
        layers[hidden].src = customCarousel[next];
        layers[hidden].classList.add('active');
        layers[ccShowing].classList.remove('active');
        ccShowing = hidden; ccIndex = next;
    }, 2400);
}
function customCardHTML() {
    const waMsg = 'Hola Lucci Bene, quiero un ARREGLO PERSONALIZADO. Tengo esta idea: ';
    return `
        <div class="product-item custom-card">
            <div class="product-image custom-carousel" style="position:relative;">
                <span class="custom-badge">✦ A tu medida</span>
                <img class="cc-layer active" src="${customCarousel[0]}" alt="Arreglo personalizado Lucci Bene" loading="lazy">
                <img class="cc-layer" src="" alt="" loading="lazy">
                <div class="custom-overlay"><span>Diseña tu arreglo ideal</span></div>
            </div>
            <div class="product-info">
                <h3>Arreglo Personalizado</h3>
                <p>¿Tienes una idea en mente? Creamos un arreglo único a tu medida con tus flores, colores y presupuesto favoritos. Cuéntanos tu visión y la hacemos realidad.</p>
                <div class="product-footer">
                    <span class="price price-custom">A tu gusto</span>
                    <a class="btn-order btn-order-custom" href="https://wa.me/573202583471?text=${encodeURIComponent(waMsg)}" target="_blank">Diseñar el mío</a>
                </div>
            </div>
        </div>`;
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    let productsToDisplay = products.filter(p => !p.hidden);

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes, incluye código de producto, multi-palabra)
    if (currentSearchQuery) {
        const queryNorm = removeAccents(currentSearchQuery.trim());
        const queryWords = queryNorm.split(/\s+/);
        productsToDisplay = productsToDisplay.filter(p => {
            const text = removeAccents(p.name + ' ' + p.description + ' ' + (p.categories ? p.categories.join(' ') : '') + ' ' + getProductCode(p.id));
            return queryWords.every(word => text.includes(word));
        });
    }

    // Ordenar siempre de menor a mayor precio
    productsToDisplay.sort((a, b) => a.price - b.price);

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    // El card "Arreglo Personalizado" siempre va primero
    let html = customCardHTML();
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const code = getProductCode(product.id);
        const hasOptions = Array.isArray(product.priceOptions) && product.priceOptions.length > 0;
        const optionsHtml = hasOptions
            ? `<div class="price-options">${product.priceOptions.map(o => `<span class="price-option">${o.label} <strong>${formatCOP(o.price)}</strong></span>`).join('')}</div>`
            : '';
        html += `
            <div class="product-item">
                <div class="product-image" style="position:relative;">
                    <span class="product-code-badge">${code}</span>
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Bogotá" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    ${optionsHtml}
                    <div class="product-footer">
                        <span class="price">${hasOptions ? 'Desde ' : ''}${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${code} - ${escapedName}', '${product.price}', '${product.image.replace(/'/g, "\\'")}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>`;
    });
    container.innerHTML = html;
    startCustomCarousel();
}

// --- FUNCIONES DE WHATSAPP ---
function contactWA() {
    const url = 'https://wa.me/573202583471?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17856332470/s_bcCIyQwMUcELaFyMJC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price, image) {
    let message = `Hola, me interesa ${productName} (${formatCOP(parseFloat(price))}). ¿Podrías darme más información?`;
    if (image) {
        const photoUrl = 'https://floristeriaenbogota.dondeseria.com/' + String(image).replace('../', '');
        message = `Hola, me interesa el producto: ${productName} - ${formatCOP(parseFloat(price))}\nFoto: ${photoUrl}`;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/573202583471?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17856332470/s_bcCIyQwMUcELaFyMJC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function initCatalog() {
    window._catalogInitialized = true;
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    // Render inicial con todos los productos
    renderProducts();

    // Soporte #dia-madre en URL
    checkHashMadres();
}

// Animación de corazones al activar filtro Día de las Madres
function spawnHearts() {
    let container = document.querySelector('.hearts-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'hearts-container';
        document.body.appendChild(container);
    }
    const hearts = ['♥', '❤', '♡', '❣'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        heart.style.color = ['#e91e63', '#ec407a', '#f06292', '#ff4081', '#ff80ab'][Math.floor(Math.random() * 5)];
        container.appendChild(heart);
        setTimeout(function() { heart.remove(); }, 5000);
    }
}

// Soporte #dia-madre en URL
// SEGURO: Auto-filtro por hash desactivado para que SIEMPRE muestre todos los productos al entrar
function checkHashMadres() {
    // Comportamiento original deshabilitado:
    // if (window.location.hash === '#dia-madre' || window.location.hash === '#dia-madres') {
    //     filterProducts('dia-madres');
    //     spawnHearts();
    //     setTimeout(function() {
    //         var section = document.getElementById('productos');
    //         if (section) section.scrollIntoView({ behavior: 'smooth' });
    //     }, 300);
    // }
    // Agregar lanzamiento de corazones al hacer clic en botón Madres (mantiene el efecto al hacer clic)
    var madresBtn = document.querySelector('.filter-btn-madres');
    if (madresBtn) {
        madresBtn.addEventListener('click', function() {
            spawnHearts();
        });
    }
}

// Inicializar automáticamente si no se define LANDING_PRIORITY_TAG manualmente
document.addEventListener('DOMContentLoaded', function() {
    // Solo inicializar si no hay un script en la página que lo haga
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
