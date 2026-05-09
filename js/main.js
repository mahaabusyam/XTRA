document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('closeBtn');
    const sideMenu = document.getElementById('sideMenu');
    
    if (menuToggle && closeBtn && sideMenu) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('open');
        });
        
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.remove('open');
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === sideMenu) {
                sideMenu.classList.remove('open');
            }
        });
    }
    
    const mobileAbout = document.getElementById('mobileAbout');
    
    if (mobileAbout) {
        const aboutLink = mobileAbout.querySelector('a');
        
        if (aboutLink) {
            aboutLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                mobileAbout.classList.toggle('open');
            });
        }
    }
    
    const innerDropdown = document.querySelector('.has-inner-children');
    
    if (innerDropdown) {
        const innerLink = innerDropdown.querySelector('a');
        
        if (innerLink) {
            innerLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                innerDropdown.classList.toggle('open');
            });
        }
    }
    
    const section = document.querySelector('.image-container');
    const bike = document.getElementById('moving-bike');
    
    if (section && bike) {
        window.addEventListener('scroll', function() {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                let scrollFraction = (windowHeight - rect.top) / (windowHeight + rect.height);
                scrollFraction = Math.max(0, Math.min(1, scrollFraction));
                
                const maxMove = section.offsetWidth - bike.offsetWidth;
                const currentMoveX = scrollFraction * maxMove;
                
                bike.style.transform = `translate(${currentMoveX}px, -50%)`;
            }
        });
    }
    
    const testimonialSlides = document.querySelectorAll('.testimonial');
let currentSlide = 0;

if (testimonialSlides.length) {
    testimonialSlides[0].classList.add('active');
}

function showTestimonial(index) {
    if (!testimonialSlides.length) return;
    
    testimonialSlides[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    if (currentSlide >= testimonialSlides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = testimonialSlides.length - 1;
    
    testimonialSlides[currentSlide].classList.add('active');
}

function nextSlideI() {
    showTestimonial(currentSlide + 1);
}

function prevSlideI() {
    showTestimonial(currentSlide - 1);
} 

    
    const upBtn = document.querySelector(".up-btn");
    
    if (upBtn) {
        upBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    
    const msgBtn = document.querySelector(".msg-btn");
    
    if (msgBtn) {
        msgBtn.addEventListener("click", () => {
            window.open("https://wa.me/970599000000", "_blank");
        });
    }
    
    const slidesAbout = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot2");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    
    let currentIndex = 0;
    let autoSlide;
    
    function showSlide(newIndex) {
        if (!slidesAbout.length) return;
        
        const oldIndex = currentIndex;
        
        slidesAbout.forEach((slide, i) => {
            slide.classList.remove("active", "exit-left", "exit-right");
            
            if (i === newIndex) slide.classList.add("active");
            
            if (i === oldIndex) {
                if (newIndex > oldIndex || (oldIndex === slidesAbout.length - 1 && newIndex === 0)) {
                    slide.classList.add("exit-left");
                } else {
                    slide.classList.add("exit-right");
                }
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === newIndex);
        });
        
        currentIndex = newIndex;
    }
    
    function nextSlide() {
        showSlide((currentIndex + 1) % slidesAbout.length);
    }
    
    function prevSlide() {
        showSlide((currentIndex - 1 + slidesAbout.length) % slidesAbout.length);
    }
    
    function startAutoSlide() {
        if (autoSlide || !slidesAbout.length) return;
        autoSlide = setInterval(nextSlide, 3000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = null;
    }
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
        
        prevBtn.addEventListener("click", () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    if (slidesAbout.length) {
        showSlide(0);
        startAutoSlide();
    }
    
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('active');
        });
    });
    
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;
    
    function showPage(index) {
        if (!pages.length) return;
        pages.forEach(page => page.classList.remove("active"));
        pages[index].classList.add("active");
        currentPage = index;
    }
    
    window.goToPage = function(index) {
        showPage(index);
    };
    
    window.nextPage = function() {
        if (!pages.length) return;
        showPage((currentPage + 1) % pages.length);
    };
    
    window.prevPage = function() {
        if (!pages.length) return;
        showPage((currentPage - 1 + pages.length) % pages.length);
    };
    
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-card");
    
    if (filterButtons.length) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                
                const category = button.getAttribute("data-category");
                
                products.forEach(product => {
                    const productCategory = product.getAttribute("data-category");
                    
                    if (category === "all" || category === productCategory) {
                        product.classList.remove("hide");
                    } else {
                        product.classList.add("hide");
                    }
                });
            });
        });
    }
    
    const countSelect = document.querySelector(".products-count");
    const sortSelect = document.querySelector(".sort-products");
    
    if (countSelect) {
        countSelect.addEventListener("change", () => {
            const count = parseInt(countSelect.value);
            
            products.forEach((product, index) => {
                product.style.display = index < count ? "block" : "none";
            });
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            const value = sortSelect.value;
            const container = document.querySelector(".products-grid");
            
            if (!container) return;
            
            let sorted = [...products];
            
            if (value === "Price: Low to High") {
                sorted.sort((a, b) => a.dataset.price - b.dataset.price);
            }
            
            if (value === "Price: High to Low") {
                sorted.sort((a, b) => b.dataset.price - a.dataset.price);
            }
            
            sorted.forEach(product => container.appendChild(product));
        });
    }
    
    const viewIcons = document.querySelectorAll(".view-icons .dot-grid");
    const productsGrid = document.querySelector(".products-grid-sh");
    
    if (viewIcons.length && productsGrid) {
        viewIcons.forEach((icon, index) => {
            icon.addEventListener("click", () => {
                viewIcons.forEach(i => i.classList.remove("active"));
                icon.classList.add("active");
                
                if (index === 0) productsGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
                if (index === 1) productsGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
                if (index === 2) productsGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
            });
        });
    }
    
});

