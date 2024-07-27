function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'CALONMAYIT' && password === 'Sur4bay4') {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('photoGallery').style.display = 'block';
    } else {
        alert('User ID atau kata sandi salah!');
    }

    return false;
}
