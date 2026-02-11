var player;  // YouTube Player-Objekt

// Die YouTube-API laden
function onYouTubeIframeAPIReady() {
    // Wenn der Player bereit ist, können wir ihn steuern
}

// Funktion zum Einbetten des Videos
function embedVideo() {
    // Holen der eingegebenen URL
    var url = document.getElementById('youtube-url').value;

    // RegEx, um die Video-ID aus der URL zu extrahieren
    var regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    var match = url.match(regex);

    if (match) {
        var videoId = match[1];  // Video-ID extrahieren

        // Embed-Code für den YouTube-Player
        var embedCode = `<div id="player"></div>`;

        // Video in den Container einfügen
        document.getElementById('video-container').innerHTML = embedCode;

        // Den YouTube-Player erstellen
        player = new YT.Player('player', {
            height: '315',
            width: '560',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady
            }
        });

        // Steuerelemente anzeigen
        document.getElementById('controls').style.display = 'block';
    } else {
        alert("Bitte gib eine gültige YouTube-URL ein.");
    }
}

// Wenn der Player bereit ist, können wir ihn steuern
function onPlayerReady(event) {
    // Eventuell könntest du hier eine automatische Funktion zum Starten hinzufügen
    playVideo();
}

// Video abspielen
function playVideo() {
    if (player) {
        player.playVideo();
    }
}

// Video pausieren
function pauseVideo() {
    if (player) {
        player.pauseVideo();
    }
}

// 10 Sekunden vor springen
function seekForward() {
    if (player) {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime + 10, true);
    }
}

// 10 Sekunden zurück springen
function seekBackward() {
    if (player) {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 10, true);
    }
}

// API-Skript laden
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);