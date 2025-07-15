function creaCuore() {
  const cuore = document.createElement("div");
  cuore.classList.add("cuore");
  cuore.style.left = Math.random() * 100 + "vw";
  cuore.style.animationDuration = Math.random() * 2 + 3 + "s";

  const colori = ["#ff69b4", "#ff1493", "#ffb6c1", "#d8bfd8", "#db7093"];
  cuore.style.color = colori[Math.floor(Math.random() * colori.length)];

  cuore.innerHTML = "♥";
  document.querySelector(".cuori-container").appendChild(cuore);

  setTimeout(() => {
    cuore.remove();
  }, 5000);
}

setInterval(creaCuore, 300);
