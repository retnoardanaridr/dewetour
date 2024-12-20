function imgGallery(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block"
}

function myNavbar() {
    var navLinks = document.getElementById('navLinks')
    navLinks.classList.toggle('show');
}
document.getElementById('menuToggle').addEventListener('click', myNavbar)

function dropdownFunc() {
    document.getElementById('dropdownUser').classList.toggle('show-dropdown');
}
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content')
        var i;
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show-dropdown')) {
                openDropdown.classList.remove('show-dropdown');
            }
        }
    }
}

// ============================== Register ======================= //
function btnRegister() {
    console.log("test")
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userData = {
        fullname,
        email,
        password,
        phone,
        role: 'user',
        address,
    }
    users.push(userData);

    localStorage.setItem('users', JSON.stringify(users));
    alert('Register Successful!!');
    document.getElementById('registerForm').reset();
}

function btnLogin() {
    try {
        const emailLogin = document.getElementById('login-email').value;
        const passwordLogin = document.getElementById('login-password').value;
        const userStorage = JSON.parse(localStorage.getItem('users'));
        let usersLogin = userStorage.find(users => users.email === emailLogin && users.password === passwordLogin)
        if (usersLogin) {
            console.log("test")
            alert('Login Successful!!')
            localStorage.setItem('userLogin', JSON.stringify({emailLogin, passwordLogin}));
            console.log("login save", {emailLogin, passwordLogin})
        } else {
            alert('Email or Password Wrong!!!')
        }
    } catch (error) {
        console.error(error);
    }
}
    
    