function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }
    
    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    let target = document.getElementById(tabName);
    if (target) target.classList.add("active");
    
    evt.currentTarget.classList.add("active");
    
}
const products = [
    {
        name: 'Discover 2 Step-Thru',
        brand: 'Premium Sets',
        price: '$768',
        image: 'images/bicycle.png',
        weight: '19 lbs',
        year: '2024'
    },
    {
        name: 'Folding Electric Bike',
        brand: 'Exclusive',
        price: '$1,270',
        image: 'images/bicycle3.png',
        weight: '24 lbs',
        year: '2026'
    },
    {
        name: 'High Timber 24in',
        brand: 'Cannondale',
        price: '$790',
        image: 'images/bicycle4.png',
        weight: '20 lbs',
        year: '2024'
    },
    {
        name: 'Hybrid Electric Bike',
        brand: 'Bianchi',
        price: '$999',
        image: 'images/bicycle2.png',
        weight: '22 lbs',
        year: '2023'
    },
    {
        name: 'Parkwood Electric Bike',
        brand: 'Cannondale',
        price: '$980',
        image: 'images/bicycle4.png',
        weight: '20 lbs',
        year: '2025'
    },
    {
        name: 'Pro Bike Vortex',
        brand: 'Cannondale',
        price: '$768',
        image: 'images/bicycle5.png',
        weight: '19 lbs',
        year: '2024'
    }
];
window.currentProducts = products; 
localStorage.setItem('allProductsStore', JSON.stringify(products));

