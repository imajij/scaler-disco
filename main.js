// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    // Get all images and modal elements
    const images = document.querySelectorAll('.photo-card img');
    const modalImg = modal.querySelector('.modal-image');
    const closeButton = modal.querySelector('.close-button');

    // Add click handler to all images
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Close modal when clicking close button
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const images = document.querySelectorAll('.photo-card img');
    const modalImg = modal.querySelector('.modal-image');
    const closeButton = modal.querySelector('.close-button');

    // Function to toggle navbar
    const toggleNavbar = (display) => {
        navbar.style.display = display;
    };

    // Open modal and hide navbar
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            toggleNavbar('none');
        });
    });

    // Close modal and show navbar
    const closeModal = () => {
        modal.style.display = "none";
        toggleNavbar('flex');
    };

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const images = document.querySelectorAll('.photo-card img');
    const modalImg = modal.querySelector('.modal-image');
    const closeButton = modal.querySelector('.close-button');

    const toggleNavbar = (display) => {
        navbar.style.display = display;
    };

    const closeModal = () => {
        modal.style.display = "none";
        toggleNavbar('flex');
    };

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            toggleNavbar('none');
        });
    });

    // Add click handler to modal image
    modalImg.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling to modal
        closeModal();
    });

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});