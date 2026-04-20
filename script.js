function calculateGrade() {
    const marks = document.getElementById("userMarks").value;
    const result = document.getElementById("gradeResult");

    if (marks === "") {
        result.innerHTML = "Enter marks!";
        result.style.color = "yellow";
        return;
    }

    const score = parseInt(marks);

    if (score >= 70 && score <= 100) {
        result.innerHTML = "Grade: A (Distinction) 🏆";
        result.style.color = "#00ff88";
    } else if (score >= 60) {
        result.innerHTML = "Grade: B (Credit) ✅";
        result.style.color = "#00d4ff";
    } else if (score >= 50) {
        result.innerHTML = "Grade: C (Pass) 👍";
        result.style.color = "white";
    } else if (score >= 0 && score < 50) {
        result.innerHTML = "Grade: F (Fail) ❌";
        result.style.color = "#ff4d4d";
    } else {
        result.innerHTML = "Invalid Score!";
        result.style.color = "orange";
    }
}