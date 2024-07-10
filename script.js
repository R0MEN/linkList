let login
let pass
let logPass

if (window.location.pathname.endsWith('index.html')) {
    window.history.replaceState({}, '', window.location.pathname.replace('index.html', ''));
}

let credentials; // Оголошуємо глобальну змінну

async function getLogPass() {
    let res = await fetch("./logPass.json");
    if (!res.ok) return "Some error";
    let data = await res.json();
    return data;
}

async function fetchCredentials() {
    let logPass = await getLogPass();
    credentials = {
        login: logPass.login,
        pass: logPass.pass
    };
    console.log("Login:", credentials.login); // Вивести значення для перевірки
    console.log("Password:", credentials.pass); // Вивести значення для перевірки
}

fetchCredentials().then(() => {
    // Використовувати змінну credentials поза асинхронною функцією
    console.log("Credentials outside async function:", credentials);
});


function decryptPassword(encryptedPassword) {
    let decryptedPassword = "";
    let reversedEncryptedPassword = encryptedPassword.split("").reverse().join("");
    for (let i = 0; i < reversedEncryptedPassword.length; i += 3) {
        decryptedPassword += reversedEncryptedPassword[i + 2];
    }
    return decryptedPassword;
}
