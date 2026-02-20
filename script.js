let integrity = 100;

const startBtn = document.getElementById("startBtn");
const systemPanel = document.getElementById("systemPanel");
const alertBox = document.getElementById("alertBox");
const integrityBar = document.getElementById("integrityBar");
const integrityValue = document.getElementById("integrityValue");
const statusText = document.getElementById("statusText");
const consoleLog = document.getElementById("consoleLog");

startBtn.addEventListener("click", () => {
    systemPanel.classList.remove("hidden");
    alertBox.classList.remove("hidden");
    startBtn.style.display = "none";
    log("Sistema iniciado...");
});

document.getElementById("openFile").addEventListener("click", () => {
    integrity -= 40;
    statusText.textContent = "Estado: Sistema Comprometido";
    log("Archivo ejecutado. Troyano detectado.");
    updateIntegrity();
});

document.getElementById("isolateFile").addEventListener("click", () => {
    log("Archivo aislado correctamente. Amenaza contenida.");
    statusText.textContent = "Estado: Seguro";
    alertBox.classList.add("hidden");
});

document.getElementById("deleteFile").addEventListener("click", () => {
    integrity -= 10;
    log("Archivo eliminado, pero sin análisis previo.");
    updateIntegrity();
});

function updateIntegrity() {
    if (integrity < 0) integrity = 0;

    integrityBar.style.width = integrity + "%";
    integrityValue.textContent = "Integridad del Sistema: " + integrity + "%";

    if (integrity <= 50) {
        integrityBar.style.background = "#facc15";
    }

    if (integrity <= 20) {
        integrityBar.style.background = "#dc2626";
    }

    if (integrity === 0) {
        statusText.textContent = "Estado: Sistema Colapsado";
        log("El sistema ha sido comprometido completamente.");
    }
}

function log(message) {
    const p = document.createElement("p");
    p.textContent = "> " + message;
    consoleLog.appendChild(p);
}