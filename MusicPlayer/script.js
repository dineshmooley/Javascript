let root = document.querySelector(".root");

let containerImg = document.createElement("div");
containerImg.classList.add("container-img");

let img = document.createElement("div");
let musicImg = document.createElement("img");
musicImg.src = "musical_graphic.jpg";

containerImg.appendChild(musicImg);

let playlist = [
    { title: "Bug in the JavaScript - Dylan Beattie", src: "Bug in the JavaScript - Dylan Beattie.mp3" },
    { title: "Another Track", src: "another-track.mp3" },
    { title: "Sample Music", src: "sample-music.mp3" }
];

let currentTrackIndex = 0;

let audio = document.createElement("audio");
audio.src = playlist[currentTrackIndex].src;
audio.classList.add("audio-player");

let containerCtrl = document.createElement("div");
containerCtrl.classList.add("container-ctrl");

let buttons = document.createElement("div");
buttons.classList.add('btns');

let resetbtn = document.createElement("button");
resetbtn.classList.add("btn");
resetbtn.textContent = "Reset";
resetbtn.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.pause();
});

let mainbtns = document.createElement("div");
mainbtns.classList.add("main-btn");

let resumebtn = document.createElement("button");
resumebtn.classList.add("btn");
resumebtn.textContent = "Play/Pause";
resumebtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        resumebtn.textContent = "Pause";
    } else {
        audio.pause();
        resumebtn.textContent = "Play";
    }
});

let leftbtn = document.createElement("button");
leftbtn.classList.add("btn");
leftbtn.textContent = "Previous";
leftbtn.addEventListener("click", () => {
    playPreviousTrack();
});

let rightbtn = document.createElement("button");
rightbtn.classList.add("btn");
rightbtn.textContent = "Next";
rightbtn.addEventListener("click", () => {
    playNextTrack();
});

let shufflebtn = document.createElement("button");
shufflebtn.classList.add("btn");
shufflebtn.textContent = "Shuffle";
shufflebtn.addEventListener("click", () => {
    shuffleAudio();
});

let playlistbtn = document.createElement("button");
playlistbtn.classList.add("btn");
playlistbtn.textContent = "Playlist";
playlistbtn.addEventListener("click", () => {
    displayPlaylist();
});

mainbtns.appendChild(leftbtn);
mainbtns.appendChild(resumebtn);
mainbtns.appendChild(rightbtn);

buttons.appendChild(resetbtn);
buttons.appendChild(mainbtns);
buttons.appendChild(shufflebtn);
buttons.appendChild(playlistbtn);

containerCtrl.appendChild(buttons);

root.appendChild(containerImg);
root.appendChild(containerCtrl);
root.appendChild(audio);

function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    audio.src = playlist[currentTrackIndex].src;
    audio.play();
    resumebtn.textContent = "Pause";
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    audio.src = playlist[currentTrackIndex].src;
    audio.play();
    resumebtn.textContent = "Pause";
}

function shuffleAudio() {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
    audio.src = playlist[currentTrackIndex].src;
    audio.play();
    resumebtn.textContent = "Pause";
    console.log(`Now playing: ${playlist[currentTrackIndex].title}`);
}

function displayPlaylist() {
    console.log("Displaying playlist:");
    playlist.forEach(track => console.log(track.title));
}

let labelDiv = document.createElement("div");
labelDiv.classList.add("label");

let label = document.createElement("p");
label.classList.add("label-text"); 
label.innerText = "Volume";

let volumeControl = document.createElement("input");
volumeControl.type = "range";
volumeControl.min = "0";
volumeControl.max = "1";
volumeControl.step = "0.01";
volumeControl.value = audio.volume;
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

labelDiv.appendChild(label);
label.appendChild(volumeControl);
containerCtrl.appendChild(label);
