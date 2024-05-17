const form = document.getElementById('form')
form.addEventListener('submit', (p) => {
    p.preventDefault();
    const user = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    if (mail.value === '' || password.value === '') {
        alert("Please enter both username and password");
        return;
    }
    const data = JSON.parse(localStorage.getItem(user));
    console.log(data);
    if (data) {
        if (data.password === password) {
            sessionStorage.setItem('currentUser', JSON.stringify(data))
            alert('login successful')
            window.location.href = "homedashboard.html";
        }
    }
    else {
        alert("Incorrect username or password");
    }
})

let passwordVal = document.querySelectorAll('i');
for (let i = 0; i < passwordVal.length; i++) {
    passwordVal[i].addEventListener('click', () => {
        if (passwordVal[i].id === "hidePassword") {
            passwordVal[i].style.display = 'none';
            document.getElementById('showPassword').style.display = 'inline-block';
            document.getElementById('password').setAttribute('type', 'text');
        } else if (passwordVal[i].id === "showPassword") {
            passwordVal[i].style.display = 'none';
            document.getElementById('hidePassword').style.display = 'inline-block';
            document.getElementById('password').setAttribute('type', 'password');
        }
    });
}