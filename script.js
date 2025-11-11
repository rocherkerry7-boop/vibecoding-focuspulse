let selectedMood = null;

const plans = {
  tired: "Do a 15-minute focus sprint with calm lofi music. Keep your phone in another room. After 15 minutes, take a 5-minute stretch break.",
  stressed: "Do 10 minutes of slow focused work. Breathe in for 4 seconds, out for 4 while you work. After, write down 3 tasks and pick only ONE to finish.",
  bored: "Try a 20-minute challenge. Set a timer and see how much you can complete before it ends. Reward yourself with music or a snack after.",
  focused: "Go for a 30-minute deep focus block. Turn off notifications. At the end, review what you finished and plan your next step."
};

const quotes = [
  "Small steps count. Just start.",
  "Your future self is watching. Impress them.",
  "Done is better than perfect.",
  "You’ve handled harder days than this."
];

function getRandomQuote() {
  const i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

document.querySelectorAll(".mood-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedMood = btn.dataset.mood;
    document.getElementById("planText").textContent =
      `Mood selected: ${btn.textContent.trim()}. Now click 'Generate Plan'.`;
  });
});

document.getElementById("generateBtn").addEventListener("click", () => {
  const planText = document.getElementById("planText");

  if (!selectedMood) {
    planText.textContent = "Pick a vibe first so I can tune your plan.";
    return;
  }

  const basePlan = plans[selectedMood];
  const quote = getRandomQuote();

  planText.textContent = `${basePlan} 💡 ${quote}`;
});
