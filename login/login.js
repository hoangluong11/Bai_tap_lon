document.addEventListener("DOMContentLoaded", function () {
    const name = document.getElementById("usernameInput");
    const loginButton = document.getElementById("loginButton");
    const pass = document.getElementById("passwordInput");

    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        const username = name.value;
        const password = pass.value;
        if (!username || !password) {
            alert("Không được để trống tên người dùng và mật khẩu");
        } else {
            localStorage.setItem("username", username);
            alert('Đăng nhập thành công');
            window.location.href = "../index.html";
        }
    });
});
