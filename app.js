const moodSelect = document.getElementById("mood-select");
const moodNote = document.getElementById("mood-note");
const addMoodBtn = document.getElementById("add-mood-btn");
const moodLog = document.getElementById("mood-log");

let moodEntries = [];

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
