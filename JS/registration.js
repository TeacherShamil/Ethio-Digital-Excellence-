// registration.js - To'annoo Galmee Barattootaa

document.addEventListener("DOMContentLoaded", () => {
    const regForm = document.getElementById("courseRegForm") || document.getElementById("regForm");

    if (regForm) {
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById("fullName")?.value;
            const email = document.getElementById("email")?.value;
            const course = document.getElementById("courseName")?.value;
            const paymentMethod = document.getElementById("paymentMethod")?.value;
            const transactionId = document.getElementById("transactionId")?.value || document.getElementById("transId")?.value;

            const studentData = {
                fullName,
                email,
                course,
                paymentMethod,
                transactionId,
                date: new Date().toISOString()
            };

            console.log("Ragaan Galmee:", studentData);
            alert(`Galatoomi ${fullName}! Galmeen kee fi ragaan kaffaltii fudhatameera.`);
            
            regForm.reset();
        });
    }
});
