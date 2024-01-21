(function () {
  const tracks = [
    {
      title: "Зброя",
      artist: "Liam Fisher feat Саша Чеф",
      cover: "../music/Liam_Fisher/zbroja.jpg",
      source: "../music/Liam_Fisher/zbroja.mp3",
    },
    {
      title: "Збережи мене",
      artist: "Imprint",
      cover: "../music/imprint/profile.jpg",
      source: "../music/imprint/zberezhy.mp3",
    },
    {
      title: "Все мине",
      artist: "Анастасія Гетьман",
      cover: "../music/Getman_Anastasia/profile.jpg",
      source: "../music/Getman_Anastasia/vse_myne.mp3",
    },
    {
      title: "Track 4",
      artist: "LivingStone",
      cover: "../music/LivingStone/profile.jpg",
      source: "../music/LivingStone/prymara.mp3",
    },
    {
      title: "Track 5",
      artist: "Artist 5",
      cover: "./player/songs/cover/5.jpg",
      source: "./player/songs/track/5.m4a",
    },
    {
      title: "Track 6",
      artist: "Artist 6",
      cover: "./player/songs/cover/6.jpg",
      source: "./player/songs/track/6.m4a",
    },
    {
      title: "Track 7",
      artist: "Artist 7",
      cover: "./player/songs/cover/7.jpg",
      source: "./player/songs/track/7.m4a",
    },
  ];

  let currentTrackIndex = 0;
  const audioPlayer = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const playPauseBtn = document.getElementById("playpause");

  // const volumeSlider = document.getElementById("volume-slider");
  const trackTitle = document.querySelector(".track-title");
  const artist = document.querySelector(".artist");
  const cover = document.querySelector(".cover");
  const durationDisplay = document.getElementById("duration");
  const durationSlider = document.getElementById("duration-slider");
  const remainingTimeDisplay = document.getElementById("remaining-time");

  function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audioPlayer.src = track.source;
    trackTitle.textContent = track.title;
    artist.textContent = track.artist;
    cover.style.backgroundImage = `url(${track.cover})`;
  }

  function playTrack() {
    audioPlayer.play();
    // playBtn.textContent = "Pause";

    cover.classList.add("playing");
    playPauseBtn.classList.remove("icon-play-button");
    playPauseBtn.classList.add("icon-pause");

  }

  function pauseTrack() {
    audioPlayer.pause();
    // playBtn.textContent = "Play";

    cover.classList.remove("playing");
    playPauseBtn.classList.remove("icon-pause");
    playPauseBtn.classList.add("icon-play-button");
  }

  function stopTrack() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.textContent = "Play";
  }

  function updateDuration() {
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60)
      .toString()
      .padStart(2, "0");

    const remainingTime = audioPlayer.duration - audioPlayer.currentTime;
    const remainingMinutes = Math.floor(remainingTime / 60);
    const remainingSeconds = Math.floor(remainingTime % 60)
      .toString()
      .padStart(2, "0");

    durationSlider.value =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    durationDisplay.textContent = `${minutes}:${seconds}`;
    remainingTimeDisplay.textContent = `-${remainingMinutes}:${remainingSeconds}`;
  }

  durationSlider.addEventListener("input", () => {
    const seekTime = (durationSlider.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  });

  playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      playTrack();
    } else {
      pauseTrack();
    }
  });

  // volumeSlider.addEventListener("input", () => {
  //   audioPlayer.volume = volumeSlider.value;
  // });

  audioPlayer.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
  });

  audioPlayer.addEventListener("timeupdate", updateDuration);

  function shuffleTracks() {
    for (let i = tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
  }

  shuffleTracks();
  loadTrack(currentTrackIndex);

  durationSlider.disabled = true;
})();
