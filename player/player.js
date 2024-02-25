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
      title: "Примара",
      artist: "LivingStone",
      cover: "../music/LivingStone/profile.jpg",
      source: "../music/LivingStone/prymara.mp3",
    },
    {
      title: "Разом нас багато",
      artist: "Ivanka Manka",
      cover: "../music/Ivanka_Manka/profile.jpg",
      source: "../music/Ivanka_Manka/razom.mp3",
    },
    {
      title: "Герой",
      artist: "Pavlo Volkov",
      cover: "../music/Pavlo_Volkov/profile.jpg",
      source: "../music/Pavlo_Volkov/heroy.mp3",
    },
    {
      title: "Фарби",
      artist: "Pavlo Volkov",
      cover: "../music/Pavlo_Volkov/profile.jpg",
      source: "../music/Pavlo_Volkov/farby.mp3",
    },
    {
      title: "Небо",
      artist: "KVANT",
      cover: "../music/KVANT/profile.jpg",
      source: "../music/KVANT/nebo.mp3",
    },
    {
      title: "Над Водою",
      artist: "ILO.NA",
      cover: "../music/ILO.NA/profile.jpg",
      source: "../music/ILO.NA/nad_vodoyu.mp3",
    },
    {
      title: "Світло",
      artist: "KaVa",
      cover: "../music/KaVa/profile.jpg",
      source: "../music/KaVa/svitlo.mp3",
    },
    {
      title: "Не залишу",
      artist: "Yurii Sobchenko",
      cover: "../music/Yurii_Sobchenko/profile.jpg",
      source: "../music/Yurii_Sobchenko/ne_zalushy.mp3",
    },
    {
      title: "Такої нема",
      artist: "Dina Shelpuk",
      cover: "../music/Dina_Shelpuk/profile.jpg",
      source: "../music/Dina_Shelpuk/takoi_nema.mp3",
    },
    {
      title: "Січ",
      artist: "Sasha Chef",
      cover: "../music/Sasha_Chef/profile.jpg",
      source: "../music/Sasha_Chef/sich.mp3",
    },
    {
      title: "Спини весну",
      artist: "Roman Vashchuk",
      cover: "../music/Roman_Vashchuk/profile.jpg",
      source: "../music/Roman_Vashchuk/vesna.mp3",
    },
    {
      title: "Від початку",
      artist: "Katia Simchuk",
      cover: "../music/Katia_Simchuk/profile.jpg",
      source: "../music/Katia_Simchuk/pochatok.mp3",
    },
    {
      title: "Цар Слави",
      artist: "Крізь cтіни",
      cover: "../music/Kriz_Stiny/profile.jpg",
      source: "../music/Kriz_Stiny/Tsar_Slavy.mp3",
    },
    {
      title: "Я йду до Тебе",
      artist: "Irena Pasichnyk",
      cover: "../music/Irena_Pasichnyk/profile.jpg",
      source: "../music/Irena_Pasichnyk/ya_ydu_do_Tebe.mp3",
    },
    {
      title: "Боже мій",
      artist: "Anastasiya Polo",
      cover: "../music/Anastasiya_Polo/profile.jpg",
      source: "../music/Anastasiya_Polo/Bozhe_mij.mp3",
    },
    {
      title: "Не мовчи",
      artist: "Ірина Кибукевич",
      cover: "../music/Iryna_Kibukievich/profile.jpg",
      source: "../music/Iryna_Kibukievich/ne_movchy.mp3",
    },
    {
      title: "Не здавайся",
      artist: "RULADA",
      cover: "../music/RULADA/profile.jpg",
      source: "../music/RULADA/ne_zdavaysya.mp3",
    },
    {
      title: "Тільки з Богом",
      artist: "ANNIKA",
      cover: "../music/ANNIKA/profile.jpg",
      source: "../music/ANNIKA/tilky_z_Bogom.mp3",
    },
    {
      title: "Герой",
      artist: "MyMammaWannaSleep!",
      cover: "../music/MyMammaWannaSleep!/profile.jpg",
      source: "../music/MyMammaWannaSleep!/geroy.mp3",
    },
    {
      title: "Доброго вечора",
      artist: "Bria Blessing",
      cover: "../music/Bria_Blessing/profile.jpg",
      source: "../music/Bria_Blessing/vecher.mp3",
    },
    {
      title: "Бігти",
      artist: "Nastia Lykhosherstova",
      cover: "../music/Anastasia_Lykhosherstova/profile.jpg",
      source: "../music/Anastasia_Lykhosherstova/bigty.mp3",
    },
    {
      title: "Якщо б не Ти",
      artist: "Денис Нікітін",
      cover: "../music/Denys_Nikitin/profile.jpg",
      source: "../music/Denys_Nikitin/ty.mp3",
    },
    {
      title: "Тримаєш",
      artist: "CHOICE",
      cover: "../music/CHOICE/profile.jpg",
      source: "../music/CHOICE/trymaesh.mp3",
    },
    {
      title: "Втомились",
      artist: "CHOICE",
      cover: "../music/CHOICE/profile.jpg",
      source: "../music/CHOICE/vtomylys.mp3",
    },
    {
      title: "Гони",
      artist: "Artem Banar",
      cover: "../music/Artem_Banar/profile.jpg",
      source: "../music/Artem_Banar/gony.mp3",
    },
    {
      title: "Де б я не був",
      artist: "НЕЙЖО",
      cover: "../music/neyzho/profile.jpg",
      source: "../music/neyzho/de_b_ya_ne_buv.mp3",
    },
    {
      title: "Болить",
      artist: "Anna-Kristina",
      cover: "../music/Anna-Kristina/profile.jpg",
      source: "../music/Anna-Kristina/bolyt.mp3",
    },
    {
      title: "Не відпускай",
      artist: "Lei La",
      cover: "../music/Lei-La/profile.jpg",
      source: "../music/Lei-La/ne_vidpuskay.mp3",
    },
    {
      title: "Додому",
      artist: "Kana Band",
      cover: "../music/Kana-Band/profile.jpg",
      source: "../music/Kana-Band/dodomu.mp3",
    },
    {
      title: "Ти зі мною",
      artist: "Christina Longs",
      cover: "../music/Christina_Longs/profile.jpg",
      source: "../music/Christina_Longs/ty_zi_mnoyu.mp3",
    },
    // {
    //   title: "",
    //   artist: "",
    //   cover: "../music",
    //   source: "../music",
    // },
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
