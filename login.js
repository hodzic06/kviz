const loginButton = document.getElementById("logButton");

async function loginUser() {
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
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finally");
    }
}

loginButton.addEventListener("click", loginUser);