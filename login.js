let login
let pass
let logPass
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
        login: decryptPassword(logPass.login),
        pass: decryptPassword(logPass.pass)
    };

 // Вивести значення для перевірки
}

fetchCredentials().then(() => {
    // Використовувати змінну credentials поза асинхронною функцією
    
});



function decryptPassword(encryptedPassword) {
    let decryptedPassword = "";
    let reversedEncryptedPassword = encryptedPassword.split("").reverse().join("");
    for (let i = 0; i < reversedEncryptedPassword.length; i += 3) {
        decryptedPassword += reversedEncryptedPassword[i + 2];
    }
    return decryptedPassword;
}