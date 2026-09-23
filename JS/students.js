// students.js - To'annoo Ragaa Barattootaa fi Roster (Ethio-Digital Excellence)

class StudentManager {
    constructor() {
        // Fakkeenya ragaa barattootaa qabaachuu
        this.students = [
            { id: 1, name: "Abdiisaa Gurmuu", grade: "Kutaa 6ffaa", course: "Web Development", status: "Paid" },
            { id: 2, name: "Fatumaa Ali", grade: "Kutaa 5ffaa", course: "Basic Computer Skills", status: "Pending" }
        ];
    }

    // Barataa haaraa dabaluu
    addStudent(name, grade, course, status) {
        const newStudent = {
            id: this.students.length + 1,
            name,
            grade,
            course,
            status: status || "Pending"
        };
        this.students.push(newStudent);
        console.log("Barataan haaraan galmeeffameera:", newStudent);
        this.renderStudentsList();
    }

    // Barattoota fuula HTML irratti agarsiisuu
    renderStudentsList() {
        const container = document.getElementById("student-list");
        if (!container) return;

        let html = `
            <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="background-color: #1a73e8; color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">#</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Maqaa Guutuu</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Kutaa</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Kursii</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Haala Kaffaltii</th>
                    </tr>
                </thead>
                <tbody>
        `;

        this.students.forEach((student, index) => {
            html += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${index + 1}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${student.name}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${student.grade}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${student.course}</td>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${student.status}</td>
                </tr>
            `;
        });

        html += `</tbody></table>`;
        container.innerHTML = html;
    }
}

// Yeroo fuulli fe'amu hojiitti hiikuu
const studentManager = new StudentManager();

document.addEventListener("DOMContentLoaded", () => {
    studentManager.renderStudentsList();
});
