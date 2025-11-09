<script>
        // Toggle mobile navigation
    (function(){
        const toggle = document.querySelector('.nav-toggle');
            const nav = document.getElementById('navLinks');
            if(!toggle || !nav) return;
            toggle.addEventListener('click', function(){
                const opened = nav.classList.toggle('open');
                this.setAttribute('aria-expanded', opened);
            });
            // Close menu when a link is clicked (mobile)
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.addEventListener('click', () => {
                    nav.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        })();
</script>