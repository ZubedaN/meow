    function createHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '💌', '💋', '❤️'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 6 + 's';
            heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
            heartsContainer.appendChild(heart);
        }
    }

    // Music Control
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵';
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicToggle.textContent = '🔊';
                isPlaying = true;
            }).catch(() => {
                musicToggle.textContent = '❌';
                console.log('Music could not be played');
            });
        }
    });

      createHearts();