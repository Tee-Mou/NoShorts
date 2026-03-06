document.addEventListener('yt-navigate-finish', function(event) {
    if (location.href.includes('/shorts/')) {
        window.close()
    }
});