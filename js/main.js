/**
 * Main JS for ICON Store
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Cart Sidebar Toggle ---
    const cartToggles = document.querySelectorAll('#cartToggle');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');

    cartToggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) {
                cartOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Cart & WhatsApp Integration Functionality ---
    let cart = JSON.parse(localStorage.getItem('iconStoreCart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartBadges = document.querySelectorAll('.cart-badge');

    // Find checkout button assuming it's the primary button in cart footer
    const cartFooter = document.querySelector('.cart-footer');
    let checkoutBtn = null;
    if (cartFooter) {
        checkoutBtn = cartFooter.querySelector('.btn-primary');
    }

    function updateCartUI() {
        if (!cartItemsContainer) return;

        // Update badges
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            if (totalItems > 0) {
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        });

        // Render items in cart sidebar
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío.</div>';
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--color-border); align-items: center;">
                    <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: contain; background: var(--color-bg-surface); border-radius: 8px; padding: 5px;">
                    <div style="flex-grow: 1;">
                        <h4 style="font-size: 0.95rem; margin-bottom: 0.25rem;">${item.title}</h4>
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="color: var(--color-text-silver); font-weight: 600; font-size: 0.9rem;">Consultar</span>
                            <div style="display: flex; align-items: center; gap: 0.5rem; background: var(--color-bg-surface); border-radius: 4px; padding: 2px 6px; border: 1px solid var(--color-border);">
                                <button class="decrease-qty" data-index="${index}" style="color: var(--color-text-secondary); width: 20px; font-weight: bold;">-</button>
                                <span style="font-size: 0.9rem; min-width: 15px; text-align: center;">${item.quantity}</span>
                                <button class="increase-qty" data-index="${index}" style="color: var(--color-text-secondary); width: 20px; font-weight: bold;">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="remove-item" data-index="${index}" style="color: #ff4d4f; padding: 5px; background: rgba(255, 77, 79, 0.1); border-radius: 8px; transition: all 0.2s;"><i data-lucide="trash-2" style="width: 18px; height: 18px;"></i></button>
                </div>
            `).join('');

            // Re-initialize icons for newly added HTML
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        // Attach events to dynamic cart buttons
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.dataset.index;
                cart[idx].quantity++;
                saveCart();
            });
        });

        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.dataset.index;
                if (cart[idx].quantity > 1) {
                    cart[idx].quantity--;
                } else {
                    cart.splice(idx, 1);
                }
                saveCart();
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.dataset.index;
                cart.splice(idx, 1);
                saveCart();
            });
        });
    }

    function saveCart() {
        localStorage.setItem('iconStoreCart', JSON.stringify(cart));
        updateCartUI();
    }

    // Capture add-to-cart clicks globally
    document.addEventListener('click', (e) => {
        const addToCartBtn = e.target.closest('.add-to-cart-btn') ||
            (e.target.closest('.action-buttons .btn-primary') && !e.target.closest('.cart-overlay'));

        if (addToCartBtn) {
            e.preventDefault();

            let title = '';
            let image = '';

            // Check if it's the product detail page button
            const isProductPage = document.querySelector('.product-detail-layout');

            if (isProductPage && addToCartBtn.closest('.action-buttons')) {
                const titleEl = document.querySelector('.product-title');
                const imgEl = document.querySelector('.main-image img');
                if (titleEl && imgEl) {
                    title = titleEl.textContent.trim();
                    image = imgEl.src;
                }
            } else {
                // It's a card in a grid
                const card = addToCartBtn.closest('.product-card');
                if (card) {
                    const titleEl = card.querySelector('.product-title');
                    const imgEl = card.querySelector('.product-image');
                    if (titleEl && imgEl) {
                        title = titleEl.textContent.trim();
                        image = imgEl.src;
                    }
                }
            }

            if (title && image) {
                // Add to array
                const existing = cart.find(item => item.title === title);
                if (existing) {
                    existing.quantity++;
                } else {
                    cart.push({ title, image, quantity: 1 });
                }
                saveCart();

                // Open cart sidebar automatically to show feedback
                if (cartOverlay) {
                    cartOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });

    // Setup the Checkout to WhatsApp button
    if (checkoutBtn) {
        // Morph the button to look like a WhatsApp action
        checkoutBtn.innerHTML = '<i data-lucide="message-circle" style="margin-right: 8px;"></i> Pedir por WhatsApp';
        checkoutBtn.style.backgroundColor = '#25D366';
        checkoutBtn.style.color = '#ffffff';
        checkoutBtn.style.border = 'none';

        // Ensure icon renders if lucide exists
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Agrega productos para realizar un pedido.');
                return;
            }

            let msg = 'Hola ICON Store! Quisiera consultar la cotización y disponibilidad de los siguientes productos:%0A%0A';
            cart.forEach(item => {
                msg += `📱 ${item.quantity}x ${item.title}%0A`;
            });
            msg += '%0A¡Gracias!';

            window.open(`https://wa.me/595983677778?text=${msg}`, '_blank');
        });
    }

    // Call on explicit load
    updateCartUI();

    // --- Shop Category Filtering Logic ---
    const filterCheckboxes = document.querySelectorAll('.filter-list input[type="checkbox"]');
    if (filterCheckboxes.length > 0) {
        filterCheckboxes.forEach(cb => {
            cb.addEventListener('change', (e) => {
                const clickedCb = e.currentTarget;
                const filterLabel = clickedCb.parentElement.textContent.trim();

                // Handle "Todos" exclusivity
                const allCb = Array.from(filterCheckboxes).find(c => c.parentElement.textContent.trim() === 'Todos');

                if (clickedCb === allCb && clickedCb.checked) {
                    // Uncheck everything else
                    filterCheckboxes.forEach(c => { if (c !== allCb) c.checked = false; });
                } else if (clickedCb !== allCb && clickedCb.checked) {
                    // Uncheck "Todos"
                    if (allCb) allCb.checked = false;
                }

                // Gather active filters
                const activeCategories = Array.from(filterCheckboxes)
                    .filter(c => c.checked && c.parentElement.textContent.trim() !== 'Todos')
                    .map(c => c.parentElement.textContent.trim().toLowerCase());

                // Filter DOM objects
                const products = document.querySelectorAll('.product-grid .product-card');
                products.forEach(p => {
                    const catEl = p.querySelector('.product-category');
                    if (!catEl) return;

                    const cat = catEl.textContent.trim().toLowerCase();
                    const isAll = allCb && allCb.checked;
                    // If no filters are checked, act as if "Todos" is checked
                    const noFilters = activeCategories.length === 0 && (!allCb || !allCb.checked);

                    const matchesCategory = activeCategories.includes(cat);

                    if (isAll || noFilters || matchesCategory) {
                        p.style.display = 'flex';
                        // Add slight animation back in
                        p.style.animation = 'fadeUp 0.4s ease forwards';
                    } else {
                        p.style.display = 'none';
                    }
                });
            });
        });
    }
});
