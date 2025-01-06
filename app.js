const moodSelect = document.getElementById("mood-select");
const moodNote = document.getElementById("mood-note");
const addMoodBtn = document.getElementById("add-mood-btn");
const moodLog = document.getElementById("mood-log");
const suggestionBox = document.getElementById("suggestion-box");

let moodEntries = [];

// Motivational suggestions
const suggestions = {
  Happy: [
    "Keep spreading positivity!",
    "Great job! Celebrate your wins.",
    "Happiness is contagious. Share it with someone!",
  ],
  Neutral: [
    "Take a deep breath and enjoy the moment.",
    "A calm mind is a powerful mind.",
    "Neutral days are perfect for small self-improvements!",
  ],
  Sad: [
    "It's okay to feel this way. You're strong!",
    "Take some time to rest and recharge.",
    "Every storm passes. Keep going!",
  ],
};

// Display a suggestion based on mood
const displaySuggestion = (mood) => {
  const suggestion = suggestions[mood];
  suggestionBox.textContent = suggestion
    ? suggestion[Math.floor(Math.random() * suggestion.length)]
    : "No suggestions available.";
};

// Add a new mood entry
addMoodBtn.addEventListener("click", () => {
  const mood = moodSelect.value;
  const note = moodNote.value.trim();
  const date = new Date().toLocaleDateString();

  if (note === "") {
    alert("Please enter a note!");
    return;
  }

  const newEntry = { date, mood, note };
  moodEntries.push(newEntry);

  moodNote.value = ""; // Clear the note
  renderMoodLog();
  displaySuggestion(mood); // Update suggestion
});

// Render the mood log
const renderMoodLog = () => {
  moodLog.innerHTML = "";

  moodEntries.forEach((entry, index) => {
    const li = document.createElement("li");
    li.classList.add("mood-item");

    const moodText = document.createElement("div");
    moodText.classList.add("mood-text");
    moodText.innerHTML = `<strong>${entry.mood}</strong><br>${entry.note}<br><span class="mood-date">${entry.date}</span>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      moodEntries.splice(index, 1);
      renderMoodLog();
    });

    li.appendChild(moodText);
    li.appendChild(deleteBtn);
    moodLog.appendChild(li);
  });
};

// Initial render
renderMoodLog();
