const countBox = document.getElementById('count-box');
const incBtn = document.getElementsByClassName('btn-inc')[0];
const decBtn = document.getElementsByClassName('btn-dec')[0];
const resBtn = document.getElementsByClassName('btn-res')[0];

let cnt = 0;

incBtn.addEventListener('click', incFunc);
decBtn.addEventListener('click', decFunc);
resBtn.addEventListener('click', resFunc);

function incFunc(){
    cnt++;
    countBox.textContent = cnt;
}
function decFunc(){
    cnt--;
    countBox.textContent = cnt;
}
function resFunc(){
    cnt = 0;
    countBox.textContent = cnt;
}