var playVideo = document.getElementById("playVideoFrench");
var video = document.getElementById("myVideoFrench");
var loadingSpinner = document.getElementById("loadingSpinner");

playVideo.addEventListener("click", function() {
    playVideo.style.display = "none";
    video.style.display = "block";
    video.play();
});

video.addEventListener("ended", function() {
    loadingSpinner.style.display = "block";
    setTimeout(function() {
        window.location.href = "accueil.html";
    }, 2000); // 2 secondes de délai avant la redirection
});