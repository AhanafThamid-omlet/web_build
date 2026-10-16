
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;

            // overlay fade
            const fadeStart = vh * 0.5;
            const fadeEnd = vh;
            let overlayOpacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
            overlayOpacity = Math.min(1, Math.max(0, overlayOpacity));
            document.getElementById('overlay').style.opacity = overlayOpacity;

            // navbar background on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    navbar.classList.add('faded');
                }
                else {
                    navbar.classList.remove('faded');
                }
            });


            const progress = Math.min(1, Math.max(0, scrollY / (window.innerHeight * 0.3)));
            const name = document.querySelector('.name');
            const menua = document.querySelectorAll('.menu a');

            if (progress >= 1) {
                name.style.color = 'white';
                menua.forEach(a => a.style.color = 'white');
            } 
            else {
                const value = Math.round(255 * progress);
                name.style.color = `rgb(${value}, ${value}, ${value})`;
                menua.forEach(a => a.style.color = `rgb(${value}, ${value}, ${value})`);
            }
        });

        // glow effect to cards on hover
        /*document.querySelectorAll('.about-card').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;  // cursor position inside card
                const y = e.clientY - rect.top;

                card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`;
            });

            card.addEventListener('mouseleave', function() {
                card.style.background = 'transparent';  // reset on leave
            });
        });*/
        


        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function (){
                menuLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });


        document.getElementById('hamburger').addEventListener('click', function () {
            document.getElementById('menu').classList.toggle('open');
        });

