const userName = document.getElementById('userName');
const btnSave = document.getElementById('btnSave');
const HomeUserName = localStorage.getItem('HomeUserName');
const allert = document.getElementById('allert');

window.addEventListener('load', function () {
    userName.setAttribute('placeholder', `Attuale username: ${HomeUserName}. Scegli il nuovo username...`);
})


btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    if (userName.value === "") {
        allert.classList.remove('d-none');
        allert.classList.add('d-block')
    } else {
        allert.classList.remove('d-block');
        allert.classList.add('d-none');
        localStorage.setItem('userName', userName.value);
        window.location.href = 'index.html';
    }

})

