<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Felix Portfolio</title>

<link rel="stylesheet" href="style.css">
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#languages">Skills</a>
    <a href="#contact">Contact</a>
</nav>

<!-- HERO -->
<header id="home" class="hero">

    <img src="profile.png" class="profile-pic" alt="Profile Picture">

    <h1>Hi, I'm Felix</h1>

    <!-- STATIC BIO (UPDATED) -->
    <h2 class="role">Aspiring Software Developer</h2>

    <div class="links">
        <a href="https://github.com/felixtare585-gif" target="_blank">GitHub</a>
        <a href="mailto:felixtare585@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/felix-kipyegon-834532314" target="_blank">LinkedIn</a>
    </div>

</header>

<!-- ABOUT -->
<section id="about" class="section">
    <h2>About Me</h2>
    <p>
        I am an aspiring software developer passionate about building websites 
        and learning programming. I enjoy solving problems and improving my skills daily.
    </p>

    <p>
        Currently focused on learning frontend development and building real-world projects to improve my skills.
    </p>
</section>

<!-- PROJECTS -->
<section id="projects" class="section">

    <h2>My Projects</h2>

    <div class="grid">

        <div class="card">
            <h3>To-Do List App</h3>
            <p>A JavaScript app that allows users to add and delete tasks.</p>
            <a href="#" target="_blank">View Project</a>
        </div>

        <div class="card">
            <h3>C Calculator</h3>
            <p>A simple calculator built using C programming.</p>
            <a href="https://github.com/felixtare585-gif" target="_blank">View Code</a>
        </div>

        <div class="card">
            <h3>Portfolio Website</h3>
            <p>This website built with HTML, CSS, and JavaScript.</p>
            <a href="#" target="_blank">View Project</a>
        </div>

    </div>

</section>

<!-- SKILLS -->
<section id="languages" class="section">

    <h2>Programming Languages</h2>

    <div class="grid">

        <div class="card">
            <h3>C Programming</h3>
            <p>Loops, functions, arrays, problem solving</p>
        </div>

        <div class="card">
            <h3>HTML</h3>
            <p>Website structure and layout</p>
        </div>

        <div class="card">
            <h3>CSS</h3>
            <p>Design, styling, animations</p>
        </div>

        <div class="card">
            <h3>JavaScript</h3>
            <p>Basic interactivity and logic</p>
        </div>

    </div>

</section>

<!-- CONTACT -->
<section id="contact" class="section">

    <h2>Contact Me</h2>
    <p>Email: felixtare585@gmail.com</p>
    <p>GitHub: felixtare585-gif</p>
    <p>
        LinkedIn: 
        <a href="https://www.linkedin.com/in/felix-kipyegon-834532314/" target="_blank">
            View Profile
        </a>
    </p>

</section>

</body>
</html>
function calculateGrade() {
    // 1. Get the number from the input box
    let marks = document.getElementById("userMarks").value;
    
    // 2. Find the empty <p> tag where we want to show the result
    let result = document.getElementById("gradeResult");

    // 3. The Logic (Same as your C++ code!)
    if (marks === "") {
        result.innerHTML = "Please enter a number first!";
        result.style.color = "yellow";
    } else {
        let score = parseInt(marks); // Convert text to a number

        if (score >= 70 && score <= 100) {
            result.innerHTML = "Result: Grade A (Distinction) 🏆";
            result.style.color = "#00ff88"; // Green for good grades
        } else if (score >= 60 && score < 70) {
            result.innerHTML = "Result: Grade B (Credit) ✅";
            result.style.color = "#00d4ff";
        } else if (score >= 50 && score < 60) {
            result.innerHTML = "Result: Grade C (Pass) 👍";
            result.style.color = "#ffffff";
        } else if (score < 50 && score >= 0) {
            result.innerHTML = "Result: Grade F (Fail) ❌";
            result.style.color = "#ff4d4d"; // Red for fail
        } else {
            result.innerHTML = "Invalid Score! Enter 0-100.";
            result.style.color = "orange";
        }
    }
}