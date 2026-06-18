const terminal = document.getElementById("terminal");

const messages = [
    "SYSTEM ONLINE...",
    "LOADING PROJECTS...",
    "MARKETING MODULE READY...",
    "WELCOME, ANDY OSORIO",
    "CREATE. COMMUNICATE. IMPACT."
];

let current = 0;

setInterval(() => {
    terminal.textContent = messages[current];

    current++;

    if (current >= messages.length) {
        current = 0;
    }
}, 2500);