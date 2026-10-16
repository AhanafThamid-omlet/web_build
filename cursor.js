// create cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// move cursor
document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

});

// grow on hover
document.querySelectorAll('a, button, .about-card, .work-card, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
    });
});

document.querySelectorAll('.about-card,.work-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // inner spotlight
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`;
        
        // outer glow via box-shadow
        card.style.boxShadow = `
            0 0 30px 5px rgba(255, 255, 255, 0.08),
            0 0 60px 10px rgba(255, 255, 255, 0.04)
        `;
    });

    card.addEventListener('mouseleave', function() {
        card.style.background = 'transparent';
        card.style.boxShadow = 'none';
    });
});