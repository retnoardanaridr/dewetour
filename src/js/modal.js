function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block"
}

function closeModal(modalId) {
    const btn = document.getElementById(modalId);
    btn.style.display = "none"
}

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    })
})