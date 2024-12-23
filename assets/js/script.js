const realUserName = document.getElementById('realUserName');

const userName = localStorage.getItem('userName');
console.log(userName);

realUserName.innerText = userName;

localStorage.setItem('HomeUserName', realUserName.innerText);