document.addEventListener('DOMContentLoaded', function() {
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modals = document.querySelectorAll('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButtons = document.querySelectorAll('.modal-close');

modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
    event.preventDefault();
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    openModal(modal);
    });
});

modalOverlay.addEventListener('click', function() {
    modals.forEach(function(modal) {
    closeModal(modal);
    });
});

modalCloseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    const modal = this.closest('.modal');
    closeModal(modal);
    });
});

function openModal(modal) {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}
});
