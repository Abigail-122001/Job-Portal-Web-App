// Search functionality
document.getElementById("search")?.addEventListener("keyup", function() {
  console.log("Searching:", this.value);
});

// Apply button
function applyJob() {
  window.location.href = "apply.html";
}

// Form submit
document.getElementById("applyForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Application submitted!");
});