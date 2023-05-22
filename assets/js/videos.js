var playButton1 = document.getElementById("playButton1");
var videoContainer1 = document.getElementById("videoContainer1");
var video1 = document.getElementById("myVideo1");

var playButton2 = document.getElementById("playButton2");
var videoContainer2 = document.getElementById("videoContainer2");
var video2 = document.getElementById("myVideo2");

var loadingSpinner = document.getElementById("loadingSpinner");

playButton1.addEventListener("click", function() {
    playButton1.style.display = "none";
    videoContainer1.style.display = "block";
    video1.play();
});

video1.addEventListener("ended", function() {
    loadingSpinner.style.display = "block";
    setTimeout(function() {
        window.location.href = "accueil.html";
    }, 2000); // 2 secondes de délai avant la redirection
});

playButton2.addEventListener("click", function() {
    playButton2.style.display = "none";
    videoContainer2.style.display = "block";
    video2.play();
});

video2.addEventListener("ended", function() {
    loadingSpinner.style.display = "block";
    setTimeout(function() {
        window.location.href = "accueil.html";
    }, 2000); // 2 secondes de délai avant la redirection
});