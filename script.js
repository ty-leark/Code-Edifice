/* ===== MATRIX RAIN ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const letters = "Aק;שйעςר擇טεײַцוρיضאָτפּуאַסυדBפֿθגкהιײ田קοלеזπכصצαװнבσנCδгφثγшη野ξщκDλзζقχфψEωыβ他νвμفаFпغрGо有лعдHяهчIсخмJи的тحьKشL那سMيNبOلPاQت但RنS他مTظUطVذWدXزY就رZو0123456789$@#&*";
const fontSize = 14;
let drops = [];

function initDrops() {
    drops = Array(Math.floor(canvas.width / fontSize)).fill(1);
}
initDrops();

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9c";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 90);

/* ===== SECOND MATRIX RAIN ===== */
const canvas2 = document.getElementById("matrix2");
const ctx2 = canvas2.getContext("2d");

function resize2() {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

    const firstCanvas = canvas.getBoundingClientRect();
    canvas2.style.top = `${firstCanvas.bottom}px`;
}

resize2();
window.addEventListener("resize", resize2);

const letters2 = "Aק;שйעςר擇טεײַцוρיضאָτפּуאַסυדBפֿθגкהιײ田קοלеזπכصצαװнבσנCδгφثγшη野ξщκDλзζقχфψEωыβ他νвμفаFпغрGо有лعдHяهчIсخмJи的тحьKشL那سMيNبOلPاQت但RنS他مTظUطVذWدXزY就رZو0123456789$@#&*";
const fontSize2 = 14;
const drops2 = Array(Math.floor(window.innerWidth / fontSize2)).fill(1);

function drawMatrix2() {
    ctx2.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

    ctx2.fillStyle = "#00ff9c";
    ctx2.font = `${fontSize2}px monospace`;

    for (let i = 0; i < drops2.length; i++) {
        const text = letters2[Math.floor(Math.random() * letters2.length)];
        ctx2.fillText(text, i * fontSize2, drops2[i] * fontSize2);

        if (drops2[i] * fontSize2 > canvas2.height && Math.random() > 0.975) {
            drops2[i] = 0;
        }
        drops2[i]++;
    }
}

setInterval(drawMatrix2, 90);

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resizing");
    }, 150);
});

