# Student Grading System (C++)

## Description
This is a console-based C++ application designed to help teachers and students calculate academic performance. The program takes a student's name and marks for multiple subjects, calculates the average, and assigns a grade based on the performance.

## Features
* Calculates total marks and average percentage.
* Automatic grading logic:
    * **70% - 100%**: Grade A (Distinction)
    * **60% - 69%**: Grade B (Credit)
    * **50% - 59%**: Grade C (Pass)
    * **Below 50%**: Grade F (Fail)
* Uses `iomanip` for clean, two-decimal point formatting.

## How to Run
1. Ensure you have a C++ compiler installed (like MinGW or GCC).
2. Compile the code: `g++ student.cpp -o grader`
3. Run the application: `./grader`
![Program Screenshot](screenshot.png)