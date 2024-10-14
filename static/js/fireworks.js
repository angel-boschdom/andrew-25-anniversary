class Firework {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.hue = Math.random() * 360;
    }

    createParticles(x, y) {
        for (let i = 0; i < 50; i++) {
            const particle = {
                x: x,
                y: y,
                vx: Math.random() * 6 - 3,
                vy: Math.random() * 6 - 3,
                size: Math.random() * 2 + 1,
                color: `hsl(${this.hue}, 100%, 50%)`
            };
            this.particles.push(particle);
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.size *= 0.99;

            if (p.size < 0.1) {
                this.particles.splice(i, 1);
                i--;
            }
        }

        if (Math.random() < 0.05) {
            this.createParticles(Math.random() * this.canvas.width, Math.random() * this.canvas.height);
            this.hue = Math.random() * 360;
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    start() {
        this.animate();
    }
}