function openProduct(index) {
    const productData = window.currentProducts[index];
    
    if (!productData) return;
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    let recently = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    recently = recently.filter(p => p.name !== productData.name);
    recently.unshift(productData);
    if (recently.length > 4) recently.pop();
    localStorage.setItem('recentlyViewed', JSON.stringify(recently));
    window.location.href = 'product.html';
}
document.addEventListener('DOMContentLoaded', function() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;
    if (document.getElementById('detail-title')) document.getElementById('detail-title').innerText = product.name;
    if (document.getElementById('detail-price')) document.getElementById('detail-price').innerText = product.price;
    if (document.getElementById('detail-img')) document.getElementById('detail-img').src = product.image;
    if (document.getElementById('detail-brand')) document.getElementById('detail-brand').innerText = product.brand;
    if (document.getElementById('detail-weight')) document.getElementById('detail-weight').innerText = product.weight;
    if (document.getElementById('detail-year')) document.getElementById('detail-year').innerText = product.year;
    displayRelated(product);
    displayRecently();
});
function displayRelated(currentProduct) {
    const container = document.getElementById('related-container');
    const allProds = JSON.parse(localStorage.getItem('allProductsStore')) || [];
    if (!container) return;
    const related = allProds.filter(p => p.brand === currentProduct.brand && p.name !== currentProduct.name);

    container.innerHTML = related.map(p => {
        const idx = products.findIndex(item => item.name === p.name);
        return `
        <div class="product-card" onclick="openProduct(${idx})">
             <div class="image-box">
                 <img src="${p.image}" alt="${p.name}">
                 <div class="overlay-img">
                     <div>
                         <i class="fa-regular fa-heart"></i>
                         <i class="fas fa-random"></i>
                         <i class="fas fa-search"></i>
                     </div>
                 </div>
             </div>
             <div class="product-info">
                 <h3>${p.name}</h3>
                 <p class="brand">${p.brand}</p>
                 <div class="price-container">
                     <div class="prices">
                         <span class="new-price">${p.price}</span>
                     </div>
                     <button class="cart-btn">
                         <i class="fas fa-shopping-cart"></i> add to cart
                         <div class="overlay2"></div>
                     </button>
                 </div>
             </div>
         </div>`;
    }).join('');
}


function displayRecently() {
    const container = document.getElementById('recently-container');
    const recently = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const current = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!container) return;


    const toShow = recently.filter(p => p.name !== current?.name);

    container.innerHTML = toShow.map(p => {
        const idx = products.findIndex(item => item.name === p.name);
        return `
        <div class="product-card" onclick="openProduct(${idx})">
             <div class="image-box">
                 <img src="${p.image}" alt="${p.name}">
                 <div class="overlay-img">
                     <div>
                         <i class="fa-regular fa-heart"></i>
                         <i class="fas fa-random"></i>
                         <i class="fas fa-search"></i>
                     </div>
                 </div>
             </div>
             <div class="product-info">
                 <h3>${p.name}</h3>
                 <p class="brand">${p.brand}</p>
                 <div class="price-container">
                     <div class="prices">
                         <span class="new-price">${p.price}</span>
                     </div>
                     <button class="cart-btn">
                         <i class="fas fa-shopping-cart"></i> add to cart
                         <div class="overlay2"></div>
                     </button>
                 </div>
             </div>
         </div>`;
    }).join('');
}

