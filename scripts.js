const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;
    this.size = Math.random() * 2 + 1;
}

Particle.prototype.draw = function() {
    ctx.fillStyle = '#ffffff'; // Цвет частиц
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

Particle.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) {
        this.vx = -this.vx;
    }

    if (this.y < 0 || this.y > canvas.height) {
        this.vy = -this.vy;
    }
};

function createParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
    }

    requestAnimationFrame(animate);
}

createParticles();
animate();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function flipCard() {
    const card = document.querySelector('.card');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
}
