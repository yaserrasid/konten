document.addEventListener("DOMContentLoaded", function () {
  const lyrics = [
    "Yang jatuh cinta",
    "Haruskah kau kuberi kesempatan",
    "Ingin aku jadi kekasih yang baik",
    "Berikan aku kesempatan oh",
    "Tahukah dirimu taukah hatimu",
    "Berulang kuketuk aku mencintamu",
    "Tapi dirimu tak pernah sadari",
    "Aku yang jatuh cinta",
  ];

  const charTimings = [
    [
      400, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      2100,
    ], // Aku yang jatuh cinta
    [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 1100, 100, 100, 100, 100, 1200,
    ], // Haruskah kau beri kesempatan
    [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 1300,
    ], // Ingin aku jadi kekasih yang baik
    [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 130, 130, 130, 130, 130,
      130, 130, 130, 130, 130, 130, 1000, 300, 300, 3700,
    ], // Berikan aku kesempatan oh
    [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1300, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1200,
    ], // Tahukah dirimu taukah harimu
    [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      700, 100, 100, 100, 100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400,
      400, 400, 2000,
    ], // Berulang kuketuk, aku mencintaimu
    [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 800, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 700,
    ], // Tapi dirimu tak pernah sadar
    [
      100, 100, 100, 4000, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100,
    ], // Aku yang jatuh cinta (reprise)
  ];

  let currentLine = 0;
  let currentChar = 0;
  const lyricsContainer = document.getElementById("lyrics");
  const song = document.getElementById("song");

  function showNextChar() {
    if (currentLine < lyrics.length) {
      const line = lyrics[currentLine];
      const timing = charTimings[currentLine][currentChar]; // Waktu munculnya huruf
      const span = document.createElement("span");
      span.className = line.includes("Haruskah")
        ? "special-line"
        : "default-line";
      span.textContent = line[currentChar];
      lyricsContainer.appendChild(span);
      currentChar++;

      if (currentChar < line.length) {
        setTimeout(showNextChar, timing); // Tunggu sebelum menampilkan huruf berikutnya
      } else {
        lyricsContainer.innerHTML += "<br/>"; // Ganti baris
        currentLine++;
        currentChar = 0;
        setTimeout(showNextChar, timing); // Tunggu sebelum menampilkan baris lirik berikutnya
      }
    }
  }

  document.getElementById("playButton").addEventListener("click", function () {
    this.style.display = "none"; // Sembunyikan tombol play setelah diklik
    song.play(); // Mainkan lagu
    showNextChar(); // Mulai menampilkan lirik
  });
});