const postsData = [
    {
        id: 1,
        title: "Top 7 Must have Accessories for Every Cyclist",
        category: "Tutorial",
        image: "images/new1.jpg",
    },
    {
        id: 2,
        title: "How to Choose the Perfect Bike for Your Lifestyle",
        category: "Interview",
        image: "images/new2.jpg"
    },
    {
        id: 3,
        title: "5 Local Cycling Trails You Shouldn't Miss",
        category: "Uncategorized",
        image: "images/new3.jpg"
    },
    {
        id: 4,
        title: "Electric Bikes Explained: Are They Worth It?",
        category: "News",
        image: "images/new4.jpg"
    },
    {
        id: 5,
        title: "How to Safely Commute to Work by Bicycle",
        category: "Interview" ,
        image: "images/post5-1.jpg"
    },
    {
        id: 6,
        title: "Top 10 Reasons to Start Cycling Today",
        category: "News",
        image: "images/post-6.jpg"
    }
];
function openPost(postId) {
    const post = postsData.find(p => p.id === postId);
    
    if (post) {
        localStorage.setItem('selectedPost', JSON.stringify(post));
        window.location.href = 'post-blog.html'; 
    }
}
window.onload = function() {
    const post = JSON.parse(localStorage.getItem('selectedPost'));

    if (post) {
        document.getElementById('category-name').innerText = post.category;
        document.getElementById('post-title').innerText = post.title;
        document.getElementById('post-image').src = post.image;
    }
};
function displayRelatedPosts() {
    const currentPost = JSON.parse(localStorage.getItem('selectedPost'));
    const container = document.getElementById('related-blog-container');
    
    if (!currentPost || !container) return;
    const related = postsData.filter(post => 
        post.category === currentPost.category && post.id !== currentPost.id
    );
    container.innerHTML = '';
    related.forEach(post => {
        const postHtml = `
            <article class="related-post-card" onclick="openPost(${post.id})" style="cursor:pointer; margin-bottom: 20px;">
                <div class="related-post-img">
                    <img src="${post.image}" alt="${post.title}" style="width: 100%; border-radius: 15px;">
                </div>
                <div class="related-post-info">
                    <h3 style="color: #fff; font-size: 18px; margin: 15px 0 10px 0;">${post.title}</h3>
                    <div style="color: #aaa; font-size: 14px;">
                        <i class="fas fa-folder"></i> ${post.category}
                    </div>
                </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', postHtml);
    });

    if (related.length === 0) {
        container.innerHTML = '<p style="color: #666;">No related posts found.</p>';
    }
}

window.addEventListener('load', displayRelatedPosts);

function setupNavigation() {
    const currentPost = JSON.parse(localStorage.getItem('selectedPost'));
    if (!currentPost) return;
    const currentIndex = postsData.findIndex(p => p.id === currentPost.id);

    const prevPost = postsData[currentIndex - 1];
    const nextPost = postsData[currentIndex + 1];

    const prevBtn = document.getElementById('prev-post-btn');
    if (prevPost) {
        document.getElementById('prev-post-title').innerText = prevPost.title;
        prevBtn.dataset.id = prevPost.id;
    } else {
        prevBtn.classList.add('hidden-nav');
    }

    const nextBtn = document.getElementById('next-post-btn');
    if (nextPost) {
        document.getElementById('next-post-title').innerText = nextPost.title;
        nextBtn.dataset.id = nextPost.id;
    } else {
        nextBtn.classList.add('hidden-nav');
    }
}
window.addEventListener('load', setupNavigation);
function navigateToPost(direction) {
    const btnId = direction === 'prev' ? 'prev-post-btn' : 'next-post-btn';
    const btn = document.getElementById(btnId);
    const targetId = btn.dataset.id;

    if (targetId) {
        const targetPost = postsData.find(p => p.id === parseInt(targetId));

        if (targetPost) {
            localStorage.setItem('selectedPost', JSON.stringify(targetPost));
            window.location.href = 'post-blog.html'; 
        }
    }
}
 function setupProductNavigation() {
    const currentProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!currentProduct) return;
    
    const currentIndex = products.findIndex(p => p.name === currentProduct.name);
    
    if (currentIndex === -1) {
        console.warn("المنتج الحالي غير موجود في القائمة");
        return;
    }
    
    const prevItem = products[currentIndex - 1];
    const nextItem = products[currentIndex + 1];
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const gridBtn = document.getElementById('gridBtn');
    if (prevBtn) {
        if (prevItem) {
            prevBtn.style.display = "inline-block";
            prevBtn.onclick = () => {
                localStorage.setItem('selectedProduct', JSON.stringify(prevItem));
                window.location.reload();
            };
        } else {
            prevBtn.style.display = "none";
        }
    }
    
    if (nextBtn) {
        if (nextItem) {
            nextBtn.style.display = "inline-block";
            nextBtn.onclick = () => {
                localStorage.setItem('selectedProduct', JSON.stringify(nextItem));
                window.location.reload();
            };
        } else {
            nextBtn.style.display = "none";
        }
    }
    
    if (gridBtn) {
        gridBtn.onclick = () => {
            window.location.href = "index.html";
        };
    }
}

document.addEventListener('DOMContentLoaded', setupProductNavigation);

const quantityWrappers = document.querySelectorAll('.quantity-wrapper');

quantityWrappers.forEach(wrapper => {
    
    const btnMinus = wrapper.querySelector('button:first-child');
    const btnPlus = wrapper.querySelector('button:last-child');
    const qtyNum = wrapper.querySelector('.qty-num');

    
    btnPlus.addEventListener('click', () => {
        let currentValue = parseInt(qtyNum.textContent);
        qtyNum.textContent = currentValue + 1;
    });

    
    btnMinus.addEventListener('click', () => {
        let currentValue = parseInt(qtyNum.textContent);
        if (currentValue > 1) {
            qtyNum.textContent = currentValue - 1;
        }
    });
});

/*اضافة للمفضلة*/

function updateWishlistBadge() {
    const wishlist = JSON.parse(localStorage.getItem('userWishlist')) || [];
    const badge = document.querySelector('.icon-wrapper .badge');
    
    if (badge) {
        badge.innerText = wishlist.length;
            badge.style.display = 'flex';
    }
}
function showWishlistModal(productName) {
    const modal = document.getElementById('wishlist-modal');
    const modalText = document.getElementById('modal-product-name');
    
    if (modal && modalText) {
        modalText.innerText = productName;
        modal.style.display = 'flex';
    }
}

function closeWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function addToWishlist() {
    const currentProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!currentProduct) return;
    
    let wishlist = JSON.parse(localStorage.getItem('userWishlist')) || [];
    const exists = wishlist.find(p => p.name === currentProduct.name);
    
    if (!exists) {
        wishlist.push(currentProduct);
        localStorage.setItem('userWishlist', JSON.stringify(wishlist));
        updateWishlistBadge();
        showWishlistModal(currentProduct.name);
    } else {
        alert("This product is already in your wishlist!");
    }
}

function displayWishlist() {
    const wishlistGrid = document.querySelector('.products-grid');
    const emptySection = document.querySelector('.wishlist-empty');
    const wishlist = JSON.parse(localStorage.getItem('userWishlist')) || [];
    
    if (!wishlistGrid) return;
    
    if (wishlist.length === 0) {
        if (emptySection) emptySection.style.display = 'block';
        wishlistGrid.style.display = 'none';
    } else {
        if (emptySection) emptySection.style.display = 'none';
        wishlistGrid.style.display = 'grid';
        
        wishlistGrid.innerHTML = '';
        
        wishlist.forEach((product, index) => {
            wishlistGrid.innerHTML += `
                <div class="product-card" style="position:relative">
                    <button class="remove-btn" onclick="removeFromWishlist(${index})" 
                            style="position: absolute; top: 10px; right: 10px; z-index: 5; background: #ff4d4d; color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-weight: bold; font-size: 18px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                        &times;
                    </button>
                    <div class="image-box">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="brand">${product.brand}</p>
                        <div class="price-container">
                            <div class="prices">
                                <span class="new-price">${product.price}</span>
                            </div>
                            <button class="cart-btn"><i class="fas fa-shopping-cart"></i> add to cart</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('userWishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('userWishlist', JSON.stringify(wishlist));
    
    displayWishlist();
    updateWishlistBadge();
}

document.addEventListener('DOMContentLoaded', function() {
    updateWishlistBadge();
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (product) {
        const elements = {
            'detail-title': product.name,
            'detail-price': product.price,
            'detail-img': 'src',
            'detail-brand': product.brand,
            'detail-weight': product.weight,
            'detail-year': product.year
        };
        
        for (let id in elements) {
            const el = document.getElementById(id);
            if (el) {
                if (elements[id] === 'src') el.src = product.image;
                else el.innerText = elements[id];
            }
        }
    }
    
    const heartBtn = document.querySelector('.icon-action-btn .fa-heart')?.parentElement;
    if (heartBtn) {
        heartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            addToWishlist();
        });
    }
    
    window.onclick = function(event) {
        const modal = document.getElementById('wishlist-modal');
        if (event.target == modal) {
            closeWishlistModal();
        }
    }
    
    displayWishlist();
});

/*cart اضافة*/

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('userCart')) || [];
    const badge = document.querySelector('.icon-wrapper .fa-shopping-cart + .badge');
    
    if (badge) {
        badge.innerText = cart.length;
        badge.style.display = 'flex';
    }
}

