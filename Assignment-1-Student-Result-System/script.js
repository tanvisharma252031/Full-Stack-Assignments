
const STORAGE_KEY = "studentPortalRecords";

const form = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");
const resultContent = document.getElementById("resultContent");
const emptyState = document.getElementById("emptyState");
const statusBadge = document.getElementById("statusBadge");

// Validate student details
function validateStudent(data) {
    form.querySelectorAll(".invalid").forEach(field => {
        field.classList.remove("invalid");
    });

    const errors = [];

    if (data.studentName.length < 2) {
        errors.push("Enter a valid student name.");
        document.getElementById("studentName").classList.add("invalid");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push("Enter a valid email address.");
        document.getElementById("email").classList.add("invalid");
    }

    if (!/^\d{10}$/.test(data.phone)) {
        errors.push("Enter a valid 10-digit phone number.");
        document.getElementById("phone").classList.add("invalid");
    }

    if (!data.course) {
        errors.push("Please select a course.");
        document.getElementById("course").classList.add("invalid");
    }

    const subjects = [
        ["htmlMarks", "HTML"],
        ["cssMarks", "CSS"],
        ["jsMarks", "JavaScript"]
    ];

    for (const [key, label] of subjects) {
        const value = data[key];

        if (
            value === "" ||
            !Number.isInteger(Number(value)) ||
            Number(value) < 0 ||
            Number(value) > 100
        ) {
            errors.push(`${label} marks must be from 0 to 100.`);
            document.getElementById(key).classList.add("invalid");
        }
    }

    return errors;
}

// Read form values
function readForm() {
    return {
        studentName: document.getElementById("studentName").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        course: document.getElementById("course").value,
        htmlMarks: document.getElementById("htmlMarks").value.trim(),
        cssMarks: document.getElementById("cssMarks").value.trim(),
        jsMarks: document.getElementById("jsMarks").value.trim()
    };
}

// Calculate total, percentage and status
function buildStudent(data) {
    const html = Number(data.htmlMarks);
    const css = Number(data.cssMarks);
    const javascript = Number(data.jsMarks);

    const total = html + css + javascript;
    const percentage = (total / 300) * 100;

    return {
        id: Date.now(),
        studentName: data.studentName,
        email: data.email,
        phone: data.phone,
        course: data.course,
        marks: {
            html: html,
            css: css,
            javascript: javascript
        },
        total: total,
        maximumMarks: 300,
        percentage: Number(percentage.toFixed(2)),
        status: html >= 35 && css >= 35 && javascript >= 35
            ? "PASS"
            : "FAIL",
        createdAt: new Date().toISOString()
    };
}

// Display student result
function displayStudent(student) {
    document.getElementById("outName").textContent = student.studentName;
    document.getElementById("outEmail").textContent = student.email;
    document.getElementById("outPhone").textContent = student.phone;
    document.getElementById("outCourse").textContent = student.course;

    document.getElementById("outHtml").textContent = student.marks.html;
    document.getElementById("outCss").textContent = student.marks.css;
    document.getElementById("outJs").textContent = student.marks.javascript;

    document.getElementById("outTotal").textContent =
        `${student.total} / ${student.maximumMarks}`;

    document.getElementById("outPercentage").textContent =
        `${student.percentage.toFixed(2)}%`;

    statusBadge.textContent = student.status;
    statusBadge.className =
        `status-badge ${student.status.toLowerCase()}`;

    emptyState.hidden = true;
    resultContent.hidden = false;
}

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent = "";

    const data = readForm();
    const errors = validateStudent(data);

    if (errors.length > 0) {
        formMessage.textContent = errors[0];
        formMessage.style.color = "var(--red)";
        return;
    }

    const student = buildStudent(data);

    try {
        const records = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        records.push(student);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(records)
        );

        displayStudent(student);

        formMessage.textContent = "Result generated successfully.";
        formMessage.style.color = "var(--green)";

    } catch (error) {
        displayStudent(student);

        formMessage.textContent =
            "Result generated, but Local Storage is unavailable.";

        formMessage.style.color = "var(--red)";
    }
});

// Clear form and reset result
form.addEventListener("reset", function() {
    setTimeout(function() {
        form.querySelectorAll(".invalid").forEach(field => {
            field.classList.remove("invalid");
        });

        formMessage.textContent = "";
        emptyState.hidden = false;
        resultContent.hidden = true;

        statusBadge.textContent = "Awaiting result";
        statusBadge.className = "status-badge neutral";
    }, 0);
});

// Remove error styling when fields are edited
form.querySelectorAll("input, select").forEach(field => {
    field.addEventListener("input", () => {
        field.classList.remove("invalid");
    });
});
