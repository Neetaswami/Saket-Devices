// Application data
const appData = {
    "companyInfo": {
        "name": "Saket Devices Pvt Ltd",
        "tagline": "Exclusive Promoter & Support Partner for Sanken Electric Power Semiconductors in India",
        "address": "G-10 Shankar Nagar, Near Vanaz, Paud Road, Pune 411038, Maharashtra, India",
        "phone": "+91-20-2955-1234",
        "email": "info@saketdevices.com",
        "linkedin": "https://www.linkedin.com/company/saket-devices-pvt-ltd/"
    },
    "directors": [
        {
            "name": "Mr. Satish Swami",
            "title": "Managing Director",
            "email": "satish.swami@saketdevices.com",
            "linkedin": "https://www.linkedin.com/in/satish-swami-95464322/"
        },
        {
            "name": "Mrs. Neeta Swami",
            "title": "Director",
            "email": "neeta.swami@saketdevices.com",
            "linkedin": "https://www.linkedin.com/in/neeta-swami-2076a9306/"
        }
    ],
    "sankenAchievements": {
        "employees": 3312,
        "globalRanking": "Top 10 in Intelligent Power Modules (Precedence Research 2024)",
        "overseasSales": "~70% revenue from overseas markets"
    },
    "revenueData": [
        {"year": 2020, "revenue": 160.22},
        {"year": 2021, "revenue": 156.8},
        {"year": 2022, "revenue": 175.66},
        {"year": 2023, "revenue": 225.39},
        {"year": 2024, "revenue": 235.22}
    ],
    "productList": [
        {
            "id": 1,
            "category": "Motor Drivers",
            "name": "SIM2-201 High-Voltage 3-Phase Motor Driver",
            "image": "https://pplx-res.cloudinary.com/image/upload/v1752044630/pplx_project_search_images/aef8dbb1b6f153c73a1d0b0b1b0423374655a721.jpg",
            "description": "Compact DIP40 700 V / 20 A motor driver integrating transistors, pre-driver and bootstrap circuits.",
            "application": "Compressor motors in refrigerators and air conditioners",
            "link": "https://www.semicon.sanken-ele.co.jp/en/newproduct/"
        },
        {
            "id": 2,
            "category": "Motor Drivers",
            "name": "SLA7073MPRT Stepper Motor Driver",
            "image": "https://pplx-res.cloudinary.com/image/upload/v1752044631/pplx_project_search_images/b42b6fe90761b5a687e39bcc657169a0f21b580c.jpg",
            "description": "Low-voltage unipolar 2-phase stepper motor driver supporting up to 3 A phase current.",
            "application": "Office automation equipment, textile machines",
            "link": "https://www.semicon.sanken-ele.co.jp/ctrl/en/product/category/MotorDriver/"
        },
        {
            "id": 3,
            "category": "Power Management ICs",
            "name": "STR6S161HXD PWM Off-Line Converter",
            "image": "https://pplx-res.cloudinary.com/image/upload/v1749285233/pplx_project_search_images/c265748f8835f067662cf48cf4f56474dbfb0043.jpg",
            "description": "100 kHz PWM current-mode controller with integrated 700 V MOSFET for SMPS up to 22 W.",
            "application": "Phone chargers, appliance power supplies",
            "link": "https://www.semicon.sanken-ele.co.jp/ctrl/en/product/category/PowerManagement"
        },
        {
            "id": 4,
            "category": "Power Management ICs",
            "name": "NR110K 24 V / 4 A Buck Converter",
            "image": "https://electronicsmaker.com/wp-content/uploads/2014/03/Power-Management-IC.jpg",
            "description": "Asynchronous buck converter delivering high efficiency under light load conditions.",
            "application": "Industrial and consumer DC-DC regulators",
            "link": "https://www.semicon.sanken-ele.co.jp/ctrl/en/product/category/PowerManagement"
        },
        {
            "id": 5,
            "category": "Discretes",
            "name": "DGU4020GR Automotive IGBT",
            "image": "https://pplx-res.cloudinary.com/image/upload/v1752044630/pplx_project_search_images/2d51cdaf69a9c1b874378c56e8fe6597910d53a3.jpg",
            "description": "400 V / 20 A ignition-coil driver IGBT with built-in Zener diodes and gate resistors.",
            "application": "Automotive ignition coil drivers",
            "link": "https://www.semicon.sanken-ele.co.jp/ctrl/en/product/category/IGBT/detail/?product=DGU4020GR"
        },
        {
            "id": 6,
            "category": "Discretes",
            "name": "SG-K17VLEFGR Alternator Diode",
            "image": "https://americas.fujielectric.com/wp-content/uploads/2024/01/Untitled-1.jpg",
            "description": "50 A automotive alternator diode featuring 40 % lower forward voltage than conventional devices.",
            "application": "Automotive alternator rectifiers",
            "link": "https://www.semicon.sanken-ele.co.jp/en/newproduct/"
        },
        {
            "id": 7,
            "category": "IPMs",
            "name": "SGM1246MF 600 V/15 A Intelligent Power Module",
            "image": "https://assets-us-01.kc-usercontent.com/9356d81c-702c-0042-524f-7fe8fac0d95f/97d3297d-f7d0-40c1-9439-d6562b01e4ca/SPM31.jpg",
            "description": "Integrated 3-phase inverter IPM with IGBTs, FRDs and comprehensive protection features.",
            "application": "HVAC compressors, industrial drives",
            "link": "https://www.hnhcart.com/products/sgm1246mf-ipm-semi"
        },
        {
            "id": 8,
            "category": "LEDs",
            "name": "SEP1WC1L19DTA 3528 Flat LED",
            "image": "https://www.digikey.com/en/articles/~/media/Images/Article%20Library/TechZone%20Articles/2012/September/LEDs%20Lend%20Ambience%20to%20Automotive%20Interior%20Lighting/article-2012september-leds-lend-ambience-to-fig1.jpg",
            "description": "Industry-leading brightness white LED for in-vehicle displays in 3528 package with ESD protection.",
            "application": "Automotive instrument panels and interior lighting",
            "link": "https://www.linkedin.com/posts/sanken-electric-co-ltd_sankenelectric-activity-7331204001255886848-3Yw9"
        }
    ],
    "applicationList": ["Automotive", "Consumer Electronics", "White Goods", "Industrial Equipment", "Green Energy"]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with error handling
    try {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    } catch (error) {
        console.warn('AOS initialization failed:', error);
    }

    // Load all content
    loadContactInfo();
    loadDirectors();
    loadProducts();
    loadApplications();
    createRevenueChart();
    setupContactForm();
    setupSmoothScrolling();
    setupBackToTop();
    
    // Setup product filtering
    setupProductFiltering();
});

