// ===================================
// LANDING PAGE JS - Lucci Bene Bogotá
// Catálogo con prioridad por categoría + Conversiones Google Ads + Día de las Madres
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, name: "Aire Tropical Lucci", price: 90000, image: "../assets/foto1.webp", description: "Composición exótica con ave del paraíso, rosas frescas y bombones dorados en envoltura rosé firmada. Detalle vibrante que combina lujo y emoción para sorprender en cualquier ocasión.", categories: ["bouquets", "rosas", "chocolates", "precio-bajo"] },
    { id: 2, name: "Pasión en Tinto", price: 95000, image: "../assets/foto2.webp", description: "Bouquet apasionado de rosas fucsia y delicada gypsophila acompañado de finos bombones y una botellita gourmet. Una propuesta romántica con detalles selectos para momentos íntimos.", categories: ["bouquets", "rosas", "chocolates", "precio-bajo"] },
    { id: 3, name: "Dorado Solar Premium", price: 165000, image: "../assets/foto3.webp", description: "Bouquet luminoso con tulipanes amarillos, rosas crema y ranúnculos sobre papel beige con estampado floral. Presentación sofisticada con toques dorados que evoca calidez y prestigio.", categories: ["bouquets", "premium", "precio-medio"] },
    { id: 4, name: "Huerto en Flor", price: 75000, image: "../assets/foto4.webp", description: "Composición original que mezcla rosas fucsia, mini girasoles y frutas frescas en envoltura naranja vibrante. Detalle creativo con aire campestre y festivo lleno de color.", categories: ["bouquets", "rosas", "girasoles", "precio-bajo"] },
    { id: 5, name: "Ramillete del Atardecer", price: 45000, image: "../assets/foto5.webp", description: "Mini bouquet vibrante con girasol, lirio naranja, gerbera roja y rosas amarillas envuelto en papel suave. Una explosión cálida de tonos que transmite alegría inmediata.", categories: ["bouquets", "girasoles", "gerberas", "precio-bajo"] },
    { id: 6, name: "Multicolor Encantador", price: 100000, image: "../assets/foto6.webp", description: "Bouquet armonioso con rosas, gerberas y lirios en variedad cromática sobre papel coreano blanco y púrpura. Detalle vivaz con presentación elegante para alegrar cualquier ocasión.", categories: ["bouquets", "rosas", "gerberas", "precio-bajo"] },
    { id: 7, name: "Quinceañera Lucci", price: 75000, image: "../assets/foto7.webp", description: "Imponente arreglo de rosas rojas con bombones dorados y luces decorativas sobre cartulina negra con detalle conmemorativo. Pieza icónica diseñada para celebraciones inolvidables.", categories: ["rosas", "premium", "chocolates", "precio-bajo", "precio-medio", "precio-alto"] },
    { id: 8, name: "Romance Esmeralda", price: 165000, image: "../assets/foto8.webp", description: "Bouquet sofisticado de tulipanes rosados, orquídeas y rosas envuelto en papel verde con acabado dorado. Combinación refinada con tonos intensos que cautiva a primera vista.", categories: ["bouquets", "rosas", "orquideas", "premium", "precio-medio"] },
    { id: 9, name: "Campos de Oro", price: 60000, image: "../assets/foto9.webp", description: "Bouquet radiante de girasoles con detalle de mariposa dorada en papel blanco con borde amarillo. Composición alegre y luminosa que evoca jornadas soleadas y energía positiva.", categories: ["girasoles", "bouquets", "precio-bajo"] },
    { id: 10, name: "Festín de Gerberas", price: 70000, image: "../assets/foto10.webp", description: "Bouquet vibrante de gerberas en tonos amarillos y naranjas sobre cartulina negra con detalles dorados. Presentación contrastada y elegante con personalidad propia.", categories: ["gerberas", "bouquets", "precio-bajo"] },
    { id: 11, name: "Pasión Ferrero", price: 130000, image: "../assets/foto11.webp", description: "Lujoso bouquet de rosas rojas con bombones Ferrero centrales en envoltura dorada brillante. La combinación clásica del amor y la dulzura en una pieza inolvidable.", categories: ["rosas", "chocolates", "premium", "precio-medio"] },
    { id: 12, name: "Mármol Floral", price: 200000, image: "../assets/foto12.webp", description: "Arreglo distinguido con tulipanes amarillos, rosas, gerberas y boca de dragón envuelto en papel mármol blanco y negro. Detalle vivo con un toque artístico contemporáneo.", categories: ["bouquets", "rosas", "gerberas", "premium", "precio-medio"] },
    { id: 13, name: "Susurro Lavanda", price: 120000, image: "../assets/foto13.webp", description: "Bouquet romántico con lirios rosados, rosas moradas y margaritas en envoltura suave y delicada. Una composición tierna que evoca elegancia natural y suavidad.", categories: ["bouquets", "rosas", "precio-medio"] },
    { id: 14, name: "Contraste Vibrante", price: 115000, image: "../assets/foto14.webp", description: "Bouquet enérgico con rosas amarillas y fucsia acompañadas de helechos frescos en envoltura distinguida. Detalle vivaz que destaca por su contraste cromático y vitalidad.", categories: ["rosas", "bouquets", "precio-medio"] },
    { id: 15, name: "Festejo Imperial", price: 160000, image: "../assets/foto15.webp", description: "Arreglo amplio con tulipanes rojos, girasoles, crisantemos y rosas envuelto en papel rosa nacarado. Composición majestuosa pensada para celebraciones memorables.", categories: ["bouquets", "rosas", "girasoles", "premium", "precio-medio"] },
    { id: 16, name: "Corazón Encendido", price: 10000, image: "../assets/foto16.webp", description: "Arreglo en forma de corazón con rosas naranjas, gerberas, claveles y una botella selecta. Presentación apasionada con detalles gourmet ideal para enamorar.", categories: ["cajas", "rosas", "gerberas", "chocolates", "precio-bajo"] },
    { id: 17, name: "Sol en Caja", price: 10000, image: "../assets/foto17.webp", description: "Arreglo en caja con rosas amarillas, gerberas y crisantemos sobre base elegante con lazo. Detalle compacto que irradia luz y alegría en cada flor.", categories: ["cajas", "rosas", "gerberas", "precio-bajo"] },
    { id: 18, name: "Fantasía Rosa", price: 150000, image: "../assets/foto18.webp", description: "Arreglo en caja con rosas rosadas, peluche encantador y globo de unicornio en tonos suaves. Detalle tierno y festivo pensado para sorprender con magia y cariño.", categories: ["cajas", "rosas", "precio-medio"] },
    { id: 19, name: "Festín Tropical", price: 150000, image: "../assets/foto19.webp", description: "Imponente arreglo con gladiolos fucsia, lirios naranjas, gerberas, rosas y verdor abundante sobre caja blanca personalizada. Composición espectacular para cumpleaños inolvidables.", categories: ["cajas", "rosas", "gerberas", "premium", "precio-medio"] },
    { id: 20, name: "Romance en Caja", price: 10000, image: "../assets/foto20.webp", description: "Arreglo en caja rosa con rosas rosadas y blancas frescas acompañadas de gypsophila delicada. Detalle clásico y refinado para expresar afecto sin palabras.", categories: ["cajas", "rosas", "precio-bajo"] },
    { id: 21, name: "Burbujas de Cumpleaños", price: 150000, image: "../assets/foto21.webp", description: "Caja morada con rosas, osito de peluche y globos burbuja en dorado, rosa y blanco. Una sorpresa festiva llena de color para celebrar el día especial.", categories: ["cajas", "rosas", "premium", "precio-medio"] },
    { id: 22, name: "Cofre Dulce Lucci", price: 10000, image: "../assets/foto22.webp", description: "Caja Lucci Bene con rosas rosadas, orquídeas y cajón secreto repleto de bombones dorados. Detalle premium que mezcla flores, dulces y sorpresa en una sola pieza.", categories: ["cajas", "rosas", "orquideas", "chocolates", "premium", "precio-bajo"] },
    { id: 23, name: "Brisa Rosa Premium", price: 10000, image: "../assets/foto23.webp", description: "Espectacular caja rosa con rosas, orquídeas, claveles y lazos turquesa contrastantes. Composición voluminosa con presentación impecable para momentos de gran significado.", categories: ["cajas", "rosas", "orquideas", "premium", "precio-bajo"] },
    { id: 24, name: "Mini Dulzura", price: 24000, image: "../assets/foto24.webp", description: "Caja rosa compacta con rosas rosadas frescas, gypsophila y bombones Ferrero. Detalle delicado y encantador para conquistar con sencillez y elegancia.", categories: ["cajas", "rosas", "chocolates", "precio-bajo"] },
    { id: 25, name: "Bendición Floral", price: 170000, image: "../assets/foto25.webp", description: "Arreglo devocional con figura de la Virgen María rodeada de flores variadas sobre base elegante. Detalle espiritual perfecto para celebraciones religiosas y agradecimientos.", categories: ["cajas", "premium", "precio-medio"] },
    { id: 26, name: "Atardecer Tropical", price: 10000, image: "../assets/foto26.webp", description: "Arreglo en caja con gingers, gerberas naranjas, calas amarillas y follaje tropical exuberante. Composición exótica que evoca calidez y sofisticación natural.", categories: ["cajas", "gerberas", "precio-bajo"] },
    { id: 27, name: "Orquídea Encantada", price: 10000, image: "../assets/foto27.webp", description: "Arreglo elegante con orquídeas, claveles y follaje selecto sobre caja rosa nacarada. Detalle refinado con un toque exclusivo para conquistar miradas.", categories: ["cajas", "orquideas", "premium", "precio-bajo"] },
    { id: 28, name: "Centro Imperial", price: 150000, image: "../assets/foto28.webp", description: "Centro de mesa alargado con rosas rosadas, gerberas y orquídeas sobre base rectangular elegante. Composición horizontal ideal para banquetes y eventos distinguidos.", categories: ["cajas", "rosas", "orquideas", "gerberas", "premium", "precio-medio"] },
    { id: 29, name: "Jarrón Imperial Dorado", price: 300000, image: "../assets/foto29.webp", description: "Espectacular arreglo en jarrón con lirios amarillos, rosas, gerberas y abundante follaje fresco. Pieza imponente que combina volumen, color y sofisticación absoluta.", categories: ["jarrones", "rosas", "gerberas", "premium", "precio-alto"] },
    { id: 30, name: "Sutileza en Cerámica", price: 110000, image: "../assets/foto30.webp", description: "Arreglo en jarrón blanco con rosas crema, claveles rosados y gerberas suaves. Detalle clásico con presentación impecable y un aire profundamente romántico.", categories: ["jarrones", "rosas", "gerberas", "precio-medio"] },
    { id: 31, name: "Pasión en Cerámica", price: 120000, image: "../assets/foto31.webp", description: "Arreglo en jarrón rojo con anturios, gerberas naranjas, claveles y crisantemos blancos. Composición vibrante que combina elegancia rústica y energía vital.", categories: ["jarrones", "gerberas", "precio-medio"] },
    { id: 32, name: "Sinfonía Floral", price: 150000, image: "../assets/foto32.webp", description: "Arreglo vivaz con rosas fucsia, rosas amarillas, lirios naranjas y orquídeas en jarrón blanco. Pieza armoniosa con tonos cálidos y carácter alegre inigualable.", categories: ["jarrones", "rosas", "orquideas", "premium", "precio-medio"] },
    { id: 33, name: "Cúpula de Rosas Rojas", price: 110000, image: "../assets/foto33.webp", description: "Lujoso arreglo en forma de cúpula con abundantes rosas rojas en jarrón blanco con lazo satinado. Pieza atemporal que celebra el amor en su forma más clásica.", categories: ["jarrones", "rosas", "premium", "precio-medio"] },
    { id: 34, name: "Orquídea Lucci", price: 85000, image: "../assets/foto34.webp", description: "Planta de orquídea Phalaenopsis rosada con presentación de regalo y lazo elegante en papel premium. Detalle duradero y sofisticado que simboliza admiración y refinamiento.", categories: ["orquideas", "premium", "precio-bajo"] },
    { id: 35, name: "Pecera de Orquídeas", price: 70000, image: "../assets/foto35.webp", description: "Mini orquídeas fucsia en pecera de cristal con base decorativa y lazo dorado. Detalle único y artístico ideal como obsequio sofisticado para sorprender con estilo.", categories: ["orquideas", "premium", "precio-bajo"] }
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

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    // Excluir productos ocultos
    let productsToDisplay = products.filter(p => !p.hidden);

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

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

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    // Intercalar productos para variedad visual (solo en vista general sin búsqueda)
    if ((!filters.length || filters[0] === 'todos') && !currentSearchQuery) {
        const funebre = productsToDisplay.filter(p => p.categories.includes('funebre'));
        const noFunebre = productsToDisplay.filter(p => !p.categories.includes('funebre'));

        const categoryGroups = {};
        const categoryOrder = ['dia-madres', 'rosas', 'bouquets', 'cajas', 'canastas', 'girasoles', 'gerberas', 'pompones', 'rosas-eternas', 'coreano', 'novia', 'chocolates', 'premium'];

        noFunebre.forEach(p => {
            const mainCat = categoryOrder.find(c => p.categories.includes(c)) || 'otros';
            if (!categoryGroups[mainCat]) categoryGroups[mainCat] = [];
            categoryGroups[mainCat].push(p);
        });

        Object.values(categoryGroups).forEach(group => {
            group.sort((a, b) => a.price - b.price);
            const temp = [];
            let lo = 0, hi = group.length - 1;
            let pickHigh = true;
            while (lo <= hi) {
                if (pickHigh) { temp.push(group[hi--]); }
                else { temp.push(group[lo++]); }
                pickHigh = !pickHigh;
            }
            group.length = 0;
            group.push(...temp);
        });

        const interleaved = [];
        const activeCats = categoryOrder.filter(c => categoryGroups[c] && categoryGroups[c].length > 0);
        if (categoryGroups['otros'] && categoryGroups['otros'].length > 0) activeCats.push('otros');

        let maxLen = Math.max(...activeCats.map(c => categoryGroups[c].length));
        for (let i = 0; i < maxLen; i++) {
            for (const cat of activeCats) {
                if (categoryGroups[cat] && i < categoryGroups[cat].length) {
                    interleaved.push(categoryGroups[cat][i]);
                }
            }
        }

        productsToDisplay = [...interleaved, ...funebre];
    }

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const code = getProductCode(product.id);
        const productHTML = `
            <div class="product-item">
                <div class="product-image" style="position:relative;">
                    <span class="product-code-badge" style="position:absolute;top:0.7rem;left:0.7rem;background:rgba(0,0,0,0.65);color:#fff;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;font-weight:700;letter-spacing:0.5px;z-index:2;font-family:'Poppins',sans-serif;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);">${code}</span>
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Bogotá" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${code} - ${escapedName}', '${product.price}', '${product.image.replace(/'/g, "\\'")}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
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
