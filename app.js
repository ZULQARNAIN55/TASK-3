document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    // 2. Pricing Billing Toggle
    const monthlyBtn = document.getElementById('monthly-btn');
    const annualBtn = document.getElementById('annual-btn');
    const prices = document.querySelectorAll('.price');

    if (monthlyBtn && annualBtn) {
        monthlyBtn.addEventListener('click', () => {
            monthlyBtn.classList.add('active');
            annualBtn.classList.remove('active');
            prices.forEach(price => {
                price.textContent = price.getAttribute('data-monthly');
            });
        });

        annualBtn.addEventListener('click', () => {
            annualBtn.classList.add('active');
            monthlyBtn.classList.remove('active');
            prices.forEach(price => {
                price.textContent = price.getAttribute('data-annual');
            });
        });
    }

    // 3. Accessible FAQ Accordion Toggle
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const chevron = header.querySelector('.chevron');
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Toggle state
            header.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                chevron.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = '0px';
                chevron.style.transform = 'rotate(0deg)';
            }
        });
    });
});
