document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworks');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const firework = new Firework(canvas);
    firework.start();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});