/**
 * Main JS for ICON Store - SPA Version
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Product Data ---
    const products = {
        '1': {
            title: 'iPhone 15 Pro Max Titanium',
            price: 'Consultar Precio',
            category: 'iPhones',
            image: 'catalogo/Screenshot 2026-03-07 193046.png',
            desc: 'El iPhone más potente de la historia. Diseño de titanio aeroespacial, el chip A17 Pro y el sistema de cámara más avanzado.'
        },
        '2': {
            title: 'AirPods Pro (2da Gen)',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193051.png',
            desc: 'Cancelación Activa de Ruido hasta dos veces mejor y Audio Espacial personalizado.'
        },
        '3': {
            title: 'Apple Watch Series 9',
            price: 'Consultar Precio',
            category: 'Gadgets',
            image: 'catalogo/Screenshot 2026-03-07 193058.png',
            desc: 'Una pantalla el doble de brillante y una forma mágica de usarlo sin tocar la pantalla.'
        },
        '4': {
            title: 'Funda MagSafe Clear Case',
            price: 'Consultar Precio',
            category: 'Cases',
            image: 'catalogo/Screenshot 2026-03-07 193111.png',
            desc: 'Muestra el increíble acabado del iPhone mientras le das una protección impecable.'
        },
        '5': {
            title: 'Apple Watch Ultra 2',
            price: 'Consultar Precio',
            category: 'Gadgets',
            image: 'catalogo/Screenshot 2026-03-07 193104.png',
            desc: 'El Apple Watch más capaz y resistente hasta la fecha, diseñado para deportistas extremos.'
        },
        '6': {
            title: 'Silicone Case Original',
            price: 'Consultar Precio',
            category: 'Cases',
            image: 'catalogo/Screenshot 2026-03-07 193117.png',
            desc: 'Suave al tacto y diseñada por Apple para amoldarse perfectamente a las curvas de tu iPhone.'
        },
        '7': {
            title: 'iPhone 15 Pro Blue Titanium',
            price: 'Consultar Precio',
            category: 'iPhones',
            image: 'catalogo/Screenshot 2026-03-07 193122.png',
            desc: 'Estilo y potencia en un diseño de titanio más ligero y resistente.'
        },
        '8': {
            title: 'Magsafe Battery Pack',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193126.png',
            desc: 'Carga inalámbrica rápida y segura donde quiera que vayas.'
        },
        '9': {
            title: 'Apple Watch Alpine Loop',
            price: 'Consultar Precio',
            category: 'Gadgets',
            image: 'catalogo/Screenshot 2026-03-07 193133.png',
            desc: 'Correa resistente diseñada para la aventura al aire libre.'
        },
        '10': {
            title: 'USB-C Fast Charger 20W',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193143.png',
            desc: 'Carga tus dispositivos de forma eficiente y segura.'
        },
        '11': {
            title: 'Braided Lightning Cable',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193147.png',
            desc: 'Cable trenzado de alta durabilidad para carga duradera.'
        },
        '12': {
            title: 'EarPods USB-C',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193152.png',
            desc: 'Sonido claro y controles integrados para música y llamadas.'
        },
        '13': {
            title: 'iPhone 15 Pink',
            price: 'Consultar Precio',
            category: 'iPhones',
            image: 'catalogo/Screenshot 2026-03-07 193203.png',
            desc: 'El nuevo diseño con Dynamic Island y una cámara principal de 48 MP.'
        },
        '14': {
            title: 'iPad Air M2',
            price: 'Consultar Precio',
            category: 'Gadgets',
            image: 'catalogo/Screenshot 2026-03-07 193215.png',
            desc: 'Potencia increíble en un diseño asombrosamente delgado.'
        },
        '15': {
            title: 'Lightning to USB Adapter',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193259.png',
            desc: 'Conecta tus accesorios favoritos a tu iPhone o iPad.'
        },
        '16': {
            title: 'MagSafe Leather Wallet',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193306.png',
            desc: 'Lleva tus tarjetas de forma segura y elegante en tu iPhone.'
        },
        '17': {
            title: 'USB-C Charging Cable',
            price: 'Consultar Precio',
            category: 'Accesorios',
            image: 'catalogo/Screenshot 2026-03-07 193313.png',
            desc: 'Carga y sincroniza tus dispositivos Apple de última generación.'
        },
        '18': {
            title: 'iPhone 13 Starlight',
            price: 'Consultar Precio',
            category: 'iPhones',
            image: 'catalogo/Screenshot 2026-03-07 193323.png',
            desc: 'Un clásico potente con el sistema de doble cámara más avanzado.'
        },
        '19': {
            title: 'iPhone 14 Midnight',
            price: 'Consultar Precio',
            category: 'iPhones',
            image: 'catalogo/Screenshot 2026-03-07 193336.png',
            desc: 'Detección de Choques y una duración de batería asombrosa.'
        },
        '20': {
            title: 'iPhone 14 Plus Blue',
            price: 'Consultar Precio',
            category: 'iPhones',
            image: 'catalogo/Screenshot 2026-03-07 193344.png',
            desc: 'Pantalla extragrande para disfrutar al máximo de tu contenido.'
        },
        '21': {
            title: 'MacBook Pro M3',
            price: 'Consultar Precio',
            category: 'Gadgets',
            image: 'catalogo/Screenshot 2026-03-07 193425.png',
            desc: 'Velocidad y eficiencia brutales para los proyectos más exigentes.'
        },
        '22': {
            title: 'iPad Pro OLED',
            price: 'Consultar Precio',
            category: 'Gadgets',
            image: 'catalogo/Screenshot 2026-03-07 193432.png',
            desc: 'La pantalla más avanzada del mundo en el iPad más potente.'
        },
        '23': {
            title: 'ICON Premium Bag',
            price: 'Gratis con tu compra',
            category: 'Otros',
            image: 'catalogo/Screenshot 2026-03-07 193041.png',
            desc: 'Empaque de lujo ICON Store para una experiencia de unboxing superior.'
        }
    };

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (mobileMenuBtn && mobileMenu) {
        function toggleMenu() {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) toggleMenu();
            });
        });
    }

    // --- Navbar Scroll Effect & Active Link ---
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        const headerHeight = navbar.offsetHeight;

        // Background change
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for mobile vs desktop header
            const offset = headerHeight + 50; 
            if (window.scrollY >= (sectionTop - offset)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // --- Product Modal Logic ---
    const productModal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function openModal(id) {
        const product = products[id];
        if (!product) return;

        modalBody.innerHTML = `
            <div class="product-detail-layout">
                <div class="main-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info-detail">
                    <span class="badge">${product.category}</span>
                    <h2 class="product-title">${product.title}</h2>
                    <div class="product-price">${product.price}</div>
                    <p class="product-desc">${product.desc}</p>
                    <div class="action-buttons">
                        <button class="btn btn-primary add-to-cart-from-modal" data-id="${id}">Agregar al Carrito</button>
                        <a href="https://wa.me/595983677778?text=Hola! Me interesa este producto: ${product.title}" target="_blank" class="btn btn-secondary" style="background-color: #25D366; border: none; color: white;">
                            <i data-lucide="message-circle"></i> Consultar WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;

        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();

        // Add to cart from modal
        modalBody.querySelector('.add-to-cart-from-modal').addEventListener('click', () => {
            addToCart(id);
            closeModal();
        });
    }

    function closeModal() {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) closeModal();
        });
    }

    document.addEventListener('click', (e) => {
        const quickViewBtn = e.target.closest('.quick-view-btn');
        if (quickViewBtn) {
            const id = quickViewBtn.dataset.id;
            openModal(id);
        }
    });

    // --- Cart Logic ---
    let cart = JSON.parse(localStorage.getItem('iconStoreCart')) || [];
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartBadges = document.querySelectorAll('.cart-badge');
    const cartToggles = document.querySelectorAll('#cartToggle');
    const closeCartBtn = document.getElementById('closeCartBtn');

    function addToCart(id) {
        const product = products[id];
        if (!product) return;

        const existing = cart.find(item => item.title === product.title);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ title: product.title, image: product.image, quantity: 1 });
        }
        saveCart();
        openCart();
    }

    function openCart() {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    cartToggles.forEach(btn => btn.addEventListener('click', openCart));
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', (e) => { if (e.target === cartOverlay) closeCart(); });

    function saveCart() {
        localStorage.setItem('iconStoreCart', JSON.stringify(cart));
        updateCartUI();
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        });

        if (!cartItemsContainer) return;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío.</div>';
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--color-border); padding-bottom: 1rem; align-items: center;">
                    <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: contain; background: var(--color-bg-surface); border-radius: 8px;">
                    <div style="flex-grow: 1;">
                        <h4 style="font-size: 0.9rem;">${item.title}</h4>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                            <span style="font-size: 0.8rem; color: var(--color-text-silver);">Consultar</span>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <button onclick="window.changeQty(${index}, -1)" style="color: var(--color-text-secondary);">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="window.changeQty(${index}, 1)" style="color: var(--color-text-secondary);">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    window.changeQty = (index, delta) => {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
        saveCart();
    };

    // Global add to cart listener for grid buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            const card = btn.closest('.product-card');
            const quickView = card.querySelector('.quick-view-btn');
            if (quickView) {
                addToCart(quickView.dataset.id);
            }
        }
    });

    // Checkout button
    const checkoutBtn = document.querySelector('.cart-footer .btn-primary');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return alert('El carrito está vacío');
            let msg = 'Hola ICON Store! Quisera consultar por:%0A%0A';
            cart.forEach(item => msg += `📱 ${item.quantity}x ${item.title}%0A`);
            window.open(`https://wa.me/595983677778?text=${msg}`, '_blank');
        });
    }

    // --- Category Filtering ---
    const filterCheckboxes = document.querySelectorAll('.shop-sidebar input[type="checkbox"]');
    const mainGridProducts = document.querySelectorAll('#mainProductGrid .product-card');

    filterCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const checkedValues = Array.from(filterCheckboxes)
                .filter(c => c.checked)
                .map(c => c.value);

            const isAllChecked = checkedValues.includes('all');

            mainGridProducts.forEach(product => {
                const category = product.dataset.category;
                if (isAllChecked || checkedValues.length === 0 || checkedValues.includes(category)) {
                    product.style.display = 'flex';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Footer and Categories section links
    document.querySelectorAll('[data-category]').forEach(link => {
        if (link.tagName === 'A') {
            link.addEventListener('click', (e) => {
                const cat = link.dataset.category;
                const checkbox = Array.from(filterCheckboxes).find(c => c.value === cat);
                if (checkbox) {
                    filterCheckboxes.forEach(c => c.checked = false);
                    checkbox.checked = true;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
        }
    });

    // Initial load
    updateCartUI();
    lucide.createIcons();
});
