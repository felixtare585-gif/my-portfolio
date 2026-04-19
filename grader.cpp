#include <iostream>
#include <string>

using namespace std;

int main() {
    string studentName;
    int numSubjects;
    float totalMarks = 0;

    cout << "===== STUDENT GRADING SYSTEM =====" << endl;

    // 1. Get Student Info
    cout << "Enter student name: ";
    getline(cin, studentName);

    cout << "How many subjects do you want to calculate? ";
    cin >> numSubjects;

    // 2. Get Marks for each subject
    for (int i = 1; i <= numSubjects; i++) {
        float mark;
        cout << "Enter marks for subject " << i << " (out of 100): ";
        cin >> mark;
        totalMarks += mark; // Adding the marks together
    }

    // 3. Calculate Average
    float average = totalMarks / numSubjects;

    // 4. Determine Grade
    cout << "\n--- Final Result for " << studentName << " ---" << endl;
    cout << "Average Score: " << average << "%" << endl;

    if (average >= 70) {
        cout << "Grade: A (Distinction)" << endl;
    } else if (average >= 60) {
        cout << "Grade: B (Credit)" << endl;
    } else if (average >= 50) {
        cout << "Grade: C (Pass)" << endl;
    } else {
        cout << "Grade: F (Fail - Retake required)" << endl;
    }

    return 0;
}