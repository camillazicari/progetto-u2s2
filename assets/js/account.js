const userMail = document.getElementById('userMail');
const userMail2 = document.getElementById('userMail2');
const accountUserName = document.getElementById('userName');

const accountName = localStorage.getItem('HomeUserName');

userMail.innerText = `${accountName}@gmail.com`;
userMail2.innerText = `${accountName}@gmail.com`;

accountUserName.innerText = accountName;
realUserName.innerText = accountName;
