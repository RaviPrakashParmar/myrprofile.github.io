// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // References to DOM elements
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksA = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const form = document.getElementById('contactForm');
    const typedTextSpan = document.querySelector('.typed-text');
    
    // Typing animation text options
    const textArray = ["Software Developer", "Web Developer", "Content Writer", "Team Leader"];
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let erasingDelay = 100;
    let newTextDelay = 2000; // Delay between text changes
    
    // Initialize typing animation
    function type() {
        const currentText = textArray[textArrayIndex];
        
        if (isDeleting) {
            // Remove a character
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            // Add a character
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }
        
        // If all characters are typed
        if (!isDeleting && charIndex === currentText.length) {
            // Start deleting after delay
            isDeleting = true;
            typingDelay = newTextDelay;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text after deletion
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
        }
        
        // Continue typing
        setTimeout(type, typingDelay);
    }
    
    // Start typing animation
    setTimeout(type, 1000);
    
    // Navbar color change on scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
    
    // Mobile menu toggle
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    }
    
    // Close mobile menu when an item is clicked
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // Highlight active navigation link based on scroll position
    function highlightActiveLink() {
        let scrollPosition = window.scrollY + 100;
        
        // Check each section's position and update active link accordingly
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinksA.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding link
                const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    // Filter projects
    function filterProjects() {
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all filter buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show/hide projects based on filter
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // You would normally send this data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Display success message (in a real app, you would check for successful submission)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        form.reset();
    }
    
    // Smooth scrolling for navigation links
    function smoothScroll(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            closeMobileMenu();
        }
    }
    
    // Animation on scroll (simple reveal animations)
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.skill-item, .timeline-item, .project-card, .achievement-card');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize animations
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.skill-item, .timeline-item, .project-card, .achievement-card');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Trigger initial animation check
        animateOnScroll();
    }
    
    // Event listeners
    window.addEventListener('scroll', updateNavbar);
    window.addEventListener('scroll', highlightActiveLink);
    window.addEventListener('scroll', animateOnScroll);
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Add click event to navigation links
    navLinksA.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Add click event to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterProjects);
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Initialize
    updateNavbar();
    highlightActiveLink();
    initAnimations();
    
    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top a');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 