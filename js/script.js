//Video Play Pause Control Start
let playButton = document.getElementById("play_button");
let pauseButton = document.getElementById("pause_button");
playButton.addEventListener("click", function() {
  video.play();
  playButton.classList.add('vplay');
  pauseButton.classList.remove('vpause');
  document.querySelector('html').classList.add('playvideo');
});

pauseButton.addEventListener("click", function() {
	video.pause();
	 playButton.classList.remove('vplay');
  pauseButton.classList.add('vpause');
  document.querySelector('html').classList.remove('playvideo');
});
//Video Play Pause Control End
//Video Sound on & off Ctrl Start
let soundOff = document.getElementById("sound-off");
let soundOn = document.getElementById("sound-on");
let soundCtrl = document.querySelector(".sound-ctrl");

soundOff.addEventListener("click", function() {
 video.muted = true;
 soundCtrl.classList.add('soundctrlshow');
});

soundOn.addEventListener("click", function() {
	video.muted = false;
	soundCtrl.classList.remove('soundctrlshow'); 
});
//Video Sound on & off Ctrl End
video.onended = function() {
		document.querySelector('html').classList.remove('playvideo');
	 playButton.classList.remove('vplay');
};

// Sticky header
