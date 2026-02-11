const videoElement = document.getElementById('qr-video');
const resultElement = document.getElementById('qr-result');
const startButton = document.getElementById('start-scanner');
const stopButton = document.getElementById('stop-scanner');
const searchField = document.getElementById('youtube-url');

let qrScanner;

// Funktion, um den QR-Code Scanner zu starten
function startScanner() {
    // QR-Code Scanner initialisieren
    qrScanner = new QrScanner(videoElement, (result) => {
        // Wenn ein QR-Code erkannt wird, logge die URL in der Konsole
        console.log('Erkannter Link:', result.data);
        resultElement.textContent = 'Erkannter Link: ' + result.data;
        // Suchfeld setzen
        searchField.value = result.data;
    });

    // Video starten
    qrScanner.start();

    // Wechsle die Sichtbarkeit der Buttons
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    videoElement.style.display = 'block';
}

// Scanner stoppen
function stopScanner() {
    if (qrScanner) {
        qrScanner.stop();
    }

    // Wechsle die Sichtbarkeit der Buttons
    startButton.style.display = 'inline-block';
    stopButton.style.display = 'none';
    videoElement.style.display = 'none';
    resultElement.textContent = 'Scanner gestoppt.';
}

// Event-Listener für den Start-Button
startButton.addEventListener('click', startScanner);

// Event-Listener für den Stop-Button
stopButton.addEventListener('click', stopScanner);

function clearSearchfield() {
    searchField.value = '';
}