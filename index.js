let currentFilter = "all"; // track the current filter

const toggles = document.querySelectorAll('.status-dot');
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const inactiveBtn = document.querySelector(".inactive");
const cards = document.querySelectorAll(".container > div");

// Function to update card visibility
function applyFilter() {
  cards.forEach(card => {
    const dot = card.querySelector(".status-dot");
    if (currentFilter === "all") {
      card.style.display = "block";
    } else if (currentFilter === "active") {
      card.style.display = dot.classList.contains("on") ? "block" : "none";
    } else if (currentFilter === "inactive") {
      card.style.display = !dot.classList.contains("on") ? "block" : "none";
    }
  });
}

// Toggle dot and reapply filter
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('on');
    applyFilter();
  });
});

// Button click handlers
allBtn.addEventListener("click", () => {
  currentFilter = "all";
  applyFilter();
});

activeBtn.addEventListener("click", () => {
  currentFilter = "active";
  applyFilter();
});

inactiveBtn.addEventListener("click", () => {
  currentFilter = "inactive";
  applyFilter();
})