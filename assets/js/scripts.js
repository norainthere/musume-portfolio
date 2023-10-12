function hoverEffect() {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // semi-opaque sheer on hover
}

function removeHoverEffect() {
    document.body.style.backgroundColor = 'transparent'; // return to original on mouse out
}

// Add event listeners to dropdowns to handle hover on touch devices 
document.addEventListener('DOMContentLoaded', function () {
    let dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            let dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });
});
