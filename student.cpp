#include <iostream>
#include <string>
#include <iomanip> // For making the output look neat

using namespace std;

int main() {
    string name;
    float marks, sum = 0, average;
    int subjects;

    cout << "--- STUDENT GRADING SYSTEM ---" << endl;
    cout << "Enter Student Name: ";
    getline(cin, name);
    
    cout << "How many subjects? ";
    cin >> subjects;

    for(int i = 1; i <= subjects; i++) {
        cout << "Enter marks for Subject " << i << ": ";
        cin >> marks;
        sum += marks;
    }

    average = sum / subjects;

    cout << "\n================================" << endl;
    cout << "STUDENT: " << name << endl;
    cout << "AVERAGE: " << fixed << setprecision(2) << average << "%" << endl;

    if(average >= 70) cout << "GRADE: A (Distinction)" << endl;
    else if(average >= 60) cout << "GRADE: B (Credit)" << endl;
    else if(average >= 50) cout << "GRADE: C (Pass)" << endl;
    else cout << "GRADE: F (Fail)" << endl;
    cout << "================================" << endl;

    return 0;
}