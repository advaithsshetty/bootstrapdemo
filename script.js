document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            const target = this.getAttribute('data-accordion-target');
            const accordionItem = document.querySelector(target);
            const accordionCollapse = new bootstrap.Collapse(accordionItem);

            accordionItem.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
