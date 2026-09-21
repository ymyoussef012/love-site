let currentPage = 0;

const pages = document.querySelectorAll(".page");

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
    window.scrollTo(0, 0);
  }
}

function showCounter() {
  const counter = document.getElementById("counterSection");

  counter.scrollIntoView({
    behavior: "smooth"
  });
}

/* عداد مدة العلاقة */
const startDate = new Date("2025-09-05T00:00:00");

function updateCounter() {
  const now = new Date();

  let difference = now - startDate;

  if (difference < 0) {
    difference = 0;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);


/* الأغاني */
const songs = [
  {
    title: "أغنيتنا الأولى ❤️",
    file: "assets/7647039718802082568.mp3"
  },
  {
    title: "أغنيتنا الثانية 💕",
    file: "assets/7648907516901903105.mp3"
  },
  {
    title: "أغنيتنا الثالثة 💗",
    file: "assets/7671121720533568276.mp3"
  },
  {
    title: "أغنيتنا الرابعة 💖",
    file: "assets/7671348267992713991.mp3"
  },
  {
    title: "أغنيتنا الخامسة 💘",
    file: "assets/7680146431533648656.mp3"
  },
  {
    title: "أغنيتنا السادسة 💞",
    file: "assets/7685812748542561041.mp3"
  }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songCounter = document.getElementById("songCounter");
const playButton = document.getElementById("playButton");

function loadSong(index) {
  currentSong = index;

  audio.src = songs[currentSong].file;

  songTitle.textContent = songs[currentSong].title;

  songCounter.textContent =
    `${currentSong + 1} / ${songs.length}`;

  playButton.textContent = "▶️";
}

function toggleMusic() {
  if (audio.paused) {
    audio.play()
      .then(() => {
        playButton.textContent = "⏸️";
      })
      .catch(() => {
        playButton.textContent = "▶️";
      });
  } else {
    audio.pause();
    playButton.textContent = "▶️";
  }
}

function nextSong() {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);

  audio.play()
    .then(() => {
      playButton.textContent = "⏸️";
    })
    .catch(() => {
      playButton.textContent = "▶️";
    });
}

function previousSong() {
  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);

  audio.play()
    .then(() => {
      playButton.textContent = "⏸️";
    })
    .catch(() => {
      playButton.textContent = "▶️";
    });
}

audio.addEventListener("ended", () => {
  nextSong();
});

audio.addEventListener("play", () => {
  playButton.textContent = "⏸️";
});

audio.addEventListener("pause", () => {
  playButton.textContent = "▶️";
});

loadSong(0);
