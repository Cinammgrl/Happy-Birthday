let selectedSeme = "";

const questions = {
  cuori: "Qual è il tuo primo ricordo d'amore?",
  fiori: "Cosa significa per te la dolcezza?",
  picche: "Hai mai avuto il cuore spezzato? Racconta.",
  quadri: "Se potessi regalare qualcosa al tuo amore, cosa sarebbe?"
};

const dediche = {
  cuori: "Il tuo cuore è poesia che batte e fa rumore dentro chi ti ama.",
  fiori: "La tua dolcezza sboccia come un fiore raro: ogni petalo è una carezza.",
  picche: "Anche un cuore spezzato sa amare con più verità di mille cuori interi.",
  quadri: "Il tuo amore è un tesoro che non si compra: si custodisce, si onora."
};

function askQuestion(seme) {
  selectedSeme = seme;
  document.getElementById("questionText").innerText = questions[seme];
  document.getElementById("questionSection").style.display = "block";
  document.getElementById("dedicaSection").style.display = "none";
  document.getElementById("userAnswer").value = "";
}

function showDedica() {
  const answer = document.getElementById("userAnswer").value.trim();
  if (answer === "") {
    alert("Per favore, rispondi alla domanda prima di continuare.");
    return;
  }
  document.getElementById("dedicaText").innerText = dediche[selectedSeme];
  document.getElementById("dedicaSection").style.display = "block";
}

function showLevel4() {
  document.getElementById("level3").style.display = "none";
  document.getElementById("level4").style.display = "block";
}
