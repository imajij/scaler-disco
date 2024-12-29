document.addEventListener('DOMContentLoaded', function() {
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

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

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

    const toggleNavbar = (display) => {
        navbar.style.display = display;
    };

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            toggleNavbar('none');
        });
    });

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