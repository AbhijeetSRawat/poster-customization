const logout = document.querySelector('#logout');
logout.addEventListener('click', (event) => {
    if (confirm("Are You Sure You want to Logout ?")) {
        localStorage.removeItem("token");
        localStorage.removeItem("firstName");
        localStorage.removeItem("fullName");
        localStorage.removeItem('role');
        window.location.href = '../index.html';
    } else {
        location.reload();
    }
})