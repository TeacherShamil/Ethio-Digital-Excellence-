// admin.js - To'annoo fi Hojii Admin Dashboard

class AdminDashboard {
    static init() {
        console.log("Admin Dashboard loaded successfully.");
        this.loadStudentsData();
    }

    static loadStudentsData() {
        // Fakkeenya ragaa barattoota galmaa'anii agarsiisuu
        const students = [
            { id: 1, name: "Abdiisaa Gurmuu", course: "Web Development", status: "Paid" },
            { id: 2, name: "Fatumaa Ali", course: "Basic Computer Skills", status: "Pending" }
        ];

        const listContainer = document.getElementById("student-list");
        if (listContainer) {
            let html = "<ul>";
            students.forEach((student, index) => {
                html += `<li>${index + 1}. ${student.name} - ${student.course} (${student.status})</li>`;
            });
            html += "</ul>";
            listContainer.innerHTML = html;
        }
    }
}

// Yeroo fuulli admin fe'amu hojiitti hiikuuf
document.addEventListener("DOMContentLoaded", () => {
    AdminDashboard.init();
});
