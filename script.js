document.addEventListener("DOMContentLoaded", function () {
  const studentSelect = document.getElementById("studentSelect");
  const daysSelect = document.getElementById("daysSelect");

  // Mock data for 10 students
  const students = [
    { name: "Student 1", rollNumber: 101 },
    // ... (add 9 more students)
  ];

  // Populate the student dropdown
  students.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.rollNumber;
    option.text = student.name;
    studentSelect.appendChild(option);
  });

  window.saveAttendance = function () {
    const selectedRollNumber = studentSelect.value;
    const daysAttended = daysSelect.value;

    // Save data to local storage
    const attendanceData =
      JSON.parse(localStorage.getItem("attendanceData")) || {};
    attendanceData[selectedRollNumber] = daysAttended;
    localStorage.setItem("attendanceData", JSON.stringify(attendanceData));

    alert("Attendance saved successfully!");
  };
});

// script.js (use the same script.js as the Classroom Project)
document.addEventListener("DOMContentLoaded", function () {
  const studentSelect = document.getElementById("studentSelect");
  const englishMarksInput = document.getElementById("englishMarks");
  const mathsMarksInput = document.getElementById("mathsMarks");
  const hindiMarksInput = document.getElementById("hindiMarks");

  // Mock data for 10 students
  const students = [
    { name: "Student 1", rollNumber: 101 },
    // ... (add 9 more students)
  ];

  // Populate the student dropdown
  students.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.rollNumber;
    option.text = student.name;
    studentSelect.appendChild(option);
  });

  window.saveTestMarks = function () {
    const selectedRollNumber = studentSelect.value;
    const englishMarks = englishMarksInput.value;
    const mathsMarks = mathsMarksInput.value;
    const hindiMarks = hindiMarksInput.value;

    // Save data to local storage
    const testMarksData =
      JSON.parse(localStorage.getItem("testMarksData")) || {};
    testMarksData[selectedRollNumber] = {
      english: englishMarks,
      maths: mathsMarks,
      hindi: hindiMarks,
    };
    localStorage.setItem("testMarksData", JSON.stringify(testMarksData));

    alert("Test marks saved successfully!");
  };
});


document.addEventListener('DOMContentLoaded', function()) {
  window.generateReportCard = function() {
      const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || {};
      const testMarksData = JSON.parse(localStorage.getItem('testMarksData')) || {};

      let reportCardContent = '<h1>Report Card</h1><ul>';}

      for (const rollNumber in attendanceData) {
          const daysAttended = attendanceData[rollNumber];
          const testMarks = testMarksData[rollNumber] || {};} }

          const reportCardItem = <li>
              <strong>Roll Number:</strong> ${rollNumber}<br>
              <strong>Days Attended:</strong> ${daysAttended}<br>
              <strong>English Marks:</strong> ${testMarks.english || 'N/A'}<br>
              <strong>Maths Marks:</strong> ${testMarks.maths}