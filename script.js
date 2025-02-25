//treba poprravi  ovo sve

/*

const loginButton = document.getElementById("logButton");
const registerButton = document.getElementById("sendUser");


async function loginUser() {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    try {
        const response = await fetch(
            "https://0c6e-77-239-14-36.ngrok-free.app/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": "hodzicamar043@gmail.com",
                    "password": "123456",
                }),
            }
        );

        const data = await response.json();
        console.log("Login response:", data);

        if (data.token) {
            localStorage.setItem("token", data.token);
            console.log("Token saved:", data.token);
        } else {
            console.log("Login failed, token not received.");
        }

    } catch (error) {
        console.log("Login error:", error);
    } finally {
        console.log("Login request finished.");
    }
}

loginButton.addEventListener("click", loginUser);

async function registerUser() {
    try {
        const response = await fetch(
            "https://0c6e-77-239-14-36.ngrok-free.app/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": "hodzicamar043@gmail.com",
                    "password": "123456",
                    "firstName": "Amar",
                    "lastName": "Hodzic",
                    "username": "hodzic06"
                }),
            }
        );

        const data = await response.json();
        console.log("Register response:", data);

    } catch (error) {
        console.log("Register error:", error);
    } finally {
        console.log("Register request finished.");
    }
}

registerButton.addEventListener("click", registerUser);

*/