/* ===== SINGLE MATRIX RAIN (FULL SCREEN, FIXED) ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters =
"Aק;שйעςר擇טεײַцוρיضאָτפּуאַסυדBפֿθגкהιײ田קοלеזπכصצαװнבσנCδгφثγшη野ξщκDλзζقχфψEωыβ他νвμفаFпغрGо有лعдHяهчIсخмJи的тحьKشL那سMيNבOלPاQت但RنS他مTظUطVذWدXزY就رZو0123456789$@#&*";

const fontSize = 14;
let drops = [];

/* ----- Resize + Init ----- */
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = "100vw";
    canvas.style.height = "100vh";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    initDrops();
}

function initDrops() {
    drops = Array(Math.floor(window.innerWidth / fontSize)).fill(1);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ----- Draw Loop ----- */
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9c";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 90);

/* ----- Kill transitions during resize (your original UX polish) ----- */
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resizing");
    }, 150);
});

