// GPA scale map
const gradeToPoints = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0
};

const form = document.getElementById("gpa-form");
const courseContainer = document.getElementById("course-container");
const resultDiv = document.getElementById("gpa-result");
const addCourseBtn = document.getElementById("add-course");

// Add a new course input row
addCourseBtn.addEventListener("click", () => {
  const row = document.createElement("div");
  row.className = "course-row";
  row.innerHTML = `
    <input type="text" placeholder="Course Name" required />
    <select required>
      <option value="">Select Grade</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  `;
  courseContainer.appendChild(row);
});

// GPA calculation logic
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  const gradeSelects = courseContainer.querySelectorAll("select");
  let totalPoints = 0;
  let validGrades = 0;

  gradeSelects.forEach(select => {
    const grade = select.value;
    if (gradeToPoints.hasOwnProperty(grade)) {
      totalPoints += gradeToPoints[grade];
      validGrades++;
    }
  });

  if (validGrades === 0) {
    resultDiv.textContent = "Please enter at least one valid grade.";
    resultDiv.style.color = "#cc0000";
    return;
  }

  const gpa = (totalPoints / validGrades).toFixed(2);
  resultDiv.textContent = `Estimated GPA: ${gpa}`;
  resultDiv.style.color = "#007700";
});

