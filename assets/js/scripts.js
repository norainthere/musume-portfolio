function hoverEffect() {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // semi-opaque sheer on hover
}

function removeHoverEffect() {
    document.body.style.backgroundColor = 'transparent'; // return to original on mouse out
}

document.addEventListener('DOMContentLoaded', function () {
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Optionally: Handle dropdown with hover, considering non-touch devices
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});