function displayCart() {
    const cartBody = document.getElementById('cart-items-body');
    const mainContent = document.getElementById('cart-main-content');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const cart = JSON.parse(localStorage.getItem('userCart')) || [];

    if (!cartBody) return;

    if (cart.length === 0) {
        mainContent.style.display = 'none';
        emptyMsg.style.display = 'block';
        return;
    }

    mainContent.style.display = 'block';
    emptyMsg.style.display = 'none';
    cartBody.innerHTML = '';
    
    let totalSum = 0;

    cart.forEach((item, index) => {
        const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        const subtotal = priceNum * item.qty;
        totalSum += subtotal;

        cartBody.innerHTML += `
            <tr class="cart-row">
                <td class="col-remove">
                    <button class="remove-item" onclick="removeFromCart(${index})">×</button>
                </td>
                <td class="col-img">
                    <img src="${item.image}" alt="${item.name}">
                </td>
                <td class="col-info">
                    <span class="p-name">${item.name}</span>
                    <span class="p-sku">SKU: SKU_${200 + index}</span>
                </td>
                <td class="col-price">${item.price}</td>
                <td class="col-qty">
                    <div class="qty-control">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="col-subtotal">$${subtotal.toLocaleString()}</td>
            </tr>
        `;
    });

    document.getElementById('cart-subtotal').innerText = `$${totalSum.toLocaleString()}`;
    document.getElementById('cart-final-total').innerText = `$${totalSum.toLocaleString()}`;
}

