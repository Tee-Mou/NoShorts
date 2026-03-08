document.addEventListener(`yt-navigate-finish`, function() {
    if (location.href.includes(`/shorts/`)) {
        window.location.replace(`https://www.youtube.com/`)
    }
});