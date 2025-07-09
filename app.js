// Product data
const products = [
  {
    category: "IPM",
    name: "SAM4-30A Automotive IPM",
    description: "Compact, high-voltage 3-phase motor driver for automotive applications",
    voltage: "700V",
    current: "30A",
    applications: "Electric vehicle auxiliary systems, automotive compressors",
    link: "https://www.sanken-ele.co.jp/en/"
  },
  {
    category: "IPM", 
    name: "SIM2-201 High-Voltage IPM",
    description: "Compact high-voltage 3-phase motor driver with enhanced thermal performance",
    voltage: "600V",
    current: "20A", 
    applications: "Air conditioner compressors, refrigerator motors, industrial drives",
    link: "https://www.sanken-ele.co.jp/en/"
  },
  {
    category: "IGBT",
    name: "DGU5020GR Automotive IGBT", 
    description: "IGBT with built-in Zener diodes for automotive ignition applications",
    voltage: "500V",
    current: "20A",
    applications: "Automotive ignition coils, engine control systems",
    link: "https://www.sanken-ele.co.jp/en/"
  },
  {
    category: "IGBT",
    name: "FGM633 Trench IGBT",
    description: "High-speed switching IGBT with reduced gate capacitance", 
    voltage: "600V",
    current: "18A",
    applications: "Air conditioners, power factor correction circuits",
    link: "https://www.sanken-ele.co.jp/en/"
  },
  {
    category: "Motor Driver",
    name: "SPF6001 BLDC Motor Driver",
    description: "External power MOSFET motor driver for automotive applications",
    applications: "Automotive motors, industrial drives",
    link: "https://www.sanken-ele.co.jp/en/"
  },
  {
    category: "Power Management",
    name: "SSC4S911 Power Supply Controller",
    description: "PFC and LLC controller IC for high-efficiency power supplies",
    applications: "Server power supplies, LED lighting, industrial equipment",
    link: "https://www.sanken-ele.co.jp/en/"
  }
];

// DOM elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');
const productsGrid = document.getElementById('productsGrid');
const contactForm = document.getElementById('contactForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  populateProducts();
  initializeContactForm();
  initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
          if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) span.style.opacity = '0';
          if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          span.style.transform = 'none';
          span.style.opacity = '1';
        }
      });
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const offsetTop = targetElement.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = 'none';
          span.style.opacity = '1';
        });
      }
    });
  });
}

// Populate products grid
function populateProducts() {
  if (!productsGrid) return;

  productsGrid.innerHTML = products.map(product => {
    const specsHtml = (product.voltage && product.current) ? 
      `<div class="product-card__specs">
        <div class="spec-item">${product.voltage}</div>
        <div class="spec-item">${product.current}</div>
      </div>` : '';

    return `
      <div class="product-card">
        <div class="product-card__category">${product.category}</div>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__description">${product.description}</p>
        ${specsHtml}
        <p class="product-card__applications"><strong>Applications:</strong> ${product.applications}</p>
        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-card__link">View Details →</a>
      </div>
    `;
  }).join('');
}

// Contact form functionality
function initializeContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    // Validate form
    if (!validateForm(data)) {
      return;
    }
    
    // Show success message
    showMessage('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
  });
}

// Form validation
function validateForm(data) {
  const errors = [];
  
  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.subject.trim()) {
    errors.push('Subject is required');
  }
  
  if (!data.message.trim()) {
    errors.push('Message is required');
  }
  
  if (errors.length > 0) {
    showMessage(errors.join('<br>'), 'error');
    return false;
  }
  
  return true;
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show message to user
function showMessage(message, type) {
  // Remove existing messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create new message element
  const messageElement = document.createElement('div');
  messageElement.className = `form-message status status--${type}`;
  messageElement.innerHTML = message;
  
  // Insert message before form
  contactForm.parentNode.insertBefore(messageElement, contactForm);
  
  // Remove message after 5 seconds
  setTimeout(() => {
    if (messageElement && messageElement.parentNode) {
      messageElement.remove();
    }
  }, 5000);
}

// Scroll effects
function initializeScrollEffects() {
  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.product-card, .application-card, .director-card, .stat-card');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// Add active nav link highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Product filtering functionality
function filterProducts(category) {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const cardCategory = card.querySelector('.product-card__category').textContent;
    
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add product filter buttons
function addProductFilters() {
  const productsSection = document.querySelector('.products');
  if (!productsSection) return;
  
  const sectionHeader = productsSection.querySelector('.section__header');
  if (!sectionHeader) return;
  
  const categories = ['all', ...new Set(products.map(p => p.category))];
  
  const filterContainer = document.createElement('div');
  filterContainer.className = 'product-filters';
  filterContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: var(--space-8);
    margin-bottom: var(--space-24);
    flex-wrap: wrap;
  `;
  
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'btn btn--outline btn--sm';
    button.textContent = category === 'all' ? 'All Products' : category;
    button.onclick = () => {
      // Remove active class from all buttons
      filterContainer.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Filter products
      filterProducts(category);
    };
    
    if (category === 'all') {
      button.classList.add('active');
    }
    
    filterContainer.appendChild(button);
  });
  
  sectionHeader.appendChild(filterContainer);
}

// Initialize product filters
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(addProductFilters, 100);
});

// Utility function to debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(updateActiveNavLink, 100);
window.addEventListener('scroll', debouncedScrollHandler);

// Add CSS for active nav link and other enhancements
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: var(--color-primary);
    position: relative;
  }
  
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--color-primary);
  }
  
  .form-message {
    margin-bottom: var(--space-16);
  }
  
  .product-filters .btn.active {
    background-color: var(--color-primary);
    color: var(--color-btn-primary-text);
    border-color: var(--color-primary);
  }
  
  .product-filters .btn:hover {
    background-color: var(--color-primary-hover);
    color: var(--color-btn-primary-text);
    border-color: var(--color-primary-hover);
  }
`;
document.head.appendChild(style);