// Load contact information
function loadContactInfo() {
    const { companyInfo } = appData;
    
    const addressElement = document.getElementById('companyAddress');
    const phoneElement = document.getElementById('companyPhone');
    const emailElement = document.getElementById('companyEmail');
    const linkedInElement = document.getElementById('companyLinkedIn');
    const footerLinkedIn = document.getElementById('footerLinkedIn');
    
    if (addressElement) addressElement.textContent = companyInfo.address;
    if (phoneElement) phoneElement.textContent = companyInfo.phone;
    
    if (emailElement) {
        emailElement.href = `mailto:${companyInfo.email}`;
        emailElement.textContent = companyInfo.email;
    }
    
    if (linkedInElement) linkedInElement.href = companyInfo.linkedin;
    if (footerLinkedIn) footerLinkedIn.href = companyInfo.linkedin;
}

// Load directors
function loadDirectors() {
    const { directors } = appData;
    const directorsGrid = document.getElementById('directorsGrid');
    
    if (!directorsGrid) return;
    
    directors.forEach((director, index) => {
        const directorCard = document.createElement('div');
        directorCard.className = 'col-lg-6 col-md-8 mb-4';
        directorCard.setAttribute('data-aos', 'fade-up');
        directorCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        directorCard.innerHTML = `
            <div class="card director-card">
                <div class="card-body">
                    <img src="https://source.unsplash.com/200x200/?portrait,professional,${index + 1}" 
                         alt="${director.name}" class="director-photo">
                    <h4 class="director-name">${director.name}</h4>
                    <p class="director-title">${director.title}</p>
                    <div class="director-links">
                        <a href="mailto:${director.email}" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="${director.linkedin}" target="_blank" title="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        directorsGrid.appendChild(directorCard);
    });
}

// Load products
function loadProducts() {
    const { productList } = appData;
    const productsGrid = document.getElementById('productsGrid');
    const categoryFilters = document.getElementById('categoryFilters');
    
    if (!productsGrid || !categoryFilters) return;
    
    // Create category filters
    const categories = [...new Set(productList.map(product => product.category))];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-primary';
        button.setAttribute('data-category', category);
        button.textContent = category;
        categoryFilters.appendChild(button);
    });
    
    // Load products
    productList.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'col-lg-4 col-md-6 mb-4 product-card visible';
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x200?text=Product+Image'">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text application-text">
                        <strong>Application:</strong> ${product.application}
                    </p>
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                        Read More <i class="fas fa-external-link-alt ms-1"></i>
                    </a>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Load applications
function loadApplications() {
    const { applicationList } = appData;
    const applicationsGrid = document.getElementById('applicationsGrid');
    
    if (!applicationsGrid) return;
    
    const applicationDescriptions = {
        "Automotive": "Advanced power semiconductors for electric vehicles, ignition systems, and automotive electronics",
        "Consumer Electronics": "Efficient power management solutions for smartphones, laptops, and home appliances",
        "White Goods": "Motor drivers and power modules for refrigerators, washing machines, and air conditioners",
        "Industrial Equipment": "Robust semiconductor solutions for industrial automation and control systems",
        "Green Energy": "Power conversion solutions for solar inverters and renewable energy systems"
    };
    
    const applicationLinks = {
        "Automotive": "https://www.semicon.sanken-ele.co.jp/en/sp/automotive.html",
        "Consumer Electronics": "https://www.semicon.sanken-ele.co.jp/en/",
        "White Goods": "https://www.semicon.sanken-ele.co.jp/en/",
        "Industrial Equipment": "https://www.semicon.sanken-ele.co.jp/en/",
        "Green Energy": "https://www.semicon.sanken-ele.co.jp/en/"
    };
    
    applicationList.forEach((application, index) => {
        const applicationCard = document.createElement('div');
        applicationCard.className = 'col-lg-4 col-md-6 mb-4';
        applicationCard.setAttribute('data-aos', 'fade-up');
        applicationCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        applicationCard.innerHTML = `
            <div class="application-card">
                <h5>${application}</h5>
                <p>${applicationDescriptions[application]}</p>
                <a href="${applicationLinks[application]}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">
                    Learn More <i class="fas fa-external-link-alt ms-1"></i>
                </a>
            </div>
        `;
        
        applicationsGrid.appendChild(applicationCard);
    });
}

// Create revenue chart
function createRevenueChart() {
    const { revenueData } = appData;
    const chartElement = document.getElementById('revenueChart');
    
    if (!chartElement) return;
    
    try {
        const ctx = chartElement.getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: revenueData.map(item => item.year),
                datasets: [{
                    label: 'Revenue (Billions JPY)',
                    data: revenueData.map(item => item.revenue),
                    borderColor: '#21808D',
                    backgroundColor: 'rgba(33, 128, 141, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#21808D',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 140,
                        max: 250,
                        ticks: {
                            callback: function(value) {
                                return value + 'B';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                elements: {
                    point: {
                        hoverRadius: 8
                    }
                }
            }
        });
    } catch (error) {
        console.error('Chart creation failed:', error);
    }
}

// Setup product filtering
function setupProductFiltering() {
    const filterButtons = document.querySelectorAll('#categoryFilters button');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const { companyInfo } = appData;
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const messageInput = document.getElementById('contactMessage');
        
        if (!nameInput || !emailInput || !messageInput) {
            alert('Form elements not found. Please try again.');
            return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        if (name && email && message) {
            const subject = encodeURIComponent(`Website Enquiry from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            
            const mailtoLink = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
            window.open(mailtoLink, '_blank');
            
            // Reset form
            contactForm.reset();
            alert('Thank you for your message! Your email client should open shortly.');
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Setup back to top button
function setupBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Update active navigation link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Handle navbar collapse on mobile
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbar && navbar.classList.contains('show') && 
        !navbar.contains(e.target) && 
        !navbarToggler.contains(e.target)) {
        try {
            const bsCollapse = new bootstrap.Collapse(navbar, {
                toggle: false
            });
            bsCollapse.hide();
        } catch (error) {
            console.warn('Bootstrap collapse failed:', error);
        }
    }
});

// Close navbar when clicking on nav links (mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar && navbar.classList.contains('show')) {
            try {
                const bsCollapse = new bootstrap.Collapse(navbar, {
                    toggle: false
                });
                bsCollapse.hide();
            } catch (error) {
                console.warn('Bootstrap collapse failed:', error);
            }
        }
    });
});

// Error handling for missing elements
function handleMissingElements() {
    const criticalElements = [
        'revenueChart',
        'productsGrid',
        'applicationsGrid',
        'directorsGrid',
        'contactForm'
    ];
    
    criticalElements.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Critical element missing: ${id}`);
        }
    });
}

// Call error handling after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(handleMissingElements, 1000);
});