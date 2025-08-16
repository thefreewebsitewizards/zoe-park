// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
            }
        }
    });
});

// Load Blog Posts Dynamically
const blogPosts = [
    {
        title: "Twin Parenting Coaching",
        excerpt: "Twin parents, I've got exciting news! 🎉 I'm now offering family coaching calls for expectant and new twin parents—fully online via Zoom!",
        date: "December 15, 2024",
        image: "Assets/b1.JPG",
        link: "https://www.instagram.com/p/DHS874cIyD-/"
    },
    {
        title: "Weaning My Top tips for a Stress-free & Positive Start",
        excerpt: "Weaning is messy, exciting, and full of fun🍽️",
        date: "March 10, 2024",
        image: "Assets/b2.JPG",
        link: "https://www.instagram.com/p/DH8QNTbo1-N/?img_index=1"
    },
    {
        title: "Twin Products",
        excerpt: "Expecting twins or searching for the perfect twin gift?",
        date: "December 4, 2024",
        image: "Assets/b3.JPG",
        link: "https://www.instagram.com/p/DDJdoAaIuXd/"
    }
];

const blogPostsContainer = document.getElementById('blog-posts');

// Generate blog post HTML with modern styling
const blogPostsHTML = blogPosts.map(post => `
    <article class="blog-card">
        <div class="blog-card-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-card-content">
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <div class="blog-card-meta">
                <span class="blog-card-date">${post.date}</span>
                <a href="${post.link || '#'}" class="blog-card-read-more" ${post.link ? 'target="_blank" rel="noopener noreferrer"' : ''}>Read More →</a>
            </div>
        </div>
    </article>
`).join('');

blogPostsContainer.innerHTML = blogPostsHTML;

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Create mailto link
    const mailtoSubject = subject || 'Enquiry from Website';
    const mailtoBody = `Hi Zoe,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\n${name}`;
    const mailtoLink = `mailto:zoe@itsatwinthing.co.uk?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    alert('Your email client should now open with the message pre-filled. Please send the email to complete your enquiry.');
    contactForm.reset();
});

// Modal Functions
function openModal() {
    const modal = document.getElementById('comingSoonModal');
    const modalContent = document.getElementById('modalContent');
    
    modal.classList.remove('hidden');
    
    // Trigger animation after a small delay
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('comingSoonModal');
    const modalContent = document.getElementById('modalContent');
    
    // Animate out
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    // Hide modal after animation
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Close modal when clicking outside
document.getElementById('comingSoonModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('comingSoonModal');
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});