// RELIABLE FIX for anchor links with fixed header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const headerHeight = header.offsetHeight;
    const offset = headerHeight + 20; // 20px extra breathing room

    // Fix ALL anchor links on the page
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                // Calculate position
                const targetPosition = target.offsetTop - offset;

                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without scrolling
                history.pushState(null, null, href);
            }
        });
    });
});