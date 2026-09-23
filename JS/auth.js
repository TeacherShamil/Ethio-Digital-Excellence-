// Auth.js - To'annoo Seensa (Login & Authentication)

class AuthService {
    static login(email, password) {
        if (!email || !password) {
            alert("Maaloo邮箱 fi jecha icciti guutaa!");
            return false;
        }
        // Fakkeenyaaf odeeffannoo seensa mirkaneessuu
        console.log(`User logged in with email: ${email}`);
        alert("Seensan milkaa'era!");
        window.location.href = "admin.html";
        return true;
    }

    static logout() {
        console.log("User logged out");
        window.location.href = "login.html";
    }
}
