const registerButton = document.getElementById("sendUser");

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
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finally");
    }
}

registerButton.addEventListener("click", registerUser);