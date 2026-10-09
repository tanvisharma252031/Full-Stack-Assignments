# Student Registration and Result Management System

A responsive web application built using **HTML5, CSS3, and JavaScript** that allows students to enter their personal details and subject marks, validates the input, calculates results, and stores student records in the browser's Local Storage.

## Features

- **Student Registration:** Collects student name, email, phone number, course, and subject marks.
- **Input Validation:** Validates required fields, email format, phone number, and marks.
- **Result Calculation:** Calculates total marks out of 300 and overall percentage.
- **Pass/Fail Status:** Determines whether a student passes or fails based on subject-wise marks.
- **Dynamic Result Display:** Displays student details, individual subject marks, total marks, percentage, and result status.
- **JSON Conversion:** Converts the student object into JSON format using `JSON.stringify()`.
- **Local Storage:** Saves student records in the browser for future access.
- **Responsive Design:** Provides a clean interface for desktop and mobile devices.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structures the registration form and result card |
| CSS3 | Styles the interface and provides responsive layouts |
| JavaScript | Handles validation, calculations, and dynamic result generation |
| JSON | Represents student records in a structured format |
| Local Storage | Stores student records in the browser |

## Project Structure

```text
StudentPortal/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Ensure that `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a browser or use the Live Server extension.
5. Enter the student details and marks.
6. Click **Generate Result** to display the calculated result.

**Prerequisites:** A modern web browser and a code editor such as Visual Studio Code. No backend server or database installation is required.

## Application Workflow

1. Students enter their personal details and subject marks.
2. JavaScript validates the entered information.
3. The application calculates total marks and percentage.
4. The Pass/Fail status is determined.
5. The result is displayed dynamically on the webpage.
6. The student object is converted into JSON.
7. The JSON data is saved in Local Storage under the key `studentPortalRecords`.

## Result Calculation

### Total Marks

```text
Total = HTML Marks + CSS Marks + JavaScript Marks
```

### Percentage

```text
Percentage = (Total Marks / 300) × 100
```

### Pass/Fail Criteria

- **PASS:** The student scores at least 35 marks in each subject.
- **FAIL:** The student scores below 35 marks in any subject.

Each subject is evaluated individually to determine the final result.

## Viewing Local Storage

To view the saved student records in Google Chrome:

1. Run the application in Chrome.
2. Press `F12` or `Ctrl + Shift + I` to open Developer Tools.
3. Navigate to the **Application** tab.
4. Expand **Local Storage** under the Storage section.
5. Select the application's URL.
6. Find the `studentPortalRecords` key to view the stored JSON data.

> **Note:** Local Storage saves records in the current browser and origin. The records are not automatically shared between different browsers or devices.

## Learning Outcomes

This project demonstrates the practical use of:

- HTML forms and semantic elements.
- CSS styling, Flexbox, Grid, and media queries.
- JavaScript functions, objects, and conditional statements.
- Form validation and event handling.
- DOM manipulation and dynamic content updates.
- JSON conversion using `JSON.stringify()`.
- Browser storage using the Web Storage API.

## Future Enhancements

- Add functionality to search, update, and delete student records.
- Integrate a backend database for centralized record management.
- Generate downloadable student result reports.
- Introduce authentication for students and administrators.

## Author

**Tanvi Sharma**
**Roll no: 001**

## License

This project was developed for educational and academic purposes.