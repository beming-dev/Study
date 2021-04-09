let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

let pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

let width = document.body.clientWidth;
let height = document.body.clientHeight;

window.addEventListener('resize', resize);

let mouseX;
let mouseY;
window.addEventListener('mousemove', onMove);

resize();

window.requestAnimationFrame(animate);

function resize(){
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    ctx.scale(pixelRatio, pixelRatio);

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
}

function animate(){
    window.requestAnimationFrame(animate);

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#D21F3C';
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI*2);
    ctx.fill();
}

function onMove(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
}