window.changeQty = function(index, delta) {
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];
    cart[index].qty += delta;
    if (cart[index].qty < 1) cart[index].qty = 1;
    localStorage.setItem('userCart', JSON.stringify(cart));
    displayCart();
};

window.removeFromCart = function(index) {
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('userCart', JSON.stringify(cart));
    displayCart();
    updateCartBadge();
};

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    displayCart();
});
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];
    
    const existing = cart.find(p => p.name === product.name);
    
    if (existing) {
        existing.qty += 1;
    } else {
        product.qty = 1;
        cart.push(product);
    }
    
    localStorage.setItem('userCart', JSON.stringify(cart));
    refreshCartUI();
updateCartBadge();
}
const btnCart = document.querySelector('.add-to-cart-vertical');
if (btnCart) {
    btnCart.addEventListener('click', () => {
        const product = JSON.parse(localStorage.getItem('selectedProduct'));
        if (!product) return;
        
        addToCart(product);
        updateCartBadge();
        refreshCartUI();
        
        const dropdown = document.getElementById('cartDropdown');
        if (!dropdown) return;
        
        dropdown.classList.add('active');
        
        clearTimeout(dropdown.hideTimer);
        dropdown.hideTimer = setTimeout(() => {
            dropdown.classList.remove('active');
        }, 3000);
        
    });
}


const cartContent = document.getElementById('cartContent');
const cartFooter = document.getElementById('cartFooter');
const totalPriceEl = document.getElementById('totalPrice');
function refreshCartUI() {
    const cart = JSON.parse(localStorage.getItem('userCart')) || [];
    
    const cartContent = document.getElementById('cartContent');
    const cartFooter = document.getElementById('cartFooter');
    
    if (!cartContent || !cartFooter) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <i class="fas fa-shopping-cart empty-icon"></i>
            <p>Your cart is empty — start shopping</p>
        `;
        cartFooter.style.display = 'none';
        return;
    }
    
    const item = cart[cart.length - 1];
    
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    const total = price * item.qty;
    
    cartContent.innerHTML = `
        <div class="cart-item-card">
            <div class="cart-item-main">
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">
                        ${item.qty} x $${price.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    cartFooter.innerHTML = `
        <div class="subtotal-row">
            <span class="subtotal-label">
                <i class="fas fa-receipt"></i> Cart subtotal
            </span>
            <span class="subtotal-price">$${total.toLocaleString()}</span>
        </div>
        <button class="checkout-btn">Process to Checkout</button>
    `;
    
    cartFooter.style.display = 'block';
}
refreshCartUI()

function openWishlist(){
    window.location.href="wishlist.html";
}
function openCart(){
    window.location.href="cart.html";
}

const msgBtn = document.getElementById('msgBtn');
const msgIcon = document.getElementById('msgIcon');
const contactForm = document.getElementById('contactForm');

msgBtn.addEventListener('click', () => {
    contactForm.classList.toggle('active');
    if (contactForm.classList.contains('active')) {
        msgIcon.classList.replace('fa-envelope', 'fa-times');
        msgBtn.classList.add('active');
    } else {
        msgIcon.classList.replace('fa-times', 'fa-envelope');
        msgBtn.classList.remove('active');
    }
});

