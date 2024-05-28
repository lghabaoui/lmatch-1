document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.getElementById("calendar");
    const daysInMonth = 30; // June 2024
    const greenDays = [3, 12, 14, 26, 31,15];
    const redDays = [5, 11, 16, 24];
  
    // Add month name
    const monthName = "June 2024";
    const monthHeader = document.createElement("div");
    monthHeader.classList.add("month-header");
    monthHeader.textContent = monthName;
    calendarContainer.insertBefore(monthHeader, calendarContainer.firstChild);
  
    // Create calendar days
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;
      if (greenDays.includes(i)) {
        dayDiv.classList.add("green");
      } else if (redDays.includes(i)) {
        dayDiv.classList.add("red");
      }
      calendarContainer.appendChild(dayDiv);
    }
  });
  